# 📚 Centro de Ayuda GLYMM

Documentación oficial y completa para GLYMM - Sistema de gestión para salón de extensiones.

## 🌐 Acceso

Visita la documentación en línea: [https://docs.glymm.com](https://docs.glymm.com)

## 📖 Contenido

### Guías Principales

- **[Clientes](docs/clientes.md)** - Gestión completa de tu base de clientas
- **[Turnos](docs/turnos.md)** - Creación y administración de turnos con calendario, servicios extras, adelantos y descuentos
- **[FAQ](docs/faq.md)** - Preguntas frecuentes y respuestas rápidas
- **[Solución de Problemas](docs/solucion-de-problemas.md)** - Diagnóstico y resolución de problemas comunes

## 🚀 Características de GLYMM

✨ **Intuitivo y fácil de usar**
- Interfaz limpia y moderna con modo oscuro
- Navegación intuitiva
- Diseño responsive para móviles, tablets y escritorio

📅 **Calendario Inteligente**
- Vista mensual y semanal
- Cambio rápido de estados
- Visualización clara de turnos por estado

💰 **Gestión Financiera Avanzada**
- Servicios extras en un mismo turno
- Adelantos (monto o porcentaje)
- Descuentos (monto o porcentaje)
- Cálculo automático de precios y duraciones

📊 **Módulos Completos**
- Gestión de clientas
- Turnos con calendario interactivo
- Servicios y subservicios
- Insumos e inventario
- Facturación y reportes
- Usuarios y permisos

🔒 **Seguro y confiable**
- Encriptación de nivel empresarial
- Gestión de permisos por usuario
- Sincronización con Google Calendar

## 🛠️ Construcción

Esta documentación está construida con **MkDocs** y utiliza el tema **Material**.

### Requisitos

- Python 3.7+
- mkdocs
- mkdocs-material
- mkdocs-plugins

### Instalación local

```bash
# Clonar el repositorio
git clone https://github.com/glymm/glymm-docs.git
cd glymm-docs

# Instalar dependencias
pip install mkdocs mkdocs-material mkdocs-offline

# Servir localmente
mkdocs serve
```

La documentación estará disponible en `http://localhost:8000`

### Construir para producción

```bash
mkdocs build
```

Los archivos compilados estarán en la carpeta `site/`

## 📝 Estructura del Proyecto

```
glymm-docs/
├── mkdocs.yml              # Configuración principal
├── docs/
│   ├── index.md           # Página principal
│   ├── clientes.md        # Guía de clientes
│   ├── turnos.md          # Guía de turnos
│   ├── faq.md             # Preguntas frecuentes
│   ├── solucion-de-problemas.md  # Solución de problemas
│   ├── css/
│   │   └── custom.css     # Estilos personalizados
│   └── overrides/
│       └── main.html      # Template personalizado
├── .github/
│   └── workflows/
│       └── publish-docs.yml # CI/CD para GitHub Pages
└── README.md              # Este archivo
```

## 🎨 Estilos

La documentación utiliza estilos personalizados basados en el diseño de GLYMM:

- **Paleta de colores:** Rosa (#ec4899, #f8b2d3) - Tema principal de GLYMM
- **Tipografía:** Inter (texto) y JetBrains Mono (código)
- **Logo:** Logos oficiales de GLYMM (glymm.svg, glymm-icon.svg)

### Características de diseño

- Tema claro y oscuro automático
- Tipografía profesional (Inter, JetBrains Mono)
- Componentes mejorados (botones, tarjetas, admoniciones)
- Responsive design para todos los dispositivos
- Iconos y estética consistentes con la aplicación GLYMM

## 🔄 Workflow de Contribución

Para contribuir a la documentación:

1. **Crear una rama** para tu cambio
   ```bash
   git checkout -b feature/mejora-docs
   ```

2. **Editar los archivos** markdown en `docs/`

3. **Previsualizar** localmente
   ```bash
   mkdocs serve
   ```

4. **Hacer commit** de los cambios
   ```bash
   git add .
   git commit -m "docs: descripción del cambio"
   ```

5. **Push a GitHub**
   ```bash
   git push origin feature/mejora-docs
   ```

6. **Crear un Pull Request**

### Convenciones de escritura

- Usa títulos claros y descriptivos
- Organiza el contenido con encabezados jerárquicos
- Incluye ejemplos prácticos
- Proporciona advertencias y notas importantes
- Mantén un tono profesional y amable

## 🚀 Despliegue

La documentación se despliega automáticamente en GitHub Pages cuando se realiza un push a la rama `main`.

Consulta [.github/workflows/publish-docs.yml](.github/workflows/publish-docs.yml) para detalles del CI/CD.

## 💬 Soporte y Contacto

- **Documentación en vivo**: https://docs.glymm.com
- **Issues**: Reporta problemas en GitHub Issues
- Consulta la sección de [Solución de Problemas](docs/solucion-de-problemas.md) para ayuda técnica

## 📄 Licencia

Esta documentación está licenciada bajo Creative Commons Attribution 4.0 International License.

## 🙏 Agradecimientos

Gracias a todo el equipo de Glymm por contribuir al contenido y mejoras de esta documentación.

---

**Última actualización**: Enero 2026  
**Versión de documentación**: 2.0  
**Estado**: ✅ Activo y actualizado con funciones reales de GLYMM  
**Proyecto**: Sistema de gestión para salón de extensiones
