# Gestión de Permisos

## Introducción

Los permisos controlan qué secciones y funciones puede ver y usar cada usuario en GLYMM. En esta guía aprenderás a gestionar permisos de forma detallada.

---

## Acceso a Permisos

La sección de Permisos está disponible desde el menú principal. Solo los administradores pueden gestionar permisos.

---

## Vista de Permisos Disponibles

La sección muestra todos los permisos disponibles en el sistema, organizados por módulos:

### Módulos de Permisos

Los permisos están agrupados por módulos del sistema:
- **Clientes:** Gestión de clientas
- **Turnos:** Gestión de turnos
- **Servicios:** Gestión de servicios
- **Insumos:** Gestión de insumos
- **Facturación:** Acceso a reportes financieros
- **Usuarios:** Gestión de usuarios
- **Configuración:** Configuración del sistema
- **Stock:** Gestión de inventario
- Y más según las actualizaciones del sistema

### Expandir/Contraer Módulos

1. Haz clic en el nombre del módulo para expandirlo
2. Verás todas las acciones disponibles en ese módulo
3. Haz clic nuevamente para contraerlo

---

## Asignar Permisos a un Usuario

### Seleccionar Usuario

1. En la parte superior, selecciona el usuario de la lista desplegable
2. Se mostrarán los permisos actuales del usuario
3. Aparecerá el botón **+ Asignar Permiso**

### Asignar un Permiso

1. Haz clic en **+ Asignar Permiso**
2. Se abrirá un modal con todos los permisos disponibles
3. Los permisos están organizados por módulos
4. Selecciona el permiso que deseas asignar
5. Haz clic en **Asignar**

### Ver Permisos del Usuario

Una vez seleccionado un usuario, verás:
- **Permisos de [Nombre Usuario]:** Lista de permisos asignados
- Permisos organizados por módulos
- Opción para quitar permisos individuales

---

## Quitar Permisos

Para quitar un permiso de un usuario:

1. Selecciona el usuario de la lista desplegable
2. Expande el módulo que contiene el permiso
3. Haz clic en **Quitar** junto al permiso que deseas eliminar
4. El permiso se quitará inmediatamente

---

## Tipos de Permisos

### Permisos por Acción

Cada módulo puede tener diferentes tipos de acciones:

- **Ver/Leer:** Permite ver información pero no modificarla
- **Crear:** Permite crear nuevos registros
- **Editar:** Permite modificar registros existentes
- **Eliminar:** Permite eliminar registros

### Permisos Especiales

Algunos módulos pueden tener permisos especiales:
- **Facturación:** Acceso a reportes financieros
- **Configuración:** Modificar configuraciones del sistema
- **Usuarios:** Gestionar otros usuarios

---

## Administradores vs Usuarios

### Administradores

Los usuarios marcados como "Administrador" tienen:
- Acceso completo a todas las secciones
- Todos los permisos automáticamente
- No necesitan permisos individuales asignados

### Usuarios Regulares

Los usuarios que NO son administradores:
- Solo tienen acceso a secciones con permisos asignados
- Deben tener permisos específicos para cada acción
- No pueden acceder a secciones sin permisos

---

## Gestión de Permisos desde Usuarios

También puedes gestionar permisos desde la sección **Usuarios**:

1. Ve a **Usuarios**
2. Crea o edita un usuario
3. Si el usuario NO es administrador, verás la sección de Permisos
4. Expande los módulos y marca los permisos deseados
5. Los permisos se guardan al guardar el usuario

!!! tip "Dos Formas de Gestionar"
    Puedes gestionar permisos desde la sección de Permisos (vista detallada) o desde la sección de Usuarios (al crear/editar). Ambas formas son equivalentes.

---

## Mejores Prácticas

### ✅ Recomendaciones

