---
title: "Gestión de Turnos"
description: "Programá turnos con calendario, servicios extras, adelantos y descuentos."
---

## Introducción

Los turnos son la base para organizar las actividades de tu negocio. En esta guía aprenderás cómo crear, modificar y gestionar turnos de manera efectiva en GLYMM, incluyendo el uso del calendario, servicios extras, adelantos y descuentos.

---

## Crear un Nuevo Turno

### Pasos para crear un turno:

1. Dirígete a la sección **Turnos** desde el menú principal
2. Haz clic en el botón **+ Nuevo Turno**
3. Completa los siguientes campos:

#### Campos Obligatorios

- **Cliente:** Selecciona la clienta de la lista desplegable (requerido)
- **Servicio:** Elige el servicio principal a prestar (requerido)
- **Fecha:** Selecciona la fecha del turno (requerido)
- **Hora:** Selecciona la hora de inicio (requerido)

#### Campos Opcionales

- **Subservicio:** Si tu empresa usa subservicios, puedes seleccionar uno (aplica descuento al servicio principal)
- **Servicios extras:** Selecciona múltiples servicios adicionales (mantén presionado Ctrl o Cmd para seleccionar varios)
- **Usuario asignado:** Asigna el profesional que atenderá el turno
- **Estado:** Pendiente (por defecto), Realizado o Cancelado
- **Adelanto:** Puedes registrar un adelanto en monto o porcentaje
- **Descuento:** Puedes aplicar un descuento en monto o porcentaje
- **Observaciones:** Notas adicionales (máximo 200 caracteres)

4. Haz clic en **Guardar**

!!! tip "Servicios Extras"
    Puedes agregar múltiples servicios extras a un turno. El sistema calculará automáticamente el precio total y la duración sumando todos los servicios. Mantén presionado **Ctrl** (Windows) o **Cmd** (Mac) para seleccionar múltiples servicios.

!!! note "Cálculo Automático"
    GLYMM calcula automáticamente el precio total y la duración total del turno, incluyendo servicios extras, subservicios (con descuentos) y descuentos aplicados.

---

## Vista de Calendario

GLYMM ofrece dos vistas de calendario para gestionar tus turnos:

### Vista Mensual

Muestra todos los turnos del mes en un formato de calendario tradicional:

- **Navegación:** Usa los botones "← Anterior" y "Siguiente →" para cambiar de mes
- **Hoy:** Haz clic en "Hoy" para volver al mes actual
- **Visualización:** Cada día muestra los turnos con colores según su estado:
  - 🟡 **Amarillo:** Pendiente
  - 🟢 **Verde:** Realizado
  - 🔴 **Rojo:** Cancelado

### Vista Semanal

Muestra los turnos de la semana actual en columnas por día:

- **Navegación:** Usa los botones "← Anterior" y "Siguiente →" para cambiar de semana
- **Información:** Cada turno muestra hora, nombre de la clienta y servicio
- **Estados:** Los colores indican el estado del turno

### Cambiar entre Vistas

1. Haz clic en el botón **📅 Calendario** para activar la vista de calendario
2. Usa los botones **Mes** y **Semana** para alternar entre vistas
3. Haz clic en **📋 Lista** para volver a la vista de lista

### Acciones Rápidas en el Calendario

- **Clic en turno:** Abre el formulario de edición
- **Botón ✓:** Marca el turno como "Realizado" (cambio rápido de estado)
- **Botón ✗:** Marca el turno como "Cancelado" (cambio rápido de estado)

---

## Vista de Lista

La vista de lista muestra todos los turnos con información detallada:

### Filtros Disponibles

- **Fecha desde:** Filtra turnos desde una fecha específica
- **Fecha hasta:** Filtra turnos hasta una fecha específica
- **Estado:** Filtra por Pendiente, Realizado o Cancelado
- **Usuario:** Filtra por profesional asignado

!!! tip "Filtros por Defecto"
    Por defecto, la vista de lista muestra los turnos desde hoy hasta 30 días en el futuro.

