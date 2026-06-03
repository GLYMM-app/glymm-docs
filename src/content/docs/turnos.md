---
title: Gestión de Turnos
description: Programa turnos con calendario, servicios extras, adelantos y descuentos.
---

## IntroducciÃ³n

Los turnos son la base para organizar las actividades de tu negocio. En esta guÃ­a aprenderÃ¡s cÃ³mo crear, modificar y gestionar turnos de manera efectiva en GLYMM, incluyendo el uso del calendario, servicios extras, adelantos y descuentos.

---

## Crear un Nuevo Turno

### Pasos para crear un turno:

1. DirÃ­gete a la secciÃ³n **Turnos** desde el menÃº principal
2. Haz clic en el botÃ³n **+ Nuevo Turno**
3. Completa los siguientes campos:

#### Campos Obligatorios

- **Cliente:** Selecciona la clienta de la lista desplegable (requerido)
- **Servicio:** Elige el servicio principal a prestar (requerido)
- **Fecha:** Selecciona la fecha del turno (requerido)
- **Hora:** Selecciona la hora de inicio (requerido)

#### Campos Opcionales

- **Subservicio:** Si tu empresa usa subservicios, puedes seleccionar uno (aplica descuento al servicio principal)
- **Servicios extras:** Selecciona mÃºltiples servicios adicionales (mantÃ©n presionado Ctrl o Cmd para seleccionar varios)
- **Usuario asignado:** Asigna el profesional que atenderÃ¡ el turno
- **Estado:** Pendiente (por defecto), Realizado o Cancelado
- **Adelanto:** Puedes registrar un adelanto en monto o porcentaje
- **Descuento:** Puedes aplicar un descuento en monto o porcentaje
- **Observaciones:** Notas adicionales (mÃ¡ximo 200 caracteres)

4. Haz clic en **Guardar**

:::tip[Servicios Extras]
Puedes agregar mÃºltiples servicios extras a un turno. El sistema calcularÃ¡ automÃ¡ticamente el precio total y la duraciÃ³n sumando todos los servicios. MantÃ©n presionado **Ctrl** (Windows) o **Cmd** (Mac) para seleccionar mÃºltiples servicios.

:::
:::note[CÃ¡lculo AutomÃ¡tico]
GLYMM calcula automÃ¡ticamente el precio total y la duraciÃ³n total del turno, incluyendo servicios extras, subservicios (con descuentos) y descuentos aplicados.

:::
---

## Vista de Calendario

GLYMM ofrece dos vistas de calendario para gestionar tus turnos:

### Vista Mensual

Muestra todos los turnos del mes en un formato de calendario tradicional:

- **NavegaciÃ³n:** Usa los botones "â† Anterior" y "Siguiente â†’" para cambiar de mes
- **Hoy:** Haz clic en "Hoy" para volver al mes actual
- **VisualizaciÃ³n:** Cada dÃ­a muestra los turnos con colores segÃºn su estado:
  - ðŸŸ¡ **Amarillo:** Pendiente
  - ðŸŸ¢ **Verde:** Realizado
  - ðŸ”´ **Rojo:** Cancelado

### Vista Semanal

Muestra los turnos de la semana actual en columnas por dÃ­a:

- **NavegaciÃ³n:** Usa los botones "â† Anterior" y "Siguiente â†’" para cambiar de semana
- **InformaciÃ³n:** Cada turno muestra hora, nombre de la clienta y servicio
- **Estados:** Los colores indican el estado del turno

### Cambiar entre Vistas

1. Haz clic en el botÃ³n **ðŸ“… Calendario** para activar la vista de calendario
2. Usa los botones **Mes** y **Semana** para alternar entre vistas
3. Haz clic en **ðŸ“‹ Lista** para volver a la vista de lista

### Acciones RÃ¡pidas en el Calendario

- **Clic en turno:** Abre el formulario de ediciÃ³n
- **BotÃ³n âœ“:** Marca el turno como "Realizado" (cambio rÃ¡pido de estado)
- **BotÃ³n âœ—:** Marca el turno como "Cancelado" (cambio rÃ¡pido de estado)

---

## Vista de Lista

La vista de lista muestra todos los turnos con informaciÃ³n detallada:

### Filtros Disponibles

- **Fecha desde:** Filtra turnos desde una fecha especÃ­fica
- **Fecha hasta:** Filtra turnos hasta una fecha especÃ­fica
- **Estado:** Filtra por Pendiente, Realizado o Cancelado
- **Usuario:** Filtra por profesional asignado

:::tip[Filtros por Defecto]
Por defecto, la vista de lista muestra los turnos desde hoy hasta 30 dÃ­as en el futuro.