- Asigna solo los permisos necesarios (principio de menor privilegio)
- Revisa periódicamente los permisos de los usuarios
- Organiza los permisos por roles (ej: "Recepcionista", "Profesional", "Gerente")
- Documenta qué permisos tiene cada rol
- Actualiza permisos cuando cambian las responsabilidades

### ❌ Evita

- Asignar permisos de administrador innecesariamente
- Dar acceso a facturación a usuarios que no lo necesitan
- Olvidar quitar permisos cuando un usuario cambia de rol
- Asignar todos los permisos "por si acaso"

---

## Roles Comunes

### Recepcionista

Permisos típicos:
- Ver, Crear, Editar Clientes
- Ver, Crear, Editar Turnos
- Ver Servicios
- Ver Insumos

### Profesional/Estilista

Permisos típicos:
- Ver Clientes
- Ver, Editar Turnos (solo los asignados)
- Ver Servicios
- Marcar turnos como Realizados

### Gerente/Administrador

Permisos típicos:
- Todos los permisos
- Acceso a Facturación
- Gestión de Usuarios
- Configuración

---

## Preguntas Frecuentes

**¿Puedo asignar permisos a un administrador?**
No es necesario. Los administradores tienen todos los permisos automáticamente.

**¿Qué pasa si quito todos los permisos de un usuario?**
El usuario no podrá acceder a ninguna sección del sistema (excepto su perfil básico).

**¿Puedo asignar permisos a múltiples usuarios a la vez?**
Actualmente, debes asignar permisos usuario por usuario. Consulta las actualizaciones para funcionalidades de asignación masiva.

**¿Los permisos se aplican inmediatamente?**
Sí, los cambios en permisos se aplican de inmediato. El usuario puede necesitar refrescar la página o cerrar sesión y volver a iniciar.

**¿Puedo ver qué permisos tiene un usuario sin entrar a la sección de Permisos?**
Sí, en la sección de Usuarios puedes ver si un usuario es administrador o tiene permisos específicos.

**¿Hay permisos que no puedo quitar?**
Los administradores siempre tienen todos los permisos. Para usuarios regulares, puedes quitar cualquier permiso.

**¿Cómo sé qué permisos necesita un usuario?**
Depende del rol y responsabilidades del usuario. Consulta la sección "Roles Comunes" arriba para ejemplos.

---

## Seguridad y Permisos

### Principio de Menor Privilegio

Asigna solo los permisos mínimos necesarios para que el usuario realice su trabajo. Esto mejora la seguridad del sistema.

### Revisión Periódica

Revisa regularmente los permisos de los usuarios para:
- Asegurar que siguen siendo apropiados
- Quitar permisos que ya no se necesitan
- Agregar permisos cuando cambian las responsabilidades

### Permisos Sensibles

Algunos permisos son más sensibles que otros:
- **Facturación:** Acceso a información financiera
- **Usuarios:** Puede crear/modificar otros usuarios
- **Configuración:** Puede cambiar configuraciones del sistema

Asigna estos permisos con cuidado y solo a usuarios de confianza.

---

## Solución de Problemas

### Usuario no puede acceder a una sección

**Verifica:**
1. Que el usuario tenga el permiso correspondiente asignado
2. Que el usuario no haya sido eliminado
3. Que el permiso esté activo

**Solución:**
1. Ve a la sección de Permisos
2. Selecciona el usuario
3. Asigna el permiso necesario

### Usuario tiene demasiados permisos

**Solución:**
1. Ve a la sección de Permisos
2. Selecciona el usuario
3. Quita los permisos innecesarios

---

## Integración con Otros Módulos

Los permisos afectan el acceso a:
- **Clientes:** Ver, crear, editar, eliminar clientas
- **Turnos:** Ver, crear, editar, eliminar turnos
- **Servicios:** Gestionar catálogo de servicios
- **Facturación:** Ver reportes e ingresos
- **Usuarios:** Gestionar otros usuarios
- **Configuración:** Modificar configuraciones

Asegúrate de asignar los permisos correctos según las necesidades de cada usuario.

