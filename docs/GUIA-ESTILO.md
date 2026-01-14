# Guía de Estilo y Uso de Glymm-Docs

## Admoniciones (Notas, Advertencias, etc.)

Usa estas etiquetas para destacar información importante:

### Nota (Azul)
```markdown
!!! note "Título"
    Contenido de la nota informativa
```

### Consejo (Verde)
```markdown
!!! tip "Consejo"
    Consejo útil para el usuario
```

### Advertencia (Amarilla)
```markdown
!!! warning "Atención"
    Información que requiere cuidado
```

### Peligro (Roja)
```markdown
!!! danger "Peligro"
    Acción que podría causar problemas graves
```

### Ejemplo (Gris)
```markdown
!!! example "Ejemplo"
    Ejemplo práctico de uso
```

## Tablas

```markdown
| Encabezado 1 | Encabezado 2 |
|-------------|-------------|
| Celda 1     | Celda 2     |
| Celda 3     | Celda 4     |
```

## Código

### Código en línea
```
`código aquí`
```

### Bloque de código
````markdown
```python
def hello():
    print("Hola Mundo")
```
````

## Enlaces

### Enlaces internos
```markdown
[Texto del enlace](ruta/archivo.md)
[Ver turnos](turnos.md)
```

### Enlaces externos
```markdown
[Texto del enlace](https://ejemplo.com)
```

## Listas

### Lista no ordenada
```markdown
- Elemento 1
- Elemento 2
  - Sub-elemento 2.1
  - Sub-elemento 2.2
```

### Lista ordenada
```markdown
1. Primer paso
2. Segundo paso
3. Tercer paso
```

## Texto formateado

```markdown
**Texto en negrita**
*Texto en itálica*
~~Texto tachado~~
`Código`
```

## Encabezados

```markdown
# Encabezado 1 (Página principal)
## Encabezado 2 (Sección)
### Encabezado 3 (Subsección)
#### Encabezado 4 (Título pequeño)
```

## Emojis disponibles

Algunos emojis útiles para la documentación:

- 📚 `:books:` - Documentación
- 🚀 `:rocket:` - Lanzamiento, inicio rápido
- 💡 `:bulb:` - Ideas, tips
- ⚠️ `:warning:` - Advertencia
- ✅ `:white_check_mark:` - Correcto, completado
- ❌ `:x:` - Incorrecto, error
- 📧 `:email:` - Email
- 📱 `:mobile_phone:` - Móvil
- 🔒 `:lock:` - Seguridad
- 📊 `:bar_chart:` - Gráficos, reportes
- ⚙️ `:gear:` - Configuración
- 🎯 `:dart:` - Objetivo

## Estructura de página recomendada

```markdown
# Título Principal

Introducción de una línea sobre el tema.

## Sección 1

Contenido descriptivo.

### Subsección 1.1

Detalles específicos.

## Sección 2

Más contenido.

---

## Preguntas Frecuentes

**¿Pregunta?**
Respuesta clara y concisa.
```

## Buenas Prácticas

✅ **Hacer:**
- Ser claro y conciso
- Usar encabezados jerárquicos
- Incluir ejemplos prácticos
- Proporcionar instrucciones paso a paso
- Destacar advertencias importantes
- Mantener actualizada la documentación

❌ **Evitar:**
- Párrafos muy largos
- Jerga técnica sin explicación
- Información desactualizada
- Estructura poco clara
- Falta de ejemplos
- Contenido duplicado