:::
### InformaciÃ³n Mostrada

Cada turno en la lista muestra:

- **Cliente:** Nombre de la clienta
- **Servicio:** Servicio principal y servicios extras (si los hay)
- **Fecha y hora:** Fecha y hora del turno
- **DuraciÃ³n total:** Suma de duraciones de todos los servicios
- **Precio total:** Precio calculado con servicios extras, descuentos y adelantos
- **Adelanto:** Si tiene adelanto registrado
- **Descuento:** Si tiene descuento aplicado
- **Estado:** Badge de color indicando el estado
- **Observaciones:** Notas adicionales

---

## Modificar un Turno

1. Busca el turno que deseas modificar (en lista o calendario)
2. Haz clic en el botÃ³n **âœŽ Editar** o haz clic directamente en el turno en el calendario
3. Realiza los cambios necesarios
4. Haz clic en **Guardar cambios**

:::note[Cambios en Turnos Realizados]
Puedes modificar turnos en cualquier estado, pero algunos campos podrÃ­an estar restringidos segÃºn el estado del turno.

:::
---

## Cambio RÃ¡pido de Estado

Para cambiar el estado de un turno rÃ¡pidamente sin abrir el formulario completo:

1. En la vista de calendario o lista, localiza el turno
2. Haz clic en:
   - **âœ“** para marcar como "Realizado"
   - **âœ—** para marcar como "Cancelado"

El cambio se aplica inmediatamente y el turno se actualiza visualmente.

---

## Cancelar un Turno

Para cancelar un turno:

1. Selecciona el turno a cancelar
2. Haz clic en el botÃ³n **âœ—** (cambio rÃ¡pido) o edita el turno y cambia el estado a "Cancelado"
3. El turno se marcarÃ¡ como cancelado y aparecerÃ¡ en rojo

:::caution[AtenciÃ³n]
Cancelar un turno es una acciÃ³n importante. AsegÃºrate de que realmente deseas cancelarlo.

:::
---

## Adelantos

Puedes registrar adelantos en los turnos de dos formas:

### Por Monto

1. Marca la casilla **Tiene adelanto**
2. Ingresa el monto del adelanto
3. El sistema calcularÃ¡ automÃ¡ticamente el porcentaje

### Por Porcentaje

1. Marca la casilla **Tiene adelanto**
2. Ingresa el porcentaje del adelanto
3. El sistema calcularÃ¡ automÃ¡ticamente el monto

:::tip[CÃ¡lculo AutomÃ¡tico]
Puedes ingresar el monto o el porcentaje, y GLYMM calcularÃ¡ automÃ¡ticamente el otro valor basÃ¡ndose en el precio del servicio.

:::
---

## Descuentos

Puedes aplicar descuentos a los turnos de dos formas:

### Por Monto

1. Marca la casilla **Tiene descuento**
2. Ingresa el monto del descuento
3. El sistema calcularÃ¡ automÃ¡ticamente el porcentaje

### Por Porcentaje

1. Marca la casilla **Tiene descuento**
2. Ingresa el porcentaje del descuento
3. El sistema calcularÃ¡ automÃ¡ticamente el monto

:::note[Prioridad de Descuentos]
Si ingresas tanto monto como porcentaje, el sistema priorizarÃ¡ el monto para el cÃ¡lculo del precio final.

:::
---

## Servicios Extras

Los servicios extras te permiten agregar mÃºltiples servicios adicionales a un turno:

### Agregar Servicios Extras

1. Al crear o editar un turno, localiza la secciÃ³n **Servicios extras**
2. MantÃ©n presionado **Ctrl** (Windows) o **Cmd** (Mac) y haz clic en los servicios que deseas agregar
3. El sistema mostrarÃ¡ el precio total y duraciÃ³n total actualizados

### InformaciÃ³n Mostrada

- **Precio total:** Suma del servicio principal + servicios extras - descuentos
- **DuraciÃ³n total:** Suma de duraciones de todos los servicios

:::tip[SelecciÃ³n MÃºltiple]
El servicio principal no puede ser seleccionado como servicio extra. Solo los otros servicios estarÃ¡n disponibles en la lista de servicios extras.

:::
---

## Subservicios

Si tu empresa tiene configurados subservicios, puedes aplicarlos a los turnos:

### Usar Subservicios

1. Selecciona un servicio principal que tenga subservicios disponibles
2. AparecerÃ¡ un campo **Subservicio** debajo del servicio principal
3. Selecciona el subservicio deseado
4. El sistema aplicarÃ¡ automÃ¡ticamente el descuento del subservicio al precio