### Información Mostrada

Cada turno en la lista muestra:

- **Cliente:** Nombre de la clienta
- **Servicio:** Servicio principal y servicios extras (si los hay)
- **Fecha y hora:** Fecha y hora del turno
- **Duración total:** Suma de duraciones de todos los servicios
- **Precio total:** Precio calculado con servicios extras, descuentos y adelantos
- **Adelanto:** Si tiene adelanto registrado
- **Descuento:** Si tiene descuento aplicado
- **Estado:** Badge de color indicando el estado
- **Observaciones:** Notas adicionales

---

## Modificar un Turno

1. Busca el turno que deseas modificar (en lista o calendario)
2. Haz clic en el botón **✎ Editar** o haz clic directamente en el turno en el calendario
3. Realiza los cambios necesarios
4. Haz clic en **Guardar cambios**

!!! note "Cambios en Turnos Realizados"
    Puedes modificar turnos en cualquier estado, pero algunos campos podrían estar restringidos según el estado del turno.

---

## Cambio Rápido de Estado

Para cambiar el estado de un turno rápidamente sin abrir el formulario completo:

1. En la vista de calendario o lista, localiza el turno
2. Haz clic en:
   - **✓** para marcar como "Realizado"
   - **✗** para marcar como "Cancelado"

El cambio se aplica inmediatamente y el turno se actualiza visualmente.

---

## Cancelar un Turno

Para cancelar un turno:

1. Selecciona el turno a cancelar
2. Haz clic en el botón **✗** (cambio rápido) o edita el turno y cambia el estado a "Cancelado"
3. El turno se marcará como cancelado y aparecerá en rojo

!!! warning "Atención"
    Cancelar un turno es una acción importante. Asegúrate de que realmente deseas cancelarlo.

---

## Adelantos

Puedes registrar adelantos en los turnos de dos formas:

### Por Monto

1. Marca la casilla **Tiene adelanto**
2. Ingresa el monto del adelanto
3. El sistema calculará automáticamente el porcentaje

### Por Porcentaje

1. Marca la casilla **Tiene adelanto**
2. Ingresa el porcentaje del adelanto
3. El sistema calculará automáticamente el monto

!!! tip "Cálculo Automático"
    Puedes ingresar el monto o el porcentaje, y GLYMM calculará automáticamente el otro valor basándose en el precio del servicio.

---

## Descuentos

Puedes aplicar descuentos a los turnos de dos formas:

### Por Monto

1. Marca la casilla **Tiene descuento**
2. Ingresa el monto del descuento
3. El sistema calculará automáticamente el porcentaje

### Por Porcentaje

1. Marca la casilla **Tiene descuento**
2. Ingresa el porcentaje del descuento
3. El sistema calculará automáticamente el monto

!!! note "Prioridad de Descuentos"
    Si ingresas tanto monto como porcentaje, el sistema priorizará el monto para el cálculo del precio final.

---

## Servicios Extras

Los servicios extras te permiten agregar múltiples servicios adicionales a un turno:

### Agregar Servicios Extras

1. Al crear o editar un turno, localiza la sección **Servicios extras**
2. Mantén presionado **Ctrl** (Windows) o **Cmd** (Mac) y haz clic en los servicios que deseas agregar
3. El sistema mostrará el precio total y duración total actualizados

### Información Mostrada

- **Precio total:** Suma del servicio principal + servicios extras - descuentos
- **Duración total:** Suma de duraciones de todos los servicios

!!! tip "Selección Múltiple"
    El servicio principal no puede ser seleccionado como servicio extra. Solo los otros servicios estarán disponibles en la lista de servicios extras.

---

## Subservicios

Si tu empresa tiene configurados subservicios, puedes aplicarlos a los turnos:

### Usar Subservicios

1. Selecciona un servicio principal que tenga subservicios disponibles
2. Aparecerá un campo **Subservicio** debajo del servicio principal
3. Selecciona el subservicio deseado
4. El sistema aplicará automáticamente el descuento del subservicio al precio

