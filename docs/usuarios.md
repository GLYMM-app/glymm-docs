# Gestión de Usuarios

## Introducción

Los usuarios son los profesionales y personal que tienen acceso a GLYMM. En esta guía aprenderás cómo crear, editar y gestionar usuarios, incluyendo la asignación de permisos y roles.

---

## Crear un Nuevo Usuario

### Pasos para crear un usuario:

1. Dirígete a la sección **Usuarios** desde el menú principal
2. Haz clic en el botón **+ Nuevo Usuario**
3. Completa los siguientes campos:

#### Campos Obligatorios

- **Nombre:** Nombre del usuario (requerido)
- **Apellido:** Apellido del usuario (requerido)
- **Email:** Dirección de correo electrónico (requerido, debe ser único)
- **Contraseña:** Contraseña segura (requerido para nuevos usuarios)

#### Campos Opcionales

- **Es Administrador:** Marca esta casilla si el usuario debe tener acceso completo
- **Permisos:** Asigna permisos específicos si no es administrador

4. Haz clic en **Guardar**

### Requisitos de Contraseña

La contraseña debe cumplir con los siguientes requisitos:
- Mínimo 8 caracteres
- Al menos 1 letra mayúscula
- Al menos 1 letra minúscula
- Al menos 1 número
- Al menos 1 carácter especial (@$!%*?&)

!!! tip "Seguridad"
    Usa contraseñas fuertes y únicas. Puedes usar el botón de mostrar/ocultar contraseña para verificar que la ingresaste correctamente.

---

## Editar un Usuario

1. Busca el usuario en la lista
2. Haz clic en el botón **✎ Editar**
3. Realiza los cambios necesarios
4. Para cambiar la contraseña, ingresa una nueva (dejar vacío si no quieres cambiarla)
5. Haz clic en **Guardar cambios**

!!! note "Contraseña en Edición"
    Al editar un usuario, puedes dejar el campo de contraseña vacío si no deseas cambiarla. Solo ingresa una nueva contraseña si quieres actualizarla.

---

## Eliminar un Usuario

Para eliminar un usuario:

1. Busca el usuario en la lista
2. Haz clic en el botón **🗑 Eliminar**
3. Confirma la eliminación

!!! danger "Atención"
    La eliminación es permanente. Asegúrate de que el usuario no tenga turnos asignados o información importante asociada antes de eliminarlo.

---

## Roles de Usuario

GLYMM maneja dos tipos de roles:

### Administrador

Los administradores tienen:
- Acceso completo a todas las secciones
- Capacidad de gestionar usuarios y permisos
- Acceso a configuración de empresa
- Todos los permisos del sistema

### Usuario Regular

Los usuarios regulares tienen:
- Acceso solo a las secciones con permisos asignados
- Permisos específicos configurados por el administrador
- Acceso limitado según su rol

---

## Asignación de Permisos

Para usuarios que NO son administradores, puedes asignar permisos específicos:

### Durante la Creación

1. Al crear el usuario, asegúrate de que "Es Administrador" esté desmarcado
2. Se mostrará la sección de **Permisos**
3. Expande los módulos haciendo clic en ellos
4. Marca las casillas de los permisos que deseas asignar
5. Los permisos se guardan automáticamente

### Módulos de Permisos

Los permisos están organizados por módulos:
- **Clientes:** Gestión de clientas
- **Turnos:** Gestión de turnos
- **Servicios:** Gestión de servicios
- **Insumos:** Gestión de insumos
- **Facturación:** Acceso a reportes financieros
- **Usuarios:** Gestión de usuarios
- **Configuración:** Configuración del sistema
- Y más...

### Acciones de Permisos

Cada módulo puede tener diferentes acciones:
- **Ver:** Acceso de solo lectura
- **Crear:** Crear nuevos registros
- **Editar:** Modificar registros existentes
- **Eliminar:** Eliminar registros

---

## Vista de Lista de Usuarios

La vista de usuarios muestra cada usuario en formato de tarjetas con:

| Información | Descripción |
|-----------|-------------|
| **Nombre completo** | Nombre y apellido del usuario |
| **Email** | Dirección de correo electrónico |
| **Rol** | Administrador o Usuario (con permisos específicos) |

---

## Gestión de Permisos Avanzada

Para una gestión más detallada de permisos:

1. Ve a la sección **Permisos**
2. Selecciona el usuario de la lista desplegable
3. Visualiza y gestiona todos los permisos del usuario
4. Asigna o quita permisos según sea necesario

!!! tip "Permisos Detallados"
    La sección de Permisos ofrece una vista más completa para gestionar los permisos de cada usuario. Consulta la [Guía de Permisos](permisos.md) para más detalles.

---

## Sincronización con Google Calendar

Si un usuario tiene Google Calendar configurado:

- Los turnos asignados a ese usuario se sincronizarán automáticamente
- El usuario verá sus turnos en su calendario de Google
- Los cambios en los turnos se reflejarán en el calendario

!!! note "Configuración de Google Calendar"
    La configuración de Google Calendar debe realizarse en la sección de Configuración del usuario o del sistema.

---

## Mejores Prácticas

### ✅ Recomendaciones

- Crea usuarios con emails únicos y válidos
- Asigna solo los permisos necesarios (principio de menor privilegio)
- Usa contraseñas seguras y únicas
- Revisa periódicamente los permisos de los usuarios
- Marca como administrador solo a usuarios de confianza
- Mantén actualizada la información de contacto

### ❌ Evita

- Compartir cuentas de usuario
- Usar contraseñas débiles o comunes
- Asignar permisos de administrador innecesariamente
- Olvidar actualizar permisos cuando cambian las responsabilidades
- Usar emails genéricos o compartidos

---

## Seguridad

### Contraseñas

- Las contraseñas se almacenan de forma segura (encriptadas)
- Nunca se muestran en texto plano
- Se pueden cambiar en cualquier momento
- Deben cumplir con los requisitos de seguridad

### Acceso

- Cada usuario debe tener su propia cuenta
- No compartas credenciales entre usuarios
- Los administradores pueden gestionar el acceso de otros usuarios

---

## Preguntas Frecuentes

**¿Puedo cambiar el email de un usuario?**
Sí, puedes editar el usuario y cambiar el email. El email debe ser único en el sistema.

**¿Qué pasa si olvido la contraseña de un usuario?**
Como administrador, puedes editar el usuario y establecer una nueva contraseña.

**¿Puedo tener múltiples administradores?**
Sí, puedes tener tantos administradores como necesites.

**¿Los usuarios pueden cambiar su propia contraseña?**
Los usuarios pueden usar la opción "¿Olvidaste tu contraseña?" en la pantalla de login para restablecerla.

**¿Qué permisos necesita un usuario para ver facturación?**
El usuario necesita el permiso específico de "Facturación" asignado, o ser administrador.

**¿Puedo desactivar un usuario sin eliminarlo?**
Actualmente, debes eliminar el usuario. Consulta las actualizaciones del sistema para funcionalidades de desactivación.

**¿Los usuarios pueden ver sus propios turnos?**
Sí, si tienen permisos de turnos, pueden ver los turnos asignados a ellos.

---

## Asignación de Usuarios a Turnos

Cuando creas un turno, puedes asignar un usuario/profesional:

1. En el formulario de turno, selecciona **Usuario asignado**
2. Elige el profesional de la lista desplegable
3. El turno quedará asociado a ese usuario

!!! tip "Organización"
    Asignar usuarios a los turnos ayuda a organizar el trabajo y permite que cada profesional vea sus turnos asignados.

