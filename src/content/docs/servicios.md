---
title: "Administración de Servicios"
description: "Gestioná tu catálogo de servicios, precios y subservicios."
---

## Introducción

Los servicios son la base de tu catálogo de ofertas. En esta guía aprenderás cómo crear, editar y gestionar servicios en GLYMM, incluyendo la configuración de subservicios con descuentos.

---

## Crear un Nuevo Servicio

### Pasos para crear un servicio:

1. Dirígete a la sección **Servicios** desde el menú principal
2. Haz clic en el botón **+ Nuevo Servicio**
3. Completa los siguientes campos:

#### Campos Obligatorios

- **Nombre del Servicio:** Nombre descriptivo del servicio (requerido)
- **Precio:** Precio del servicio en pesos (requerido)
- **Duración (minutos):** Tiempo estimado que toma realizar el servicio (requerido)

#### Campos Opcionales

- **Descripción:** Información adicional sobre el servicio

4. Haz clic en **Guardar**

!!! tip "Consejo"
    Usa nombres claros y descriptivos para tus servicios. La duración debe ser realista para ayudar en la programación de turnos.

---

## Editar un Servicio

1. Busca el servicio en la lista
2. Haz clic en el botón **✎ Editar**
3. Realiza los cambios necesarios
4. Haz clic en **Guardar cambios**

!!! note "Actualización de Precios"
    Si cambias el precio de un servicio, los turnos futuros usarán el nuevo precio. Los turnos ya creados mantendrán el precio original.

---

## Eliminar un Servicio

Para eliminar un servicio:

1. Busca el servicio en la lista
2. Haz clic en el botón **🗑 Eliminar**
3. Confirma la eliminación

!!! warning "Atención"
    Asegúrate de que el servicio no esté siendo usado en turnos antes de eliminarlo. La eliminación es permanente.

---

## Búsqueda de Servicios

Escribe cualquier parte del nombre del servicio en la barra de búsqueda para **filtrar la lista en tiempo real**.

La búsqueda se actualiza automáticamente mientras escribes.

---

## Vista de Lista de Servicios

La vista de servicios muestra cada servicio en formato de tarjetas con:

| Información | Descripción |
|-----------|-------------|
| **Nombre** | Nombre del servicio |
| **Precio** | Precio en pesos argentinos |
| **Duración** | Tiempo en minutos |
| **Descripción** | Información adicional (si está registrada) |
| **Subservicios** | Lista de subservicios asociados (si los hay) |

---

## Subservicios

Los subservicios son variantes de un servicio principal que aplican descuentos automáticos. Son útiles para ofrecer diferentes opciones del mismo servicio con precios reducidos.

### Activar Subservicios

Los subservicios deben estar activados en la configuración de tu empresa:

1. Ve a **Configuración**
2. Activa la opción "Usa Subservicios"
3. Guarda los cambios

### Crear un Subservicio

1. En la tarjeta del servicio, localiza la sección **Subservicios**
2. Haz clic en **+ Agregar**
3. Completa los siguientes campos:

#### Campos Opcionales

- **Nombre:** Nombre del subservicio (opcional, pero recomendado)
- **Activo:** Marca esta casilla para que el subservicio esté disponible

#### Descuento (elige uno)

- **Porcentaje de descuento:** Porcentaje a descontar del precio del servicio principal
- **Importe de descuento:** Monto fijo a descontar del precio del servicio principal

4. Haz clic en **Guardar**

!!! tip "Descuentos"
    Puedes usar porcentaje o importe fijo. El sistema calculará automáticamente el precio final del subservicio.

### Editar un Subservicio

1. En la tarjeta del servicio, localiza el subservicio
2. Haz clic en el botón **✎ Editar**
3. Realiza los cambios necesarios
4. Haz clic en **Guardar cambios**

### Eliminar un Subservicio

1. En la tarjeta del servicio, localiza el subservicio
2. Haz clic en el botón **🗑 Eliminar**
3. Confirma la eliminación

### Estados de Subservicios

- **Activo:** El subservicio está disponible para seleccionar en los turnos
- **Inactivo:** El subservicio no aparece en las opciones al crear turnos

---

## Información Mostrada en Servicios

### Precio

El precio se muestra en formato de moneda argentina (pesos). En las tarjetas, el precio aparece destacado en color rosa.

### Duración

La duración se muestra en minutos. Esta información es importante para:
- Calcular la duración total de turnos con servicios extras
- Programar turnos consecutivos
- Estimar tiempos de trabajo

### Descripción

La descripción es opcional pero útil para:
- Detalles del servicio
- Materiales incluidos
- Técnicas utilizadas
- Cualquier información relevante

---

## Uso de Servicios en Turnos

Cuando creas un turno:

1. Seleccionas un **servicio principal**
2. Si el servicio tiene subservicios activos, puedes seleccionar uno (aplica descuento)
3. Puedes agregar **servicios extras** adicionales
4. El sistema calcula automáticamente:
   - Precio total (servicio principal + extras - descuentos)
   - Duración total (suma de todas las duraciones)

---

## Mejores Prácticas

### ✅ Recomendaciones

- Usa nombres claros y descriptivos
- Establece precios consistentes
- Registra duraciones realistas
- Agrega descripciones cuando sea útil
- Organiza subservicios para ofrecer opciones a tus clientas

### ❌ Evita

- Nombres muy genéricos o confusos
- Precios inconsistentes para servicios similares
- Duplicar servicios con ligeras variaciones
- Olvidar actualizar precios cuando cambian

---

## Preguntas Frecuentes

**¿Puedo cambiar el precio de un servicio?**
Sí, puedes editar el servicio y cambiar el precio. Los turnos futuros usarán el nuevo precio.

**¿Qué pasa si elimino un servicio que está en turnos?**
Los turnos existentes mantendrán la información del servicio, pero no podrás crear nuevos turnos con ese servicio.

**¿Cuántos subservicios puedo crear por servicio?**
No hay límite. Puedes crear tantos subservicios como necesites.

**¿Puedo usar porcentaje e importe de descuento a la vez?**
No, debes elegir uno u otro. El sistema calculará el precio final según el tipo de descuento que uses.

**¿Los subservicios inactivos se eliminan?**
No, los subservicios inactivos se mantienen pero no aparecen al crear turnos. Puedes reactivarlos editándolos.

**¿Cómo calculo el precio con subservicio?**
Si usas porcentaje: Precio final = Precio principal × (1 - Porcentaje/100)
Si usas importe: Precio final = Precio principal - Importe