!!! note "Configuración de Empresa"
    Los subservicios deben estar configurados en la sección de Servicios y activados en la configuración de tu empresa.

---

## Asignar Usuario/Profesional

Puedes asignar un profesional específico a cada turno:

1. En el formulario de turno, localiza el campo **Usuario asignado**
2. Selecciona el profesional de la lista desplegable
3. Si el usuario tiene Google Calendar vinculado, el turno se sincronizará automáticamente

!!! tip "Sincronización con Google Calendar"
    Si el usuario asignado tiene Google Calendar configurado, el turno se agregará automáticamente a su calendario.

---

## Observaciones

El campo de observaciones te permite agregar notas adicionales al turno:

- **Límite:** Máximo 200 caracteres
- **Uso:** Notas sobre preferencias, instrucciones especiales, recordatorios, etc.
- **Contador:** El sistema muestra cuántos caracteres has usado (ej: 150/200)

---

## Eliminar un Turno

Para eliminar un turno permanentemente:

1. Busca el turno en la lista
2. Haz clic en el botón **🗑 Eliminar**
3. Confirma la eliminación en el diálogo

!!! danger "Atención"
    La eliminación es permanente y no puede deshacerse. Asegúrate de que realmente deseas eliminar el turno.

---

## Estados de Turno

GLYMM maneja tres estados para los turnos:

| Estado | Color | Descripción |
|--------|-------|-------------|
| **Pendiente** | 🟡 Amarillo | Turno programado, aún no realizado |
| **Realizado** | 🟢 Verde | Turno completado exitosamente |
| **Cancelado** | 🔴 Rojo | Turno cancelado |

---

## Cálculo de Precios y Duraciones

GLYMM calcula automáticamente:

### Precio Total

1. Precio del servicio principal
2. + Precios de servicios extras
3. - Descuento del subservicio (si aplica)
4. - Descuento del turno (si aplica)
5. = Precio total

### Duración Total

1. Duración del servicio principal
2. + Duraciones de servicios extras
3. = Duración total

---

## Preguntas Frecuentes sobre Turnos

**¿Puedo modificar un turno que ya comenzó?**
Sí, puedes modificar turnos en cualquier estado. Algunos campos podrían estar restringidos según el estado.

**¿Qué pasa si cancelo un turno?**
El turno se marcará como cancelado y aparecerá en rojo en el calendario y lista. La información se conserva para registro.

**¿Puedo crear turnos recurrentes?**
Actualmente, puedes duplicar turnos manualmente. Crea un turno y luego edítalo para cambiar la fecha.

**¿Cómo calculo el precio con adelantos y descuentos?**
GLYMM calcula automáticamente el precio total. El adelanto se resta del precio final, y los descuentos se aplican antes del cálculo del adelanto.

**¿Puedo agregar más de un servicio extra?**
Sí, puedes agregar tantos servicios extras como necesites. Solo mantén presionado Ctrl (o Cmd en Mac) y selecciona múltiples servicios.

**¿Los servicios extras afectan la duración?**
Sí, la duración total es la suma de la duración del servicio principal más todas las duraciones de los servicios extras.

**¿Qué pasa si no asigno un usuario?**
El turno se creará sin asignar. Puedes asignarlo más tarde editando el turno.

**¿Puedo cambiar el estado de múltiples turnos a la vez?**
Actualmente, debes cambiar el estado de cada turno individualmente usando los botones de cambio rápido.

---

## Mejores Prácticas

### ✅ Recomendaciones

- Crea los turnos con la mayor antelación posible
- Asigna siempre un profesional para mejor organización
- Usa las observaciones para registrar información importante
- Revisa regularmente los turnos pendientes
- Marca los turnos como "Realizado" cuando se completen

### ❌ Evita

- Crear turnos duplicados para la misma clienta y hora
- Dejar turnos sin asignar profesional si es posible
- Olvidar actualizar el estado de los turnos completados
