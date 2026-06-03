---
title: Gestión de Usuarios
description: Personal del salon, roles y administracion de accesos.
---

## IntroducciÃ³n

Los usuarios son los profesionales y personal que tienen acceso a GLYMM. En esta guÃ­a aprenderÃ¡s cÃ³mo crear, editar y gestionar usuarios, incluyendo la asignaciÃ³n de permisos y roles.

---

## Crear un Nuevo Usuario

### Pasos para crear un usuario:

1. DirÃ­gete a la secciÃ³n **Usuarios** desde el menÃº principal
2. Haz clic en el botÃ³n **+ Nuevo Usuario**
3. Completa los siguientes campos:

#### Campos Obligatorios

- **Nombre:** Nombre del usuario (requerido)
- **Apellido:** Apellido del usuario (requerido)
- **Email:** DirecciÃ³n de correo electrÃ³nico (requerido, debe ser Ãºnico)
- **ContraseÃ±a:** ContraseÃ±a segura (requerido para nuevos usuarios)

#### Campos Opcionales

- **Es Administrador:** Marca esta casilla si el usuario debe tener acceso completo
- **Permisos:** Asigna permisos especÃ­ficos si no es administrador

4. Haz clic en **Guardar**

### Requisitos de ContraseÃ±a

La contraseÃ±a debe cumplir con los siguientes requisitos:
- MÃ­nimo 8 caracteres
- Al menos 1 letra mayÃºscula
- Al menos 1 letra minÃºscula
- Al menos 1 nÃºmero
- Al menos 1 carÃ¡cter especial (@$!%*?&)

:::tip[Seguridad]
Usa contraseÃ±as fuertes y Ãºnicas. Puedes usar el botÃ³n de mostrar/ocultar contraseÃ±a para verificar que la ingresaste correctamente.

:::
---

## Editar un Usuario

1. Busca el usuario en la lista
2. Haz clic en el botÃ³n **âœŽ Editar**
3. Realiza los cambios necesarios
4. Para cambiar la contraseÃ±a, ingresa una nueva (dejar vacÃ­o si no quieres cambiarla)
5. Haz clic en **Guardar cambios**

:::note[ContraseÃ±a en EdiciÃ³n]
Al editar un usuario, puedes dejar el campo de contraseÃ±a vacÃ­o si no deseas cambiarla. Solo ingresa una nueva contraseÃ±a si quieres actualizarla.

:::
---

## Eliminar un Usuario

Para eliminar un usuario:

1. Busca el usuario en la lista
2. Haz clic en el botÃ³n **ðŸ—‘ Eliminar**
3. Confirma la eliminaciÃ³n

:::danger[AtenciÃ³n]
La eliminaciÃ³n es permanente. AsegÃºrate de que el usuario no tenga turnos asignados o informaciÃ³n importante asociada antes de eliminarlo.

:::
---

## Roles de Usuario

GLYMM maneja dos tipos de roles:

### Administrador

Los administradores tienen:
- Acceso completo a todas las secciones
- Capacidad de gestionar usuarios y permisos
- Acceso a configuraciÃ³n de empresa
- Todos los permisos del sistema

### Usuario Regular

Los usuarios regulares tienen:
- Acceso solo a las secciones con permisos asignados
- Permisos especÃ­ficos configurados por el administrador
- Acceso limitado segÃºn su rol

---

## AsignaciÃ³n de Permisos

Para usuarios que NO son administradores, puedes asignar permisos especÃ­ficos:

### Durante la CreaciÃ³n

1. Al crear el usuario, asegÃºrate de que "Es Administrador" estÃ© desmarcado
2. Se mostrarÃ¡ la secciÃ³n de **Permisos**
3. Expande los mÃ³dulos haciendo clic en ellos
4. Marca las casillas de los permisos que deseas asignar
5. Los permisos se guardan automÃ¡ticamente

### MÃ³dulos de Permisos

Los permisos estÃ¡n organizados por mÃ³dulos:
- **Clientes:** GestiÃ³n de clientas
- **Turnos:** GestiÃ³n de turnos
- **Servicios:** GestiÃ³n de servicios
- **Insumos:** GestiÃ³n de insumos
- **FacturaciÃ³n:** Acceso a reportes financieros
- **Usuarios:** GestiÃ³n de usuarios
- **ConfiguraciÃ³n:** ConfiguraciÃ³n del sistema
- Y mÃ¡s...

### Acciones de Permisos

Cada mÃ³dulo puede tener diferentes acciones:
- **Ver:** Acceso de solo lectura
- **Crear:** Crear nuevos registros
- **Editar:** Modificar registros existentes
- **Eliminar:** Eliminar registros

