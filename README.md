# 📚 Centro de Ayuda Glymm

Documentación oficial y completa para Glymm - Plataforma integral de gestión para negocios de servicios personales.

## 🌐 Acceso

Visita la documentación en línea: [https://docs.glymm.com](https://docs.glymm.com)

## 📖 Contenido

### Guías Principales

- **[Clientes](docs/clientes.md)** - Gestión completa de tu base de clientes
- **[Turnos](docs/turnos.md)** - Creación y administración de turnos
- **[FAQ](docs/faq.md)** - Preguntas frecuentes y respuestas rápidas
- **[Solución de Problemas](docs/solucion-de-problemas.md)** - Diagnóstico y resolución de problemas comunes

## 🚀 Características

✨ **Intuitivo y fácil de usar**
- Interfaz limpia y moderna
- Navegación intuitiva
- Disponible en dispositivos móviles

📊 **Gestión eficiente**
- Gestión integral de clientes
- Programación flexible de turnos
- Reportes y análisis en tiempo real

🔒 **Seguro y confiable**
- Encriptación de nivel empresarial
- Cumplimiento de GDPR y estándares internacionales
- Backups automáticos

💼 **Profesional**
- Adaptado a cualquier tipo de negocio de servicios
- Escalable según tus necesidades
- Soporte técnico dedicado

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

La documentación utiliza estilos personalizados basados en los diseños profesionales de:

- **Landingproyecto** - Paleta de colores moderna (Tema Rosa #ec4899)
- **billingGlymm** - Componentes y espaciado mejorado

### Características de diseño

- Tema claro y oscuro automático
- Tipografía profesional (Inter, JetBrains Mono)
- Componentes mejorados (botones, tarjetas, admoniciones)
- Responsive design para todos los dispositivos

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

- **Email**: support@glymm.com
- **Documentación en vivo**: https://docs.glymm.com
- **Issues**: Reporta problemas en GitHub Issues
- **Chat**: Disponible en la plataforma Glymm

## 📄 Licencia

Esta documentación está licenciada bajo Creative Commons Attribution 4.0 International License.

## 🙏 Agradecimientos

Gracias a todo el equipo de Glymm por contribuir al contenido y mejoras de esta documentación.

---

**Última actualización**: Enero 2026  
**Versión de documentación**: 1.0  
**Estado**: ✅ Activo y en desarrollo
