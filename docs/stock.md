# Gestión de Stock

## Introducción

El módulo de Stock te permite gestionar el inventario de extensiones y productos de tu salón. En esta guía aprenderás a registrar, monitorear y gestionar tu stock con alertas de reposición.

---

## Crear un Nuevo Item de Stock

### Pasos para crear un item:

1. Dirígete a la sección **Stock** desde el menú principal
2. Haz clic en el botón **+ Nuevo Item**
3. Completa los siguientes campos:

#### Campos Obligatorios

- **Tipo de Extensión:** Nombre o tipo del producto (requerido)
- **Cantidad:** Cantidad actual en stock (requerido)
- **Punto de Reposición:** Cantidad mínima antes de necesitar reabastecer (requerido)

#### Campos Opcionales

- **Proveedor:** Nombre del proveedor del producto

4. Haz clic en **Guardar**

!!! tip "Punto de Reposición"
    El punto de reposición es la cantidad mínima que debes tener antes de necesitar hacer un nuevo pedido. Cuando la cantidad baja a este nivel, el item se marcará con alerta de stock bajo.

---

## Editar un Item de Stock

1. Busca el item en la lista
2. Haz clic en el botón **✎ Editar**
3. Actualiza la información necesaria:
   - Cantidad actual
   - Punto de reposición
   - Proveedor
   - Tipo de extensión
4. Haz clic en **Guardar cambios**

!!! note "Actualización de Cantidad"
    Actualiza la cantidad regularmente cuando recibas nuevos productos o uses materiales del stock.

---

## Eliminar un Item de Stock

Para eliminar un item:

1. Busca el item en la lista
2. Haz clic en el botón **🗑 Eliminar**
3. Confirma la eliminación

!!! warning "Atención"
    La eliminación es permanente. Asegúrate de que realmente deseas eliminar el item antes de confirmar.

---

## Búsqueda de Items

Escribe cualquier parte del tipo de extensión en la barra de búsqueda para **filtrar la lista en tiempo real**.

La búsqueda se actualiza automáticamente mientras escribes.

---

## Vista de Lista de Stock

La vista de stock muestra cada item en formato de tarjetas con:

| Información | Descripción |
|-----------|-------------|
| **Tipo de Extensión** | Nombre o tipo del producto |
| **Cantidad** | Cantidad actual en stock (destacada en grande) |
| **Proveedor** | Nombre del proveedor (si está registrado) |
| **Punto de Reposición** | Cantidad mínima configurada |
| **Alerta de Stock Bajo** | Aparece cuando la cantidad es igual o menor al punto de reposición |

---

## Alertas de Stock Bajo

### Indicadores Visuales

Cuando un item tiene stock bajo (cantidad ≤ punto de reposición):

- **Borde rojo:** La tarjeta tiene un borde rojo
- **Fondo destacado:** Fondo rojo claro para mayor visibilidad
- **Cantidad en rojo:** El número de cantidad aparece en color rojo
- **Icono de advertencia:** Aparece el mensaje "⚠️ Stock bajo"

### Configurar Punto de Reposición

El punto de reposición debe ser:
- Realista según tu consumo
- Considerando el tiempo de entrega de proveedores
- Basado en tu experiencia de ventas

**Ejemplo:**
- Si vendes 10 unidades por semana
- Y tu proveedor tarda 2 semanas en entregar
- Tu punto de reposición debería ser al menos 20 unidades

---

## Campos de Stock

### Tipo de Extensión

El nombre o tipo del producto. Ejemplos:
- "Extensiones de cabello sintético 20cm"
- "Extensiones de cabello natural 30cm"
- "Extensiones de cabello premium 40cm"
- "Adhesivo para extensiones"
- "Herramientas de aplicación"

### Cantidad

La cantidad actual disponible en stock. Debe ser:
- Un número entero (no decimales)
- Actualizado regularmente
- Reflejar la realidad del inventario físico

### Proveedor

El nombre del proveedor del producto. Útil para:
- Contactar rápidamente cuando necesitas reabastecer
- Organizar pedidos
- Mantener registro de fuentes

### Punto de Reposición

La cantidad mínima antes de necesitar hacer un pedido. Debe ser:
- Mayor a cero
- Menor que tu stock máximo típico
- Basado en tu consumo real

