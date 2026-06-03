---
title: Administracion de Servicios
description: Gestiona tu catalogo de servicios, precios, duraciones y subservicios.
---

## IntroducciÃ³n

Los servicios son la base de tu catÃ¡logo de ofertas. En esta guÃ­a aprenderÃ¡s cÃ³mo crear, editar y gestionar servicios en GLYMM, incluyendo la configuraciÃ³n de subservicios con descuentos.

---

## Crear un Nuevo Servicio

### Pasos para crear un servicio:

1. DirÃ­gete a la secciÃ³n **Servicios** desde el menÃº principal
2. Haz clic en el botÃ³n **+ Nuevo Servicio**
3. Completa los siguientes campos:

#### Campos Obligatorios

- **Nombre del Servicio:** Nombre descriptivo del servicio (requerido)
- **Precio:** Precio del servicio en pesos (requerido)
- **DuraciÃ³n (minutos):** Tiempo estimado que toma realizar el servicio (requerido)

#### Campos Opcionales

- **DescripciÃ³n:** InformaciÃ³n adicional sobre el servicio

4. Haz clic en **Guardar**

:::tip[Consejo]
Usa nombres claros y descriptivos para tus servicios. La duraciÃ³n debe ser realista para ayudar en la programaciÃ³n de turnos.

:::
---

## Editar un Servicio

1. Busca el servicio en la lista
2. Haz clic en el botÃ³n **âœŽ Editar**
3. Realiza los cambios necesarios
4. Haz clic en **Guardar cambios**

:::note[ActualizaciÃ³n de Precios]
Si cambias el precio de un servicio, los turnos futuros usarÃ¡n el nuevo precio. Los turnos ya creados mantendrÃ¡n el precio original.

:::
---

## Eliminar un Servicio

Para eliminar un servicio:

1. Busca el servicio en la lista
2. Haz clic en el botÃ³n **ðŸ—‘ Eliminar**
3. Confirma la eliminaciÃ³n

:::caution[AtenciÃ³n]
AsegÃºrate de que el servicio no estÃ© siendo usado en turnos antes de eliminarlo. La eliminaciÃ³n es permanente.

:::
---

## BÃºsqueda de Servicios

Escribe cualquier parte del nombre del servicio en la barra de bÃºsqueda para **filtrar la lista en tiempo real**.

La bÃºsqueda se actualiza automÃ¡ticamente mientras escribes.

---

## Vista de Lista de Servicios

La vista de servicios muestra cada servicio en formato de tarjetas con:

| InformaciÃ³n | DescripciÃ³n |
|-----------|-------------|
| **Nombre** | Nombre del servicio |
| **Precio** | Precio en pesos argentinos |
| **DuraciÃ³n** | Tiempo en minutos |
| **DescripciÃ³n** | InformaciÃ³n adicional (si estÃ¡ registrada) |
| **Subservicios** | Lista de subservicios asociados (si los hay) |

---

## Subservicios

Los subservicios son variantes de un servicio principal que aplican descuentos automÃ¡ticos. Son Ãºtiles para ofrecer diferentes opciones del mismo servicio con precios reducidos.

### Activar Subservicios

Los subservicios deben estar activados en la configuraciÃ³n de tu empresa:

1. Ve a **ConfiguraciÃ³n**
2. Activa la opciÃ³n "Usa Subservicios"
3. Guarda los cambios

### Crear un Subservicio

1. En la tarjeta del servicio, localiza la secciÃ³n **Subservicios**
2. Haz clic en **+ Agregar**
3. Completa los siguientes campos:

#### Campos Opcionales

- **Nombre:** Nombre del subservicio (opcional, pero recomendado)
- **Activo:** Marca esta casilla para que el subservicio estÃ© disponible

#### Descuento (elige uno)

- **Porcentaje de descuento:** Porcentaje a descontar del precio del servicio principal
- **Importe de descuento:** Monto fijo a descontar del precio del servicio principal

4. Haz clic en **Guardar**

:::tip[Descuentos]
Puedes usar porcentaje o importe fijo. El sistema calcularÃ¡ automÃ¡ticamente el precio final del subservicio.

:::
### Editar un Subservicio

1. En la tarjeta del servicio, localiza el subservicio
2. Haz clic en el botÃ³n **âœŽ Editar**
3. Realiza los cambios necesarios
4. Haz clic en **Guardar cambios**

### Eliminar un Subservicio

1. En la tarjeta del servicio, localiza el subservicio
2. Haz clic en el botÃ³n **ðŸ—‘ Eliminar**
3. Confirma la eliminaciÃ³n

### Estados de Subservicios

- **Activo:** El subservicio estÃ¡ disponible para seleccionar en los turnos
- **Inactivo:** El subservicio no aparece en las opciones al crear turnos

---

## InformaciÃ³n Mostrada en Servicios

### Precio

El precio se muestra en formato de moneda argentina (pesos). En las tarjetas, el precio aparece destacado en color rosa.

### DuraciÃ³n

La duraciÃ³n se muestra en minutos. Esta informaciÃ³n es importante para:
- Calcular la duraciÃ³n total de turnos con servicios extras
- Programar turnos consecutivos
- Estimar tiempos de trabajo

### DescripciÃ³n

La descripciÃ³n es opcional pero Ãºtil para:
- Detalles del servicio
- Materiales incluidos
- TÃ©cnicas utilizadas
- Cualquier informaciÃ³n relevante

---

## Uso de Servicios en Turnos

Cuando creas un turno:

1. Seleccionas un **servicio principal**
2. Si el servicio tiene subservicios activos, puedes seleccionar uno (aplica descuento)
3. Puedes agregar **servicios extras** adicionales
4. El sistema calcula automÃ¡ticamente:
   - Precio total (servicio principal + extras - descuentos)
   - DuraciÃ³n total (suma de todas las duraciones)

---

## Mejores PrÃ¡cticas

### âœ… Recomendaciones

- Usa nombres claros y descriptivos
- Establece precios consistentes
- Registra duraciones realistas
- Agrega descripciones cuando sea Ãºtil
- Organiza subservicios para ofrecer opciones a tus clientas

### âŒ Evita

- Nombres muy genÃ©ricos o confusos
- Precios inconsistentes para servicios similares
- Duplicar servicios con ligeras variaciones
- Olvidar actualizar precios cuando cambian

---

## Preguntas Frecuentes

**Â¿Puedo cambiar el precio de un servicio?**
SÃ­, puedes editar el servicio y cambiar el precio. Los turnos futuros usarÃ¡n el nuevo precio.

**Â¿QuÃ© pasa si elimino un servicio que estÃ¡ en turnos?**
Los turnos existentes mantendrÃ¡n la informaciÃ³n del servicio, pero no podrÃ¡s crear nuevos turnos con ese servicio.

**Â¿CuÃ¡ntos subservicios puedo crear por servicio?**
No hay lÃ­mite. Puedes crear tantos subservicios como necesites.

**Â¿Puedo usar porcentaje e importe de descuento a la vez?**
No, debes elegir uno u otro. El sistema calcularÃ¡ el precio final segÃºn el tipo de descuento que uses.

**Â¿Los subservicios inactivos se eliminan?**
No, los subservicios inactivos se mantienen pero no aparecen al crear turnos. Puedes reactivarlos editÃ¡ndolos.

**Â¿CÃ³mo calculo el precio con subservicio?**
Si usas porcentaje: Precio final = Precio principal Ã— (1 - Porcentaje/100)
Si usas importe: Precio final = Precio principal - Importe


