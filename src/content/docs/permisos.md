---
title: Permisos y Control de Acceso
description: Gestiona que puede ver y hacer cada usuario.
---

## IntroducciÃ³n

Los permisos controlan quÃ© secciones y funciones puede ver y usar cada usuario en GLYMM. En esta guÃ­a aprenderÃ¡s a gestionar permisos de forma detallada.

---

## Acceso a Permisos

La secciÃ³n de Permisos estÃ¡ disponible desde el menÃº principal. Solo los administradores pueden gestionar permisos.

---

## Vista de Permisos Disponibles

La secciÃ³n muestra todos los permisos disponibles en el sistema, organizados por mÃ³dulos:

### MÃ³dulos de Permisos

Los permisos estÃ¡n agrupados por mÃ³dulos del sistema:
- **Clientes:** GestiÃ³n de clientas
- **Turnos:** GestiÃ³n de turnos
- **Servicios:** GestiÃ³n de servicios
- **Insumos:** GestiÃ³n de insumos
- **FacturaciÃ³n:** Acceso a reportes financieros
- **Usuarios:** GestiÃ³n de usuarios
- **ConfiguraciÃ³n:** ConfiguraciÃ³n del sistema
- **Stock:** GestiÃ³n de inventario
- Y mÃ¡s segÃºn las actualizaciones del sistema

### Expandir/Contraer MÃ³dulos

1. Haz clic en el nombre del mÃ³dulo para expandirlo
2. VerÃ¡s todas las acciones disponibles en ese mÃ³dulo
3. Haz clic nuevamente para contraerlo

---

## Asignar Permisos a un Usuario

### Seleccionar Usuario

1. En la parte superior, selecciona el usuario de la lista desplegable
2. Se mostrarÃ¡n los permisos actuales del usuario
3. AparecerÃ¡ el botÃ³n **+ Asignar Permiso**

### Asignar un Permiso

1. Haz clic en **+ Asignar Permiso**
2. Se abrirÃ¡ un modal con todos los permisos disponibles
3. Los permisos estÃ¡n organizados por mÃ³dulos
4. Selecciona el permiso que deseas asignar
5. Haz clic en **Asignar**

### Ver Permisos del Usuario

Una vez seleccionado un usuario, verÃ¡s:
- **Permisos de [Nombre Usuario]:** Lista de permisos asignados
- Permisos organizados por mÃ³dulos
- OpciÃ³n para quitar permisos individuales

---

## Quitar Permisos

Para quitar un permiso de un usuario:

1. Selecciona el usuario de la lista desplegable
2. Expande el mÃ³dulo que contiene el permiso
3. Haz clic en **Quitar** junto al permiso que deseas eliminar
4. El permiso se quitarÃ¡ inmediatamente

---

## Tipos de Permisos

### Permisos por AcciÃ³n

Cada mÃ³dulo puede tener diferentes tipos de acciones:

- **Ver/Leer:** Permite ver informaciÃ³n pero no modificarla
- **Crear:** Permite crear nuevos registros
- **Editar:** Permite modificar registros existentes
- **Eliminar:** Permite eliminar registros

### Permisos Especiales

Algunos mÃ³dulos pueden tener permisos especiales:
- **FacturaciÃ³n:** Acceso a reportes financieros
- **ConfiguraciÃ³n:** Modificar configuraciones del sistema
- **Usuarios:** Gestionar otros usuarios

---

## Administradores vs Usuarios

### Administradores

Los usuarios marcados como "Administrador" tienen:
- Acceso completo a todas las secciones
- Todos los permisos automÃ¡ticamente
- No necesitan permisos individuales asignados

### Usuarios Regulares

Los usuarios que NO son administradores:
- Solo tienen acceso a secciones con permisos asignados
- Deben tener permisos especÃ­ficos para cada acciÃ³n
- No pueden acceder a secciones sin permisos

---

## GestiÃ³n de Permisos desde Usuarios

TambiÃ©n puedes gestionar permisos desde la secciÃ³n **Usuarios**:

1. Ve a **Usuarios**
2. Crea o edita un usuario
3. Si el usuario NO es administrador, verÃ¡s la secciÃ³n de Permisos
4. Expande los mÃ³dulos y marca los permisos deseados
5. Los permisos se guardan al guardar el usuario

:::tip[Dos Formas de Gestionar]
Puedes gestionar permisos desde la secciÃ³n de Permisos (vista detallada) o desde la secciÃ³n de Usuarios (al crear/editar). Ambas formas son equivalentes.

:::
---

## Mejores PrÃ¡cticas

### âœ… Recomendaciones

