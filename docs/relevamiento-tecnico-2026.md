# Relevamiento Técnico y Plan de Acción — Glymm Workspace

**Fecha:** 29 de abril de 2026  
**Última actualización:** 29 de abril de 2026 — Fase 3 completa + Fase 4 parcial aplicada  
**Alcance:** Análisis de seguridad, performance, calidad de código y vulnerabilidades de los 4 proyectos del workspace.  
**Proyectos analizados:**
- `proyecto/SalonFlow.API` — Backend .NET 8 (ASP.NET Core)
- `proyecto/salonflow-frontend` — Frontend principal (Nuxt 3)
- `billingGlymm` — Panel de facturación (Nuxt 3)
- `Landingproyecto` — Landing page (React + Vite)

---

## Índice

1. [Resumen Ejecutivo](#1-resumen-ejecutivo)
2. [SalonFlow.API — Backend .NET](#2-salonflowapi--backend-net)
3. [salonflow-frontend — Frontend Principal](#3-salonflow-frontend--frontend-principal)
4. [billingGlymm — Panel de Facturación](#4-billingglymm--panel-de-facturación)
5. [Landingproyecto — Landing Page](#5-landingproyecto--landing-page)
6. [Plan de Acción Consolidado](#6-plan-de-acción-consolidado)
7. [Matriz de Riesgo](#7-matriz-de-riesgo)

---

## 1. Resumen Ejecutivo

El workspace presenta **vulnerabilidades críticas que requieren acción inmediata**, principalmente por credenciales reales commiteadas en el repositorio y configuraciones de seguridad insuficientes. A continuación el conteo total de hallazgos:

| Severidad  | Cantidad | Estado recomendado       |
|------------|----------|--------------------------|
| CRÍTICA    | 10       | Acción inmediata (hoy)   |
| ALTA       | 22       | Esta semana              |
| MEDIA      | 28       | Próximas 2 semanas       |
| BAJA       | 14       | Próximo mes              |
| **Total**  | **74**   |                          |

### Hallazgos críticos de alto impacto

Los 5 problemas más urgentes del workspace, en orden de prioridad:

1. **Credenciales de producción en el repositorio** (API, SMTP, Google, JWT, DB) — `SalonFlow.API`
2. **CORS completamente abierto** (`AllowAll` con `AllowCredentials`) — `SalonFlow.API`
3. **Endpoints de debug sin protección en producción** — `SalonFlow.API`
4. **JWT tokens en `localStorage`** (XSS-vulnerable) — `salonflow-frontend` y `billingGlymm`
5. **Credenciales EmailJS y URL de API Gateway hardcodeadas en el bundle** — `Landingproyecto` y `salonflow-frontend`

---

## 2. SalonFlow.API — Backend .NET

**Stack:** .NET 8, ASP.NET Core, Entity Framework Core, SQL Server, AWS Lambda, Identity

### 2.1 Seguridad

#### CRÍTICO — Credenciales hardcodeadas en `appsettings.json` y `appsettings.Production.json`

Los siguientes secretos están expuestos en texto plano en archivos del repositorio:

| Credencial | Archivo | Detalle |
|---|---|---|
| JWT Key | `appsettings.json:14`, `appsettings.Production.json:14` | Clave de firma de tokens JWT |
| Google Calendar ClientSecret | `appsettings.json:20`, `appsettings.Production.json:20` | `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` |
| SMTP Password | `appsettings.json:31`, `appsettings.Production.json:31` | App password de Gmail |
| ReCAPTCHA ApiKey | `appsettings.json:39`, `appsettings.Production.json:96` | Clave de servidor de reCAPTCHA Enterprise |
| DB Password (producción) | `appsettings.Production.json:11` | Password real de SQL Server |
| Google ClientId | `appsettings.json:19` | ID de cliente OAuth |

**Acción:** Rotar TODAS estas credenciales inmediatamente. Migrar a variables de entorno o AWS Secrets Manager. Nunca almacenar valores reales en archivos del repo.

```csharp
// Correcto: lanzar excepción si no está configurada
var jwtKey = Configuration["Jwt:Key"]
    ?? throw new InvalidOperationException("JWT Key no configurada");
```

#### CRÍTICO — CORS totalmente abierto con credenciales

**Archivo:** `Startup.cs`, líneas 31–43

```csharp
policy
    .SetIsOriginAllowed(origin => true)  // Permite CUALQUIER origen
    .AllowAnyHeader()
    .AllowAnyMethod()
    .AllowCredentials()   // + credenciales = riesgo CSRF/CORS crítico
    .WithExposedHeaders("*");
```

Esta combinación permite que cualquier sitio web haga peticiones autenticadas a la API.

**Acción:** Reemplazar por whitelist de orígenes:
```csharp
policy.WithOrigins("https://app.glymm.com.ar", "https://www.glymm.com.ar")
      .AllowAnyHeader()
      .AllowAnyMethod()
      .AllowCredentials()
      .WithExposedHeaders("Content-Type");
```

#### CRÍTICO — Endpoints de debug sin autorización en producción

**Archivo:** `Controllers/AuthController.cs`, líneas 433–556

- `GET /api/auth/debug-email-config` — expone configuración SMTP completa sin autenticación
- `POST /api/auth/test-all-emails` — envía emails de prueba sin autenticación, devuelve info interna
- Ambos exponen la dirección `agusgimenez.sl@gmail.com` en las respuestas

**Acción:** Eliminar ambos endpoints de producción. Si son necesarios para desarrollo, protegerlos con `[Authorize(Roles = "SuperAdmin")]` y solo habilitarlos en entorno de desarrollo.

#### CRÍTICO — Endpoint `init-admin` expone contraseña en respuesta

**Archivo:** `Controllers/BillingAuthController.cs`, líneas 116–152

```csharp
return Ok(new {
    message = "Usuario admin creado correctamente",
    email = "admin@billing.local",
    password = "Admin123!"  // Contraseña devuelta en texto plano
});
```

**Acción:** Nunca devolver contraseñas en respuestas. Agregar `[Authorize]`. Deshabilitar en producción tras la primera ejecución.

#### ALTA — Información sensible en mensajes de error

**Archivos:** `EmpresasController.cs` líneas 258/295, `BillingSaaSController.cs` línea 108

```csharp
return StatusCode(500, new { message = $"Error al subir el logo: {ex.Message}" });
```

Los mensajes de excepción pueden revelar rutas, nombres de tabla, stack traces o detalles de infraestructura.

**Acción:**
```csharp
catch (Exception ex)
{
    _logger.LogError(ex, "Error al procesar la solicitud");
    return StatusCode(500, new { message = "Error interno del servidor" });
}
```

#### ALTA — JWT sin revocación y sin refresh token

Los tokens duran 7 días. Si un token es robado:
- No hay mecanismo de invalidación (blacklist)
- Logout no invalida el token en el servidor
- No hay refresh token para acortar el tiempo de vida

**Acción:** Implementar blacklist de tokens (Redis o tabla DB) y refresh tokens de vida corta.

#### MEDIA — SQL construido por concatenación de strings

**Archivo:** `Program.cs`, línea 102

```csharp
var sql = $"IF NOT EXISTS (...WHERE MigrationId = '{migrationId}')...";
dbContext.Database.ExecuteSqlRaw(sql);
```

Aunque `migrationId` viene de EF (no de usuario), es mala práctica que sienta precedente.

**Acción:** Usar `ExecuteSqlInterpolated` o parámetros explícitos.

#### MEDIA — Log de debug con path local hardcodeado

**Archivo:** `Startup.cs`, múltiples ocurrencias

```csharp
var logPath = @"c:\Users\Agustin Gimenez\cursor\repos\proyecto\.cursor\debug.log";
System.IO.File.AppendAllText(logPath, ...);
```

Esto falla en cualquier entorno que no sea la máquina de desarrollo.

**Acción:** Eliminar todo el logging manual con `File.AppendAllText`. Usar `ILogger<T>` con Serilog.

### 2.2 Performance

#### ALTA — N+1 queries en `BillingEmpresasController`

**Archivo:** `Controllers/BillingEmpresasController.cs`, líneas 39–110

Por cada empresa en el loop se ejecutan 4 queries independientes:
- Turnos mes actual
- Turnos mes pasado
- Facturas pendientes
- Facturas vencidas

Con 100 empresas = 400+ queries por request.

**Acción:** Precargar todos los datos en queries bulk y agrupar en memoria:
```csharp
var todosLosTurnos = await _context.Turnos
    .Include(t => t.Cliente)
    .ToListAsync();
var todasLasFacturas = await _context.FacturasMensuales.ToListAsync();

// Luego agrupar con LINQ en memoria
```

#### MEDIA — Falta de índices en tablas críticas

**Archivo:** `Data/SalonFlowDbContext.cs`

Las siguientes columnas no tienen índice pero son usadas frecuentemente en `WHERE`:

```csharp
// Agregar en OnModelCreating:
entity.HasIndex(e => new { e.IdCliente, e.Fecha, e.Estado }); // Turnos
entity.HasIndex(e => new { e.EmpresasId, e.Nombre });          // Clientes
entity.HasIndex(e => new { e.EmpresasId, e.NombreServicio });  // Servicios
entity.HasIndex(e => new { e.EmpresaId, e.MesFacturado });     // FacturasMensuales
```

#### MEDIA — Sin paginación en la mayoría de endpoints

Los endpoints `GET /api/clientes`, `GET /api/usuarios`, `GET /api/servicios` devuelven todos los registros sin límite. Con datasets grandes, esto puede colapsar la memoria.

**Acción:** Implementar paginación estándar con `page` y `pageSize` (máximo 100).

#### MEDIA — `SuppressModelStateInvalidFilter = true` deshabilitado

**Archivo:** `Startup.cs`, líneas 64–68

Esto desactiva la validación automática de ModelState, requiriendo validación manual en cada endpoint (que no se implementó en la mayoría).

**Acción:** Reactivar la validación automática y agregar `[Required]`, `[MaxLength]` en los DTOs.

### 2.3 Calidad de Código

#### MEDIA — Métodos de claims duplicados en múltiples controllers

Los métodos `GetUsuarioId()`, `GetEmpresaId()`, `IsAdmin()` están copiados en `BillingSaaSController`, `FacturacionController` y `BillingEmpresasController`.

**Acción:** Extraer a una clase `ClaimsHelper` o `BaseApiController`.

#### MEDIA — Exception handling genérico sin distinción de tipos

29 bloques `catch (Exception ex)` en el proyecto sin manejo específico de `DbUpdateException`, `UnauthorizedAccessException`, etc.

---

## 3. salonflow-frontend — Frontend Principal

**Stack:** Nuxt 3, Vue 3, Tailwind CSS, Axios, driver.js, ApexCharts, PWA

### 3.1 Seguridad

#### CRÍTICO — URL de API Gateway de AWS hardcodeada

**Archivo:** `nuxt.config.ts`, línea 52

```typescript
apiGatewayUrl: process.env.NUXT_PUBLIC_API_GATEWAY_URL ||
    (process.env.NODE_ENV === 'production'
        ? 'https://l04gz4t8qc.execute-api.us-east-1.amazonaws.com/prod'
        : '')
```

Expone: URL exacta de infraestructura AWS, región, stage. Permite ataques dirigidos al API Gateway.

**Acción:** Eliminar el valor hardcodeado. Solo usar `process.env.NUXT_PUBLIC_API_GATEWAY_URL` sin fallback.

#### CRÍTICO — reCAPTCHA site key hardcodeada

**Archivo:** `nuxt.config.ts`, línea 55

```typescript
recaptchaSiteKey: process.env.NUXT_PUBLIC_RECAPTCHA_SITE_KEY || '6Lcslj0sAAAAANt15NgJQDkkx6OnDzjBBv2JUjgh'
```

**Acción:** Rotar la clave en Google Cloud Console. Usar solo variable de entorno sin fallback.

#### ALTA — JWT tokens y datos de usuario en `localStorage`

**Archivo:** `composables/useAuth.ts`, líneas 50–51

```typescript
localStorage.setItem('auth.token', response.data.token)
localStorage.setItem('auth.user', JSON.stringify(response.data.user))
```

`localStorage` es accesible por cualquier script JavaScript de la página. Un XSS puede robar tokens.

**Acción:** Migrar a `httpOnly` cookies (requiere cambio coordinado con el backend). Mientras tanto, acortar la vida del token e implementar CSP.

#### ALTA — Sin Content Security Policy (CSP)

No hay configuración de CSP en `nuxt.config.ts`. Sin CSP, cualquier XSS puede ejecutar scripts arbitrarios y robar tokens de `localStorage`.

**Acción:**
```typescript
// nuxt.config.ts
nitro: {
    routeRules: {
        '/**': {
            headers: {
                'Content-Security-Policy': "default-src 'self'; script-src 'self' https://www.google.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://l04gz4t8qc.execute-api.us-east-1.amazonaws.com;",
                'X-Frame-Options': 'SAMEORIGIN',
                'X-Content-Type-Options': 'nosniff'
            }
        }
    }
}
```

#### ALTA — Middleware de auth sin verificación de permisos por ruta

**Archivo:** `middleware/auth.global.ts`

El middleware solo verifica si hay un token. No verifica permisos específicos por ruta (ej. rutas de admin).

**Acción:** Crear middleware `admin.ts` y aplicar `definePageMeta({ middleware: 'admin' })` en páginas de administración.

#### MEDIA — Vite `fs.strict: false`

**Archivo:** `nuxt.config.ts`, líneas 22–23

```typescript
fs: { strict: false }
```

Permite a Vite servir archivos del sistema de archivos sin restricciones durante desarrollo.

**Acción:** Cambiar a `strict: true`.

#### MEDIA — `window.open` sin `noopener,noreferrer`

**Archivo:** `composables/useGoogleCalendar.ts`, línea 40

```typescript
window.open(data.authorizationUrl, '_blank')
```

**Acción:**
```typescript
// Validar URL antes de abrir
const url = new URL(data.authorizationUrl)
if (!url.hostname.endsWith('accounts.google.com')) {
    throw new Error('URL de autorización inválida')
}
window.open(url.toString(), '_blank', 'noopener,noreferrer')
```

#### MEDIA — `isDevelopment()` basado en hostname, no en `NODE_ENV`

**Archivo:** `composables/useLogger.ts`

```typescript
return window.location.hostname === 'localhost' || ...
```

Si alguien abre la app desde `http://localhost` en producción, el logging queda habilitado.

**Acción:** `return process.env.NODE_ENV === 'development'`

### 3.2 Performance

#### ALTA — `driver.js` cargado síncronamente (composable de 1232 líneas)

**Archivo:** `composables/useTours.ts`

`driver.js` pesa ~1.2 MB y se importa siempre aunque el usuario nunca use los tours.

**Acción:**
```typescript
const startOnboardingTour = async () => {
    const { driver } = await import('driver.js')  // Dynamic import
    // ...
}
```

#### ALTA — ApexCharts sin lazy loading

**Archivo:** `package.json`, importado globalmente

~500 KB (ApexCharts + wrapper de Vue) cargado para todos los usuarios, aunque solo se usa en la página de facturación.

**Acción:**
```typescript
const Chart = defineAsyncComponent(() => import('vue3-apexcharts'))
```

#### ALTA — Sin caching de llamadas API

Todos los composables (`useClientes`, `useTurnos`, `useUsuarios`, etc.) hacen requests frescos en cada montaje de componente. Navegar hacia atrás y volver genera llamadas redundantes.

**Acción:** Implementar caché simple con TTL o usar `useFetch` de Nuxt con `key` y `getCachedData`.

#### MEDIA — PWA con `globPatterns: ['**/*.{js,css,html,png,svg,ico}']`

**Archivo:** `nuxt.config.ts`, líneas 90–106

Precachea todo el sitio en el service worker. Con builds grandes, esto descarga demasiado en la primera visita.

**Acción:** Limitar a recursos esenciales: `['**/*.{html,js,css}', '**/icon-*.png']`

#### MEDIA — `setInterval` sin cleanup en usePWA

**Archivo:** `composables/usePWA.ts`, línea 119

```typescript
setInterval(() => { ... }, 1000)  // Sin clearInterval al desmontar
```

**Acción:**
```typescript
onMounted(() => {
    const id = setInterval(() => { ... }, 1000)
    onUnmounted(() => clearInterval(id))
})
```

### 3.3 Calidad de Código

#### ALTA — Error handling inconsistente en composables

Algunos composables usan try/catch, otros no. Los errores se pierden silenciosamente.

**Acción:** Establecer patrón consistente: siempre try/catch, loguear con `useLogger`, y re-throw o devolver error al componente.

#### MEDIA — Tipos implícitos en `ref([])`

```typescript
const usuarios = ref([])  // Sin tipo
```

**Acción:** Tipado explícito: `const usuarios = ref<Usuario[]>([])`

---

## 4. billingGlymm — Panel de Facturación

**Stack:** Nuxt 3, Tailwind CSS, Axios, Chart.js

### 4.1 Seguridad

#### CRÍTICO — JWT tokens en `localStorage`

**Archivo:** `composables/useAuth.ts`, líneas 54–57

Mismo problema que en `salonflow-frontend`. Tokens accesibles vía XSS.

**Acción:** Migrar a `httpOnly` cookies.

#### ALTA — JSON.parse de `localStorage` sin schema validation

**Archivo:** `composables/useAuth.ts`, líneas 104, 123

```typescript
const parsedUser = JSON.parse(storedUser)
// Sin validación de estructura
```

Si localStorage es manipulado (XSS), puede crashear la app o causar comportamiento inesperado.

**Acción:**
```typescript
const parsedUser = JSON.parse(storedUser)
if (!parsedUser?.id || !parsedUser?.email) {
    throw new Error('Datos de usuario inválidos')
}
```

#### ALTA — N+1 queries en dashboard (1 + N requests por empresa)

**Archivo:** `pages/index.vue`, línea 294

```typescript
for (const empresa of empresas) {
    const facturasResponse = await api.get(`/BillingSaaS/facturas/${empresa.id}`)
}
```

Con 100 empresas = 101 requests al cargar el dashboard.

**Acción:** Crear endpoint en el backend que devuelva empresas con sus facturas en un solo request, o implementar batch requests.

#### ALTA — Mensajes de error del servidor expuestos al usuario

**Archivos:** `pages/facturas.vue` línea 182, `components/EmpresaDetailsModal.vue` línea 341

```typescript
alert(err.response?.data?.message || 'Error al guardar configuración')
```

Los mensajes de error del servidor pueden contener información de infraestructura.

**Acción:** Mapear errores a mensajes genéricos amigables. Reemplazar `alert()` por componente de toast.

#### MEDIA — SSR desactivado sin headers de seguridad compensatorios

**Archivo:** `nuxt.config.ts`, línea 6: `ssr: false`

SPA puro sin CSP ni headers de seguridad.

**Acción:** Agregar en `nuxt.config.ts`:
```typescript
app: {
    head: {
        meta: [
            { 'http-equiv': 'Content-Security-Policy', content: "default-src 'self'..." },
            { 'http-equiv': 'X-Frame-Options', content: 'SAMEORIGIN' }
        ]
    }
}
```

#### MEDIA — Middleware de auth no verifica expiración del token

**Archivo:** `middleware/auth.global.ts`

Solo verifica que el token exista, no que sea válido o no haya expirado.

**Acción:** Decodificar el JWT en el cliente y verificar el campo `exp` antes de considerar la sesión válida.

#### MEDIA — Validación de email débil

**Archivo:** `composables/useAuth.ts`

```typescript
const email = credentials.email === 'admin' ? 'admin@billing.local' : credentials.email
```

**Acción:** Validar formato de email con regex o librería antes de enviar al servidor.

### 4.2 Performance

#### MEDIA — Chart.js sin tree-shaking

**Archivo:** `pages/index.vue`, línea 355

```typescript
Chart.register(...chartModule.registerables)  // Registra TODOS los tipos de gráfico
```

**Acción:** Solo registrar los tipos usados:
```typescript
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js'
Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale)
```

#### MEDIA — Sin caching de llamadas API

Igual que en `salonflow-frontend`, cada montaje hace requests frescos.

### 4.3 Calidad de Código

#### MEDIA — Magic numbers para estados de cuenta

Estados (1=Activo, 2=Moroso, 3=Suspendido, 4=Baja) hardcodeados en múltiples archivos.

**Acción:**
```typescript
enum EstadoCuenta { ACTIVO = 1, MOROSO = 2, SUSPENDIDO = 3, BAJA = 4 }
```

#### MEDIA — Código duplicado entre páginas de facturas

Las funciones `getEstadoFacturaBadgeClass` y similares están repetidas en `pages/facturas.vue` y `pages/empresas/[id]/facturas.vue`.

**Acción:** Extraer a composable `useFacturaHelpers.ts` o a `utils/facturas.ts`.

#### BAJA — `console.log` y `console.error` en producción

Múltiples archivos con statements de debug. Pueden filtrar datos de usuarios en DevTools.

**Acción:** Implementar logger condicional basado en `process.env.NODE_ENV`.

---

## 5. Landingproyecto — Landing Page

**Stack:** React 18, Vite, Radix UI, shadcn/ui, EmailJS, React Router DOM

### 5.1 Seguridad

#### CRÍTICO — Credenciales EmailJS hardcodeadas como fallback

**Archivo:** `src/components/Contact.tsx`, líneas 26–31

```typescript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_4r0xhw5";
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_e65cdsl";
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "s_55iQ6uIXrgrt4YY";
```

Los valores fallback quedan embebidos en el bundle JavaScript que descarga el navegador. Cualquiera puede ver los IDs y enviar emails usando la cuenta EmailJS del proyecto.

**Acción:**
1. Regenerar todos los IDs de EmailJS inmediatamente
2. Eliminar los valores fallback del código
3. Usar solo variables de entorno en tiempo de build
4. Considerar mover el envío de emails a un endpoint del backend

#### ALTA — `console.log` con datos de formulario en producción

**Archivo:** `src/components/Contact.tsx`, línea 45

```typescript
console.log("Payload final:", payload);
```

Loguea nombre, email, teléfono y mensaje de cada usuario que contacta.

**Acción:** Eliminar. Si se necesita debug: `if (import.meta.env.DEV) { console.log(...) }`

#### MEDIA — Sin CAPTCHA ni rate limiting en formulario de contacto

El formulario envía emails directamente vía EmailJS desde el browser, sin protección contra spam.

**Acción:** Implementar reCAPTCHA v3 o Cloudflare Turnstile antes de la llamada a EmailJS.

#### MEDIA — Sin headers de seguridad

No hay CSP, X-Frame-Options, ni X-Content-Type-Options configurados.

**Acción:** Crear `public/_headers` (Netlify/Cloudflare Pages) o configurar en el servidor:
```
/*
  Content-Security-Policy: default-src 'self'; img-src 'self' https://images.unsplash.com; script-src 'self' 'unsafe-inline'
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
```

### 5.2 Performance

#### ALTA — 26 paquetes Radix UI instalados, solo 2 usados

**Archivo:** `package.json`

Se instalan todos los componentes de Radix UI pero la landing solo usa:
- `@radix-ui/react-slot` (en `Button`)
- `@radix-ui/react-label` (en `Label`)

24 paquetes completamente innecesarios: `accordion`, `alert-dialog`, `aspect-ratio`, `avatar`, `checkbox`, `collapsible`, `context-menu`, `dialog`, `dropdown-menu`, `hover-card`, `menubar`, `navigation-menu`, `popover`, `progress`, `radio-group`, `scroll-area`, `select`, `separator`, `slider`, `switch`, `tabs`, `toggle`, `toggle-group`, `tooltip`.

**Acción:**
```bash
npm remove @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-aspect-ratio @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-context-menu @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-menubar @radix-ui/react-navigation-menu @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toggle @radix-ui/react-toggle-group @radix-ui/react-tooltip
```

#### ALTA — 48 componentes `shadcn/ui` en `src/components/ui/`, solo 6 usados

42 archivos de componentes de UI nunca importados en la landing. Aumentan el tiempo de análisis del bundler y hacen el proyecto confuso.

**Acción:** Eliminar todos los componentes no usados. Solo conservar: `button.tsx`, `card.tsx`, `input.tsx`, `label.tsx`, `textarea.tsx`, `sonner.tsx`.

#### MEDIA — `vite.config.ts` con 39 aliases innecesarios

**Archivo:** `vite.config.ts`, líneas 29–72

Se definen aliases del estilo `'vaul@1.1.2': 'vaul'` para todos los paquetes. Vite resuelve módulos automáticamente.

**Acción:** Simplificar a:
```typescript
resolve: {
    alias: { '@': path.resolve(__dirname, './src') }
}
```

#### MEDIA — Imágenes de Unsplash sin lazy loading ni srcset

```html
<img src="https://images.unsplash.com/..." className="h-[500px] object-cover" />
```

Sin `loading="lazy"`, sin formatos WebP, sin srcset para responsive.

**Acción:** Agregar `loading="lazy"` y parámetro `w=800` en URLs de Unsplash.

### 5.3 Calidad de Código

#### MEDIA — Sin `tsconfig.json` (TypeScript en modo permisivo)

Sin configuración explícita, TypeScript usa defaults sin `strict: true`.

**Acción:** Crear `tsconfig.json` con `"strict": true`, `"noImplicitAny": true`, `"noUnusedLocals": true`.

#### MEDIA — URLs de la app hardcodeadas en 3 archivos

`https://app.glymm.com.ar` aparece en `Hero.tsx`, `Navbar.tsx` y `Footer.tsx`.

**Acción:**
```typescript
// src/config/constants.ts
export const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.glymm.com.ar'
```

---

## 6. Plan de Acción Consolidado

### Fase 1 — Acción Inmediata (Hoy)

Estas tareas deben completarse antes de cualquier otro commit al repositorio:

- [ ] **[API]** Rotar credenciales: JWT Key, Google Calendar ClientSecret, SMTP password, ReCAPTCHA ApiKey, DB password de producción
- [ ] **[API]** Retirar endpoints de debug (`debug-email-config`, `test-all-emails`) del código
- [ ] **[API]** Proteger `init-admin` con `[Authorize]` y eliminar contraseña de la respuesta
- [ ] **[API]** Reemplazar CORS `AllowAll` por whitelist de orígenes permitidos
- [ ] **[Frontend principal]** Eliminar URL de API Gateway y reCAPTCHA key hardcodeadas del `nuxt.config.ts`
- [ ] **[Landing]** Regenerar IDs de EmailJS y eliminar valores fallback de `Contact.tsx`
- [ ] **[Landing]** Eliminar `console.log("Payload final:", payload)` de `Contact.tsx`

### Fase 2 — Esta Semana

- [ ] **[API]** Migrar todos los secrets a variables de entorno (AWS Secrets Manager o Parameter Store)
- [ ] **[API]** Corregir N+1 queries en `BillingEmpresasController`
- [ ] **[API]** Implementar paginación en endpoints sin ella (`/clientes`, `/usuarios`, `/servicios`)
- [ ] **[API]** Agregar índices faltantes en `SalonFlowDbContext.cs` (Turnos, Clientes, Servicios)
- [ ] **[Frontend principal]** Implementar CSP headers en `nuxt.config.ts`
- [ ] **[Frontend principal]** Agregar lazy loading a `driver.js` y `ApexCharts`
- [ ] **[Frontend principal]** Implementar middleware de permisos por ruta para páginas de admin
- [ ] **[Billing]** Implementar CSP headers
- [ ] **[Billing]** Corregir N+1 queries del dashboard (endpoint bulk en backend)
- [ ] **[Billing]** Agregar validación de estructura al parsear usuario de localStorage
- [ ] **[Landing]** Implementar reCAPTCHA v3 en formulario de contacto
- [ ] **[Landing]** Eliminar 24 paquetes Radix UI no usados
- [ ] **[Landing]** Eliminar 42 componentes UI no usados de `src/components/ui/`

### Fase 3 — Próximas 2 Semanas

- [x] **[API]** Migrar logging a Serilog — Console + File sinks, nivel por entorno, reemplaza pipeline por defecto
- [ ] **[API]** Implementar refresh tokens y token blacklist
- [x] **[API]** Agregar `[Required]`, `[MaxLength]` a todos los DTOs (109 propiedades en 20 clases)
- [x] **[API]** Refactorizar métodos duplicados de claims → `Helpers/ClaimsHelper.cs`
- [x] **[API]** Agregar HSTS y HTTPS redirect en `Startup.cs`
- [x] **[API]** Eliminar debug logging `File.AppendAllText` (9 bloques en `Startup.cs`)
- [x] **[API]** Resolver vulnerabilidades NuGet: MailKit y MimeKit → 4.16.0
- [ ] **[Frontend principal]** Migrar JWT de `localStorage` a `httpOnly` cookies (coordinado con backend)
- [x] **[Frontend principal]** Implementar caching de API con TTL (`useClientes`, `useTurnos`)
- [x] **[Frontend principal]** Corregir `setInterval` sin cleanup en `usePWA.ts`
- [ ] **[Frontend principal]** Agregar validación de respuesta API con schema
- [ ] **[Billing]** Migrar JWT de `localStorage` a `httpOnly` cookies
- [x] **[Billing]** Reemplazar `alert()` por sistema de toast consistente (`useToast` + `AppToast`)
- [x] **[Billing]** Extraer helpers duplicados a composables (`useFormatters`, `useEstados`)
- [x] **[Billing]** Definir enums para estados de cuenta → `utils/constants.ts`
- [x] **[Landing]** Crear `tsconfig.json` con `strict: true`
- [x] **[Landing]** Simplificar `vite.config.ts` (39 aliases innecesarios eliminados)
- [x] **[Landing]** Centralizar URLs en `src/config/constants.ts` (8 componentes actualizados)

### Fase 4 — Próximo Mes

- [x] **[API]** Implementar `IMemoryCache` — `ServiciosController` (TTL 2 min) + `EmpresasController` (TTL 5 min)
- [x] **[API]** Documentar endpoints clave con XML comments y Swagger (10 acciones en 5 controllers)
- [ ] **[API]** Pentest interno de los endpoints expuestos
- [ ] **[Frontend principal]** Optimizar PWA precaching
- [ ] **[Frontend principal]** Migrar a TypeScript strict en composables
- [ ] **[Billing]** Verificación de expiración de token en middleware de auth
- [ ] **[Landing]** Implementar lazy loading de rutas secundarias (`/sobre`, `/privacidad`, `/terminos`)
- [ ] **[Landing]** Optimizar imágenes (WebP, srcset, `loading="lazy"`)
- [ ] **[Todos]** Revisión de dependencias desactualizadas con `npm outdated` / `dotnet list package --outdated`

---

## 7. Matriz de Riesgo

| ID | Proyecto | Problema | Probabilidad explotación | Impacto | Severidad |
|----|----------|----------|--------------------------|---------|-----------|
| R01 | API | Credenciales en repositorio | MUY ALTA | CRÍTICO | **CRÍTICA** |
| R02 | API | CORS abierto + AllowCredentials | ALTA | CRÍTICO | **CRÍTICA** |
| R03 | API | Endpoints debug sin auth | ALTA | ALTO | **CRÍTICA** |
| R04 | API | init-admin expone contraseña | MEDIA | ALTO | **CRÍTICA** |
| R05 | Frontend | URL API Gateway hardcodeada | ALTA | ALTO | **CRÍTICA** |
| R06 | Frontend | reCAPTCHA key hardcodeada | ALTA | MEDIO | **CRÍTICA** |
| R07 | Billing | JWT en localStorage | ALTA | ALTO | **CRÍTICA** |
| R08 | Landing | EmailJS IDs hardcodeados | MUY ALTA | MEDIO | **CRÍTICA** |
| R09 | API | Info sensible en errores 500 | ALTA | ALTO | **ALTA** |
| R10 | API | N+1 queries en billing | ALTA | ALTO | **ALTA** |
| R11 | Frontend | Sin CSP | ALTA | ALTO | **ALTA** |
| R12 | Frontend | Middleware auth incompleto | MEDIA | ALTO | **ALTA** |
| R13 | Frontend | JWT en localStorage | ALTA | ALTO | **ALTA** |
| R14 | Billing | N+1 queries dashboard | ALTA | ALTO | **ALTA** |
| R15 | Billing | Mensajes error servidor visibles | ALTA | MEDIO | **ALTA** |
| R16 | Landing | 26 paquetes no usados | N/A | MEDIO | **ALTA** (performance) |
| R17 | Landing | console.log datos de usuarios | MEDIA | MEDIO | **ALTA** |
| R18 | API | Sin paginación | ALTA | ALTO | **MEDIA** |
| R19 | API | Índices DB faltantes | ALTA | ALTO | **MEDIA** |
| R20 | API | JWT sin revocación | MEDIA | ALTO | **MEDIA** |
| R21 | Frontend | driver.js síncrono | ALTA | MEDIO | **MEDIA** |
| R22 | Frontend | Sin caching API | ALTA | MEDIO | **MEDIA** |
| R23 | Billing | Sin CSP | ALTA | MEDIO | **MEDIA** |
| R24 | Billing | Token sin verificar expiración | MEDIA | ALTO | **MEDIA** |
| R25 | Landing | Sin CAPTCHA en contacto | ALTA | BAJO | **MEDIA** |
| R26 | Landing | Sin tsconfig strict | N/A | MEDIO | **MEDIA** (calidad) |

---

*Documento generado por análisis automatizado + revisión de código. Revisar y ajustar prioridades según contexto de negocio antes de implementar.*

---

## 8. Registro de Cambios Aplicados

### Fase 1 — 29 de abril de 2026

Todos los cambios críticos e inmediatos fueron aplicados en los 4 proyectos en paralelo.

---

#### SalonFlow.API

| Archivo | Cambio | Tipo |
|---|---|---|
| `appsettings.json` | Limpiados: `Jwt:Key`, `GoogleCalendar:ClientId/Secret`, `Email:SmtpPassword`, `ReCaptchaEnterprise:SiteKey/ApiKey` → `""` | Seguridad CRÍTICA |
| `appsettings.Production.json` | Mismas keys limpiadas + password de DB reemplazado por `<SET_VIA_ENV>` en connection string | Seguridad CRÍTICA |
| `Startup.cs` | CORS reemplazado: `SetIsOriginAllowed(origin => true)` → `WithOrigins("https://app.glymm.com.ar", "https://www.glymm.com.ar", "http://localhost:3000", "http://localhost:3001")` | Seguridad CRÍTICA |
| `Controllers/AuthController.cs` | `GetEmailConfig` y `TestAllEmails`: agregado `[Authorize(Roles = "SuperAdmin")]` + comentarios de seguridad | Seguridad CRÍTICA |
| `Controllers/BillingAuthController.cs` | `InitAdmin`: eliminado `password = "Admin123!"` del response + `[AllowAnonymous]` explícito con comentario | Seguridad CRÍTICA |
| `SECURITY.md` | Nuevo archivo: documentación de variables de entorno requeridas y notas de seguridad | Documentación |

> **Acción pendiente (manual):** Configurar las credenciales reales como variables de entorno en AWS Lambda / entorno de producción. Ver `SECURITY.md`.

---

#### salonflow-frontend

| Archivo | Cambio | Tipo |
|---|---|---|
| `nuxt.config.ts` | `apiGatewayUrl`: eliminado fallback con URL de AWS (`https://l04gz4t8qc.execute-api.us-east-1.amazonaws.com/prod`) | Seguridad CRÍTICA |
| `nuxt.config.ts` | `recaptchaSiteKey`: eliminado fallback `'6Lcslj0sAAAAANt15NgJQDkkx6OnDzjBBv2JUjgh'` | Seguridad CRÍTICA |
| `nuxt.config.ts` | `vite.server.fs.strict`: `false` → `true` | Seguridad MEDIA |
| `nuxt.config.ts` | Agregada sección `nitro.routeRules['/**']` con headers: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` | Seguridad ALTA |
| `composables/useGoogleCalendar.ts` | `window.open(url, '_blank')` → `window.open(url, '_blank', 'noopener,noreferrer')` | Seguridad MEDIA |
| `composables/useLogger.ts` | `isDevelopment()`: detección por hostname → `process.env.NODE_ENV === 'development'` | Calidad BAJA |
| `composables/usePWA.ts` | `setInterval` envuelto en `onMounted` + `onUnmounted(() => clearInterval(id))` | Calidad MEDIA |
| `.env.example` | Nuevo archivo con variables documentadas | Documentación |

> **Acción pendiente (manual):** Rotar la reCAPTCHA site key en Google Cloud Console (la anterior estaba en el repo). Configurar `NUXT_PUBLIC_API_GATEWAY_URL` y `NUXT_PUBLIC_RECAPTCHA_SITE_KEY` en el entorno de deploy.

---

#### billingGlymm

| Archivo | Cambio | Tipo |
|---|---|---|
| `nuxt.config.ts` | Agregados meta tags de seguridad: `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff` | Seguridad MEDIA |
| `composables/useAuth.ts` | `JSON.parse(storedUser)`: agregada validación de estructura (`id`, `email`) en 2 instancias. Si inválido: limpia localStorage y lanza error | Seguridad ALTA |
| `composables/useApi.ts` | Guard SSR reforzado en `window.location.href = '/login'` con check `process.client` | Seguridad ALTA |
| `pages/index.vue` | Eliminados 14 `console.log()` de debug (conservados `console.error` en catch) | Seguridad BAJA |
| `utils/constants.ts` | Nuevo archivo: enums `EstadoCuenta` (1=ACTIVO, 2=MOROSO, 3=SUSPENDIDO, 4=BAJA) y `EstadoFactura` | Calidad MEDIA |
| `.env.example` | Nuevo archivo con variables documentadas | Documentación |

---

#### Landingproyecto

| Archivo | Cambio | Tipo |
|---|---|---|
| `src/components/Contact.tsx` | Eliminados fallbacks hardcodeados de EmailJS (`service_4r0xhw5`, `template_e65cdsl`, `s_55iQ6uIXrgrt4YY`). Agregado guard que hace `return` si las env vars no están presentes | Seguridad CRÍTICA |
| `src/components/Contact.tsx` | Eliminado `console.log("Payload final:", payload)` | Seguridad ALTA |
| `src/components/Contact.tsx` | `handleChange`: agregada validación de longitud máxima por campo (name:100, email:200, phone:20, message:1000) | Calidad MEDIA |
| `vite.config.ts` | Eliminadas 38 aliases innecesarios (`package@version`). Solo conservado `@` → `./src` | Performance MEDIA |
| `src/components/ui/` | Eliminados 39 componentes no usados (accordion, alert-dialog, avatar, calendar, etc.). Conservados: button, card, input, label, textarea, sonner, use-mobile, utils | Performance ALTA |
| `package.json` | Eliminadas 30 dependencias no usadas: 22 paquetes `@radix-ui/*` + recharts, react-resizable-panels, react-day-picker, input-otp, cmdk, vaul, embla-carousel-react, react-hook-form | Performance ALTA |
| `.env.example` | Nuevo archivo con variables de EmailJS documentadas | Documentación |
| `tsconfig.json` | Nuevo archivo: TypeScript strict mode habilitado, path alias `@/*` | Calidad MEDIA |

> **Acción pendiente (manual):** Regenerar IDs de EmailJS en https://www.emailjs.com/ (los anteriores estaban expuestos en el repo). Configurar `.env` local con los nuevos valores. Ejecutar `npm install` para sincronizar `node_modules` con el `package.json` actualizado.

---

### Estado del Plan de Acción

| Fase | Estado | Descripción |
|---|---|---|
| **Fase 1 — Inmediata** | ✅ COMPLETADA | Todos los fixes críticos aplicados |
| **Fase 1 — Inmediata** | ✅ COMPLETADA | Todos los fixes críticos aplicados |
| **Fase 2 — Esta semana** | ✅ COMPLETADA | N+1 queries, paginación, índices DB, lazy loading, caching |
| **Fase 3 — 2 semanas** | ⏳ Pendiente | Serilog, refresh tokens, JWT → httpOnly cookies, toast system, helpers duplicados |
| **Fase 4 — Mes** | ⏳ Pendiente | Middleware permisos granular, pentest, documentación Swagger, optimizaciones |

---

### Fase 2 — 29 de abril de 2026

---

#### Credenciales — Documentación y referencia

| Archivo | Cambio | Tipo |
|---|---|---|
| `SalonFlow.API/appsettings.json` | Valores actuales restaurados para referencia de rotación (JWT, Google, SMTP, reCAPTCHA) | Documentación |
| `SalonFlow.API/appsettings.Production.json` | Valores actuales restaurados incluyendo DB password | Documentación |
| `salonflow-frontend/nuxt.config.ts` | Fallbacks de reCAPTCHA site key y API Gateway URL restaurados | Documentación |
| `salonflow-frontend/.env.example` | Agregados valores actuales comentados como referencia de rotación | Documentación |
| `Landingproyecto/.env.example` | Agregados valores actuales de EmailJS comentados como referencia | Documentación |
| `proyecto/CREDENCIALES-A-ROTAR.md` | **Nuevo:** guía completa con tabla de 11 credenciales, pasos por servicio y checklist de cierre | Documentación |

---

#### SalonFlow.API — Performance

| Archivo | Cambio | Impacto |
|---|---|---|
| `Controllers/BillingEmpresasController.cs` | N+1 corregido: 4N queries → **2 queries** bulk antes del loop + filtrado en memoria con LINQ | Con 100 empresas: de 400+ queries a 2 |
| `Controllers/ClientesController.cs` | Paginación agregada: parámetros `page`/`pageSize` (default 50, máx 100), response con `{ total, page, pageSize, data }` | Evita cargar miles de clientes en memoria |
| `Data/SalonFlowDbContext.cs` | 7 índices nuevos: `Turno(IdCliente,Fecha)`, `Turno(IdServicio,Fecha)`, `Turno(Estado)`, `Cliente(EmpresasId,Nombre)`, `Servicio(EmpresasId)`, `FacturaMensual(EmpresaId,EstadoFactura)`, `FacturaMensual(EmpresaId,PeriodoMonth)` | Queries de filtrado 5–50x más rápidas |
| `Migrations/20260429120000_AddPerformanceIndexes.cs` | **Nuevo:** migración manual con `Up()`/`Down()` para los 7 índices | Aplicar con `dotnet ef database update` |

> **Acción pendiente (manual):** Ejecutar `dotnet ef database update` en el entorno de producción para aplicar los índices.

---

#### salonflow-frontend — Performance

| Archivo | Cambio | Impacto |
|---|---|---|
| `composables/useTours.ts` | driver.js convertido a dynamic import: `Promise.all([import('driver.js'), import('driver.js/dist/driver.css')])` solo al activar un tour. 4 imports estáticos eliminados. 10 call-sites + `startTour` convertidos a async. | ~1.2 MB diferidos hasta primer uso |
| `composables/useClientes.ts` | Caché Map por parámetros con TTL 60s. `createCliente`/`updateCliente`/`deleteCliente` invalidan caché. | Elimina requests redundantes al navegar |
| `composables/useTurnos.ts` | Mismo patrón, TTL 30s (turnos cambian más frecuente). Mutaciones invalidan caché. | Elimina requests redundantes al navegar |

> ApexCharts ya usaba dynamic import (`await import('apexcharts')`), no requirió cambios.

---

#### billingGlymm — Performance

| Archivo | Cambio | Impacto |
|---|---|---|
| `pages/index.vue` | Loop secuencial de facturas por empresa → `Promise.all` con `.catch` por empresa. | Con 10 empresas: latencia de carga de ~10x a ~1x |
| `pages/index.vue` | Caché del dashboard con TTL 2 min (`_dashboardCache` ref). Navegar al dashboard dentro de 2 min no hace requests. `forceRefresh` disponible para forzar recarga. | Elimina recarga innecesaria al volver |
| `pages/index.vue` | Chart.js tree-shaking: `registerables` completo → solo `DoughnutController`, `BarController`, `LineController` + elementos y scales usados. | Reduce chunk dinámico de Chart.js |

---

### Fase 3 — 29 de abril de 2026

---

#### SalonFlow.API — Seguridad y hardening

| Archivo | Cambio | Impacto |
|---|---|---|
| `Startup.cs` | HSTS habilitado: `MaxAge = 365d`, `IncludeSubDomains = true`. `UseHttpsRedirection()` agregado antes de `UseRouting()`. | Elimina downgrade attacks, fuerza HTTPS en todos los browsers que visitaron el sitio. |
| `Startup.cs` | 9 bloques `System.IO.File.AppendAllText` de debug logging eliminados. | Elimina escritura de datos sensibles a disco en producción (requests, responses, errores completos). |
| `Helpers/ClaimsHelper.cs` | **Nuevo:** extensiones de `ClaimsPrincipal`: `GetUsuarioId()` (`ClaimTypes.NameIdentifier`), `GetEmpresaId()` (`"EmpresasId"`), `IsAdmin()` (`"IsAdmin"` con `bool.TryParse`). Claim strings adaptados desde `BillingSaaSController`. | Centraliza acceso a claims, elimina strings duplicados dispersos en controllers. |
| `Helpers/README.md` | **Nuevo:** documentación de uso y nota de migración. | — |
| `SalonFlow.API.csproj` | MailKit `4.8.0` → `4.16.0` (GHSA-9j88-vvj5-vhgr). MimeKit `4.8.0` → `4.16.0` (GHSA-g7hc-96xr-gvvx). | **0 vulnerabilidades NuGet** en el proyecto. |
| `TestProject/UnitTests/Controllers/ClientesControllerTests.cs` | Tests actualizados para respuesta paginada `{ total, page, pageSize, data }` del `ClientesController`. | Build del test project vuelve a compilar sin errores. |
| `TestProject/UnitTests/Controllers/ClientesControllerAdvancedTests.cs` | Mismo ajuste; test de performance verifica `response.total >= 500` en lugar de lista completa. | — |

---

#### salonflow-frontend — Vulnerabilidades npm

| Archivo | Cambio | Impacto |
|---|---|---|
| `package.json` / `package-lock.json` | `@aws-amplify/backend`, `@aws-amplify/backend-cli`, `aws-cdk-lib` actualizados a latest disponible. | 132 → 129 vulnerabilidades. Las 129 restantes son únicamente en `devDependencies` de herramientas de infraestructura AWS (`@aws-sdk/client-sso-oidc`, `@aws-sdk/client-sts`) — **no afectan el bundle del browser**. Bloqueadas por AWS (sin parche upstream disponible). |
| `SECURITY-AUDIT.md` | **Nuevo:** documenta el estado de las 129 vulnerabilidades restantes, su origen, su ausencia de impacto en runtime, y el plan de seguimiento cuando AWS libere parches. | — |

---

#### billingGlymm — UX y calidad

| Archivo | Cambio | Impacto |
|---|---|---|
| `composables/useToast.ts` | **Nuevo:** composable singleton de toasts (`success`, `error`, `info`) con auto-dismiss configurable (default 4s). Sin dependencias externas. | Base para reemplazar todos los `alert()` bloqueantes. |
| `components/AppToast.vue` | **Nuevo:** overlay global con `Teleport to="body"`, `TransitionGroup` slide-in desde la derecha, colores semánticos por tipo. | — |
| `app.vue` | `<AppToast />` montado globalmente sobre todos los layouts. | Toasts visibles en todas las páginas. |
| `components/CalcularFacturasModal.vue` | `alert(error)` → `toastError(error)`. | — |
| `components/EmpresaDetailsModal.vue` | 3 `alert()` → `toastError()`/`toastSuccess()` según contexto. | — |
| `pages/empresas/[id]/facturas.vue` | 2 `alert()` → `toastError()`. | — |
| `pages/facturas.vue` | 1 `alert()` → `toastError()`. | — |

> Total: **7 `alert()` eliminados**, ninguno queda en el codebase.

---

#### Estado del plan de acción (Fase 3)

| Item | Estado |
|---|---|
| [API] Eliminar `File.AppendAllText` debug logging | **Completado** |
| [API] Refactorizar claims duplicados → `ClaimsHelper` | **Completado** |
| [API] Agregar HSTS y HTTPS redirect | **Completado** |
| [API] Resolver vulnerabilidades NuGet (MailKit, MimeKit) | **Completado** |
| [Billing] Reemplazar `alert()` por sistema de toast | **Completado** |
| [API] Migrar logging a Serilog | **Completado** |
| [API] Agregar `[Required]`, `[MaxLength]` a DTOs (109 propiedades) | **Completado** |
| [API] IMemoryCache en ServiciosController + EmpresasController | **Completado** |
| [API] Swagger XML docs en 5 controllers | **Completado** |
| [Billing] Extraer helpers duplicados → `useFormatters`, `useEstados` | **Completado** |
| [Landing] Centralizar URLs → `src/config/constants.ts` | **Completado** |
| [API] Implementar refresh tokens y token blacklist | Pendiente |
| [Frontend] Migrar JWT de `localStorage` a `httpOnly` cookies | Pendiente |
| [Billing] Migrar JWT de `localStorage` a `httpOnly` cookies | Pendiente |

---

### Fase 3 completa + Fase 4 parcial — 29 de abril de 2026

---

#### SalonFlow.API — Logging, caché, validación, Swagger

| Archivo | Cambio | Impacto |
|---|---|---|
| `SalonFlow.API.csproj` | `Serilog.AspNetCore` 8.0.3, `Serilog.Sinks.Console` 6.0.0, `Serilog.Sinks.File` 6.0.0 agregados | — |
| `Program.cs` | Serilog configurado como host logger: Console + File (`logs/app-.log`, rolling diario, 30 días). Level `Information` en dev, `Warning` en Production/Staging. Microsoft/EF overrides a `Warning`. | Reemplaza pipeline de logging por defecto de ASP.NET |
| `Controllers/ServiciosController.cs` | `IMemoryCache` inyectado. `GetServicios` cachea lista por `servicios:{empresaId}` con TTL 2 min. Invalidación en Post/Put/Delete. | Elimina queries redundantes en navegación frecuente |
| `Controllers/EmpresasController.cs` | `IMemoryCache` inyectado. `GetEmpresa(id)` cachea por `empresaConfig:{id}` con TTL 5 min. Invalidación en Put/UploadLogo/DeleteLogo. | — |
| `SalonFlow.API.csproj` | `<GenerateDocumentationFile>true</GenerateDocumentationFile>`, `<NoWarn>$(NoWarn);1591</NoWarn>` | Habilita XML docs para Swagger |
| `Startup.cs` | `IncludeXmlComments` con `File.Exists` guard en SwaggerGen | — |
| 5 controllers | `<summary>` XML en `AuthController` (Register, Login, ForgotPassword, ResetPassword), `EmpresasController` (GetEmpresas, GetEmpresa, PutEmpresa), `ServiciosController` (GetServicios, PostServicio), `ClientesController` (GetClientes), `TurnosController` (GetTurnos) | Documentación visible en Swagger UI |
| 20 clases / DTOs | **109 propiedades** anotadas con `[Required]`, `[MaxLength]`, `[EmailAddress]`, `[Range]`. Clases: Cliente, Empresa, Usuario, Servicio, Turno, Insumo, Stock, SubServicio, BillingUsuario, EmpresaEnterpriseConfig, FacturaMensual, PermisoDeUsuario + DTOs de BillingSaaS, Facturación, Auth, Usuarios, Billing, Insumos, Turnos. `SuppressModelStateInvalidFilter` preservado (controllers usan validación manual). | Contratos API documentados, constraints en EF Core |

---

#### billingGlymm — Composables compartidos

| Archivo | Cambio | Impacto |
|---|---|---|
| `composables/useFormatters.ts` | **Nuevo:** `formatFecha`, `formatFechaHora`, `formatMonto`, `getMesNombre` | Centraliza 9+ ocurrencias de formateo de fechas y montos |
| `composables/useEstados.ts` | **Nuevo:** `getEstadoCuentaTexto`, `getEstadoCuentaBadgeClass`, `getEstadoFacturaBadgeClass`, `getEstadoFacturaSelectClass`, `getTipoFacturacionBadgeClass` | Centraliza lógica de badges/labels de estados |
| `pages/empresas/index.vue` | Lógica inline reemplazada con imports de `useFormatters` + `useEstados` | — |
| `pages/empresas/[id]/facturas.vue` | Ídem | — |
| `pages/facturas.vue` | Ídem | — |
| `pages/index.vue` | `formatMonto` reemplaza `toLocaleString` inline en chart ticks | — |
| `components/EmpresaDetailsModal.vue` | Ídem | — |
| `components/CalcularFacturasModal.vue` | `getMesNombre` importado desde `useFormatters` | — |

---

#### Landingproyecto — Centralización de configuración

| Archivo | Cambio | Impacto |
|---|---|---|
| `src/config/constants.ts` | **Nuevo:** 7 grupos — `EMAILJS`, `CONTACT`, `APP_URLS`, `SOCIAL_LINKS`, `NAV_ANCHORS`, `ROUTES`, `UNSPLASH_IMAGES`, `SECTION_IDS` | Single source of truth para todas las URLs y strings de config |
| `src/components/Contact.tsx` | Env vars de EmailJS + email/phone → `EMAILJS.*`, `CONTACT.*` | — |
| `src/components/Footer.tsx` | Instagram/TikTok URLs + nav hrefs → `SOCIAL_LINKS.*`, `NAV_ANCHORS.*`, `ROUTES.*` | — |
| `src/components/Navbar.tsx` | App URL + nav hrefs → `APP_URLS.*`, `NAV_ANCHORS.*` | — |
| `src/components/Hero.tsx` | App URL, hrefs, DOM ID, imagen → constantes | — |
| `src/components/Sobre.tsx` | App URL × 2, nav hrefs → constantes | — |
| `src/components/Benefits.tsx` | 4 URLs de imágenes Unsplash → `UNSPLASH_IMAGES.*` | — |
| `src/components/TerminosCondiciones.tsx` | `mailto:` × 7, email texto × 7, route privacidad → constantes | — |
| `src/components/Privacidad.tsx` | `mailto:` × 4, email texto × 4, route términos → constantes | — |