---

## Vista de Lista de Usuarios

La vista de usuarios muestra cada usuario en formato de tarjetas con:

| InformaciÃ³n | DescripciÃ³n |
|-----------|-------------|
| **Nombre completo** | Nombre y apellido del usuario |
| **Email** | DirecciÃ³n de correo electrÃ³nico |
| **Rol** | Administrador o Usuario (con permisos especÃ­ficos) |

---

## GestiÃ³n de Permisos Avanzada

Para una gestiÃ³n mÃ¡s detallada de permisos:

1. Ve a la secciÃ³n **Permisos**
2. Selecciona el usuario de la lista desplegable
3. Visualiza y gestiona todos los permisos del usuario
4. Asigna o quita permisos segÃºn sea necesario

:::tip[Permisos Detallados]
La secciÃ³n de Permisos ofrece una vista mÃ¡s completa para gestionar los permisos de cada usuario. Consulta la [GuÃ­a de Permisos](/permisos/) para mÃ¡s detalles.

:::
---

## SincronizaciÃ³n con Google Calendar

Si un usuario tiene Google Calendar configurado:

- Los turnos asignados a ese usuario se sincronizarÃ¡n automÃ¡ticamente
- El usuario verÃ¡ sus turnos en su calendario de Google
- Los cambios en los turnos se reflejarÃ¡n en el calendario

:::note[ConfiguraciÃ³n de Google Calendar]
La configuraciÃ³n de Google Calendar debe realizarse en la secciÃ³n de ConfiguraciÃ³n del usuario o del sistema.

:::
---

## Mejores PrÃ¡cticas

### âœ… Recomendaciones

- Crea usuarios con emails Ãºnicos y vÃ¡lidos
- Asigna solo los permisos necesarios (principio de menor privilegio)
- Usa contraseÃ±as seguras y Ãºnicas
- Revisa periÃ³dicamente los permisos de los usuarios
- Marca como administrador solo a usuarios de confianza
- MantÃ©n actualizada la informaciÃ³n de contacto

### âŒ Evita

- Compartir cuentas de usuario
- Usar contraseÃ±as dÃ©biles o comunes
- Asignar permisos de administrador innecesariamente
- Olvidar actualizar permisos cuando cambian las responsabilidades
- Usar emails genÃ©ricos o compartidos

---

## Seguridad

### ContraseÃ±as

- Las contraseÃ±as se almacenan de forma segura (encriptadas)
- Nunca se muestran en texto plano
- Se pueden cambiar en cualquier momento
- Deben cumplir con los requisitos de seguridad

### Acceso

- Cada usuario debe tener su propia cuenta
- No compartas credenciales entre usuarios
- Los administradores pueden gestionar el acceso de otros usuarios

---

## Preguntas Frecuentes

**Â¿Puedo cambiar el email de un usuario?**
SÃ­, puedes editar el usuario y cambiar el email. El email debe ser Ãºnico en el sistema.

**Â¿QuÃ© pasa si olvido la contraseÃ±a de un usuario?**
Como administrador, puedes editar el usuario y establecer una nueva contraseÃ±a.

**Â¿Puedo tener mÃºltiples administradores?**
SÃ­, puedes tener tantos administradores como necesites.

**Â¿Los usuarios pueden cambiar su propia contraseÃ±a?**
Los usuarios pueden usar la opciÃ³n "Â¿Olvidaste tu contraseÃ±a?" en la pantalla de login para restablecerla.

**Â¿QuÃ© permisos necesita un usuario para ver facturaciÃ³n?**
El usuario necesita el permiso especÃ­fico de "FacturaciÃ³n" asignado, o ser administrador.

**Â¿Puedo desactivar un usuario sin eliminarlo?**
Actualmente, debes eliminar el usuario. Consulta las actualizaciones del sistema para funcionalidades de desactivaciÃ³n.

**Â¿Los usuarios pueden ver sus propios turnos?**
SÃ­, si tienen permisos de turnos, pueden ver los turnos asignados a ellos.

---

## AsignaciÃ³n de Usuarios a Turnos

Cuando creas un turno, puedes asignar un usuario/profesional:

1. En el formulario de turno, selecciona **Usuario asignado**
2. Elige el profesional de la lista desplegable
3. El turno quedarÃ¡ asociado a ese usuario

:::tip[OrganizaciÃ³n]
Asignar usuarios a los turnos ayuda a organizar el trabajo y permite que cada profesional vea sus turnos asignados.

:::