- Asigna solo los permisos necesarios (principio de menor privilegio)
- Revisa periÃ³dicamente los permisos de los usuarios
- Organiza los permisos por roles (ej: "Recepcionista", "Profesional", "Gerente")
- Documenta quÃ© permisos tiene cada rol
- Actualiza permisos cuando cambian las responsabilidades

### âŒ Evita

- Asignar permisos de administrador innecesariamente
- Dar acceso a facturaciÃ³n a usuarios que no lo necesitan
- Olvidar quitar permisos cuando un usuario cambia de rol
- Asignar todos los permisos "por si acaso"

---

## Roles Comunes

### Recepcionista

Permisos tÃ­picos:
- Ver, Crear, Editar Clientes
- Ver, Crear, Editar Turnos
- Ver Servicios
- Ver Insumos

### Profesional/Estilista

Permisos tÃ­picos:
- Ver Clientes
- Ver, Editar Turnos (solo los asignados)
- Ver Servicios
- Marcar turnos como Realizados

### Gerente/Administrador

Permisos tÃ­picos:
- Todos los permisos
- Acceso a FacturaciÃ³n
- GestiÃ³n de Usuarios
- ConfiguraciÃ³n

---

## Preguntas Frecuentes

**Â¿Puedo asignar permisos a un administrador?**
No es necesario. Los administradores tienen todos los permisos automÃ¡ticamente.

**Â¿QuÃ© pasa si quito todos los permisos de un usuario?**
El usuario no podrÃ¡ acceder a ninguna secciÃ³n del sistema (excepto su perfil bÃ¡sico).

**Â¿Puedo asignar permisos a mÃºltiples usuarios a la vez?**
Actualmente, debes asignar permisos usuario por usuario. Consulta las actualizaciones para funcionalidades de asignaciÃ³n masiva.

**Â¿Los permisos se aplican inmediatamente?**
SÃ­, los cambios en permisos se aplican de inmediato. El usuario puede necesitar refrescar la pÃ¡gina o cerrar sesiÃ³n y volver a iniciar.

**Â¿Puedo ver quÃ© permisos tiene un usuario sin entrar a la secciÃ³n de Permisos?**
SÃ­, en la secciÃ³n de Usuarios puedes ver si un usuario es administrador o tiene permisos especÃ­ficos.

**Â¿Hay permisos que no puedo quitar?**
Los administradores siempre tienen todos los permisos. Para usuarios regulares, puedes quitar cualquier permiso.

**Â¿CÃ³mo sÃ© quÃ© permisos necesita un usuario?**
Depende del rol y responsabilidades del usuario. Consulta la secciÃ³n "Roles Comunes" arriba para ejemplos.

---

## Seguridad y Permisos

### Principio de Menor Privilegio

Asigna solo los permisos mÃ­nimos necesarios para que el usuario realice su trabajo. Esto mejora la seguridad del sistema.

### RevisiÃ³n PeriÃ³dica

Revisa regularmente los permisos de los usuarios para:
- Asegurar que siguen siendo apropiados
- Quitar permisos que ya no se necesitan
- Agregar permisos cuando cambian las responsabilidades

### Permisos Sensibles

Algunos permisos son mÃ¡s sensibles que otros:
- **FacturaciÃ³n:** Acceso a informaciÃ³n financiera
- **Usuarios:** Puede crear/modificar otros usuarios
- **ConfiguraciÃ³n:** Puede cambiar configuraciones del sistema

Asigna estos permisos con cuidado y solo a usuarios de confianza.

---

## SoluciÃ³n de Problemas

### Usuario no puede acceder a una secciÃ³n

**Verifica:**
1. Que el usuario tenga el permiso correspondiente asignado
2. Que el usuario no haya sido eliminado
3. Que el permiso estÃ© activo

**SoluciÃ³n:**
1. Ve a la secciÃ³n de Permisos
2. Selecciona el usuario
3. Asigna el permiso necesario

### Usuario tiene demasiados permisos

**SoluciÃ³n:**
1. Ve a la secciÃ³n de Permisos
2. Selecciona el usuario
3. Quita los permisos innecesarios

---

## IntegraciÃ³n con Otros MÃ³dulos

Los permisos afectan el acceso a:
- **Clientes:** Ver, crear, editar, eliminar clientas
- **Turnos:** Ver, crear, editar, eliminar turnos
- **Servicios:** Gestionar catÃ¡logo de servicios
- **FacturaciÃ³n:** Ver reportes e ingresos
- **Usuarios:** Gestionar otros usuarios
- **ConfiguraciÃ³n:** Modificar configuraciones

AsegÃºrate de asignar los permisos correctos segÃºn las necesidades de cada usuario.