:::note[ConfiguraciÃ³n de Empresa]
Los subservicios deben estar configurados en la secciÃ³n de Servicios y activados en la configuraciÃ³n de tu empresa.

:::
---

## Asignar Usuario/Profesional

Puedes asignar un profesional especÃ­fico a cada turno:

1. En el formulario de turno, localiza el campo **Usuario asignado**
2. Selecciona el profesional de la lista desplegable
3. Si el usuario tiene Google Calendar vinculado, el turno se sincronizarÃ¡ automÃ¡ticamente

:::tip[SincronizaciÃ³n con Google Calendar]
Si el usuario asignado tiene Google Calendar configurado, el turno se agregarÃ¡ automÃ¡ticamente a su calendario.

:::
---

## Observaciones

El campo de observaciones te permite agregar notas adicionales al turno:

- **LÃ­mite:** MÃ¡ximo 200 caracteres
- **Uso:** Notas sobre preferencias, instrucciones especiales, recordatorios, etc.
- **Contador:** El sistema muestra cuÃ¡ntos caracteres has usado (ej: 150/200)

---

## Eliminar un Turno

Para eliminar un turno permanentemente:

1. Busca el turno en la lista
2. Haz clic en el botÃ³n **ðŸ—‘ Eliminar**
3. Confirma la eliminaciÃ³n en el diÃ¡logo

:::danger[AtenciÃ³n]
La eliminaciÃ³n es permanente y no puede deshacerse. AsegÃºrate de que realmente deseas eliminar el turno.

:::
---

## Estados de Turno

GLYMM maneja tres estados para los turnos:

| Estado | Color | DescripciÃ³n |
|--------|-------|-------------|
| **Pendiente** | ðŸŸ¡ Amarillo | Turno programado, aÃºn no realizado |
| **Realizado** | ðŸŸ¢ Verde | Turno completado exitosamente |
| **Cancelado** | ðŸ”´ Rojo | Turno cancelado |

---

## CÃ¡lculo de Precios y Duraciones

GLYMM calcula automÃ¡ticamente:

### Precio Total

1. Precio del servicio principal
2. + Precios de servicios extras
3. - Descuento del subservicio (si aplica)
4. - Descuento del turno (si aplica)
5. = Precio total

### DuraciÃ³n Total

1. DuraciÃ³n del servicio principal
2. + Duraciones de servicios extras
3. = DuraciÃ³n total

---

## Preguntas Frecuentes sobre Turnos

**Â¿Puedo modificar un turno que ya comenzÃ³?**
SÃ­, puedes modificar turnos en cualquier estado. Algunos campos podrÃ­an estar restringidos segÃºn el estado.

**Â¿QuÃ© pasa si cancelo un turno?**
El turno se marcarÃ¡ como cancelado y aparecerÃ¡ en rojo en el calendario y lista. La informaciÃ³n se conserva para registro.

**Â¿Puedo crear turnos recurrentes?**
Actualmente, puedes duplicar turnos manualmente. Crea un turno y luego edÃ­talo para cambiar la fecha.

**Â¿CÃ³mo calculo el precio con adelantos y descuentos?**
GLYMM calcula automÃ¡ticamente el precio total. El adelanto se resta del precio final, y los descuentos se aplican antes del cÃ¡lculo del adelanto.

**Â¿Puedo agregar mÃ¡s de un servicio extra?**
SÃ­, puedes agregar tantos servicios extras como necesites. Solo mantÃ©n presionado Ctrl (o Cmd en Mac) y selecciona mÃºltiples servicios.

**Â¿Los servicios extras afectan la duraciÃ³n?**
SÃ­, la duraciÃ³n total es la suma de la duraciÃ³n del servicio principal mÃ¡s todas las duraciones de los servicios extras.

**Â¿QuÃ© pasa si no asigno un usuario?**
El turno se crearÃ¡ sin asignar. Puedes asignarlo mÃ¡s tarde editando el turno.

**Â¿Puedo cambiar el estado de mÃºltiples turnos a la vez?**
Actualmente, debes cambiar el estado de cada turno individualmente usando los botones de cambio rÃ¡pido.

---

## Mejores PrÃ¡cticas

### âœ… Recomendaciones

- Crea los turnos con la mayor antelaciÃ³n posible
- Asigna siempre un profesional para mejor organizaciÃ³n
- Usa las observaciones para registrar informaciÃ³n importante
- Revisa regularmente los turnos pendientes
- Marca los turnos como "Realizado" cuando se completen

### âŒ Evita

- Crear turnos duplicados para la misma clienta y hora
- Dejar turnos sin asignar profesional si es posible
- Olvidar actualizar el estado de los turnos completados