---

## Gestión de Inventario

### Actualizar Cantidad

Actualiza la cantidad cuando:
- Recibes nuevos productos
- Usas materiales del stock
- Realizas inventario físico
- Detectas discrepancias

### Monitoreo Regular

Revisa el stock regularmente para:
- Identificar items con stock bajo
- Planificar pedidos a proveedores
- Evitar quedarte sin productos
- Mantener un inventario actualizado

---

## Mejores Prácticas

### ✅ Recomendaciones

- Actualiza las cantidades regularmente
- Configura puntos de reposición realistas
- Registra información del proveedor
- Usa nombres descriptivos para los tipos de extensión
- Revisa las alertas de stock bajo frecuentemente
- Mantén el stock sincronizado con el inventario físico

### ❌ Evita

- Dejar cantidades desactualizadas
- Puntos de reposición muy altos o muy bajos
- Olvidar actualizar después de usar materiales
- No revisar las alertas de stock bajo
- Nombres genéricos o confusos

---

## Organización del Stock

### Por Tipo de Producto

Organiza tus items por categorías usando nombres descriptivos:
- Extensiones por longitud
- Extensiones por calidad
- Materiales de aplicación
- Herramientas

### Por Proveedor

Usa el campo de proveedor para:
- Agrupar items del mismo proveedor
- Facilitar pedidos
- Mantener relaciones con proveedores

---

## Preguntas Frecuentes

**¿Cómo sé cuándo hacer un pedido?**
Cuando la cantidad de un item es igual o menor al punto de reposición, verás la alerta de "Stock bajo". Ese es el momento de hacer un pedido.

**¿Puedo tener cantidad negativa?**
No, la cantidad debe ser un número positivo o cero.

**¿Qué pasa si actualizo mal la cantidad?**
Puedes editar el item en cualquier momento y corregir la cantidad.

**¿El punto de reposición es obligatorio?**
Sí, es un campo requerido. Debes establecer una cantidad mínima para cada item.

**¿Puedo cambiar el punto de reposición?**
Sí, puedes editarlo en cualquier momento según cambien tus necesidades.

**¿Cómo calculo el punto de reposición adecuado?**
Considera: consumo promedio por período × tiempo de entrega del proveedor + margen de seguridad.

**¿Los items con stock bajo se eliminan automáticamente?**
No, solo se marcan visualmente. Debes actualizar la cantidad o hacer un pedido.

**¿Puedo tener múltiples items del mismo tipo?**
Sí, puedes crear múltiples items con el mismo tipo si provienen de diferentes proveedores o tienen características diferentes.

---

## Integración con Otros Módulos

El stock se relaciona con:
- **Servicios:** Para calcular costos de materiales
- **Insumos:** Para registrar materiales utilizados
- **Facturación:** Para análisis de costos vs ingresos

!!! note "Funcionalidad Futura"
    Las integraciones automáticas con otros módulos pueden estar en desarrollo. Consulta las actualizaciones del sistema.

---

## Reportes de Stock

### Análisis Manual

Puedes analizar tu stock:
- Revisando items con alertas de stock bajo
- Comparando cantidades con puntos de reposición
- Identificando items que necesitan atención

### Planificación de Compras

Usa la información de stock para:
- Planificar pedidos a proveedores
- Evitar quedarte sin productos
- Optimizar niveles de inventario
- Gestionar mejor los costos

---

## Solución de Problemas

### No veo alertas de stock bajo

**Verifica:**
1. Que la cantidad sea menor o igual al punto de reposición
2. Que el item esté guardado correctamente
3. Refresca la página si es necesario

### La cantidad no se actualiza

**Solución:**
1. Edita el item
2. Verifica que estés ingresando un número válido
3. Guarda los cambios
4. Refresca la página

---

## Mantenimiento del Stock

### Inventario Físico

Realiza inventarios físicos periódicamente para:
- Verificar que las cantidades en el sistema coincidan con la realidad
- Detectar pérdidas o discrepancias
- Mantener datos precisos

### Actualización Continua

Actualiza el stock:
- Cuando recibas nuevos productos
- Cuando uses materiales
- Después de cada inventario físico
- Cuando detectes discrepancias

