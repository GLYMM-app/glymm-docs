# 🚀 Guía de Instalación y Desarrollo

## Requisitos Previos

- **Python 3.7+** instalado
- **pip** (gestor de paquetes de Python)
- **Git** para control de versiones

---

## Instalación Local

### 1. Clonar el Repositorio

```bash
git clone https://github.com/glymm/glymm-docs.git
cd glymm-docs
```

### 2. Crear Entorno Virtual (Recomendado)

```bash
# En Windows
python -m venv venv
venv\Scripts\activate

# En macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

### 3. Instalar Dependencias

```bash
pip install mkdocs mkdocs-material mkdocs-plugins
```

O usando el archivo `requirements.txt` (si existe):

```bash
pip install -r requirements.txt
```

### 4. Servir Localmente

```bash
mkdocs serve
```

La documentación estará disponible en: **http://localhost:8000**

El servidor se recargará automáticamente cuando realices cambios en los archivos.

---

## Estructura del Proyecto

```
glymm-docs/
├── mkdocs.yml                 # Configuración de MkDocs
├── docs/
│   ├── index.md              # Página principal
│   ├── clientes.md           # Guía de clientes
│   ├── turnos.md             # Guía de turnos
│   ├── faq.md                # Preguntas frecuentes
│   ├── solucion-de-problemas.md
│   ├── GUIA-ESTILO.md        # Guía de estilo
│   ├── css/
│   │   └── custom.css        # Estilos personalizados
│   └── overrides/
│       └── main.html         # Template personalizado
├── site/                      # Generado en build (no tocar)
├── README.md                  # Documentación del proyecto
├── CAMBIOS.md                 # Registro de cambios
└── INSTALACION.md             # Este archivo
```

---

## Desarrollo

### Editar Contenido

1. Modifica los archivos `.md` en la carpeta `docs/`
2. El servidor se recargará automáticamente
3. Visualiza los cambios en http://localhost:8000

### Editar Estilos

1. Modifica `docs/css/custom.css` para estilos globales
2. Los cambios se aplicarán automáticamente
3. Puedes usar CSS puro o SCSS

### Agregar una Nueva Página

1. Crea un archivo `.md` en la carpeta `docs/`
2. Edita `mkdocs.yml` para agregar la página al navegador
3. Usa el formato indicado en `GUIA-ESTILO.md`

---

## Comandos Útiles

### Servir Localmente (Desarrollo)
```bash
mkdocs serve
```

### Construir para Producción
```bash
mkdocs build
```
Los archivos compilados estarán en `site/`

### Limpiar Construcción Anterior
```bash
mkdocs build --clean
```

### Ver Ayuda de MkDocs
```bash
mkdocs --help
```

---

## Despliegue

### GitHub Pages (Automático)

El proyecto está configurado para desplegar automáticamente en GitHub Pages cuando hagas push a la rama `main`.

Ver `.github/workflows/publish-docs.yml` para detalles del workflow.

### Manual en GitHub Pages

```bash
# Construir el sitio
mkdocs build

# Desplegar en GitHub Pages
mkdocs gh-deploy
```

### Despliegue Personalizado

Copia el contenido de la carpeta `site/` generada a tu servidor web.

---

## Solución de Problemas

### Error: "mkdocs: command not found"

**Solución:**
```bash
# Verifica que el entorno virtual está activado
# En Windows
venv\Scripts\activate

# En macOS/Linux
source venv/bin/activate

# Vuelve a instalar
pip install mkdocs mkdocs-material mkdocs-plugins
```

### Puerto 8000 ya está en uso

**Solución:**
```bash
# Usa un puerto diferente
mkdocs serve --dev-addr 127.0.0.1:8001
```

### Los estilos CSS no se cargan

**Solución:**
1. Limpia la caché del navegador (Ctrl+Shift+Supr)
2. Reinicia el servidor `mkdocs serve`
3. Verifica que `docs/css/custom.css` existe

### Los cambios no aparecen

**Solución:**
1. Verifica que estés editando archivos en `docs/`
2. Guarda el archivo
3. Recarga la página web (F5)

---

## Contribución

### Workflow de Contribución

1. **Fork del repositorio**
   ```bash
   # En GitHub, haz clic en Fork
   ```

2. **Clonar tu fork**
   ```bash
   git clone https://github.com/tu-usuario/glymm-docs.git
   cd glymm-docs
   ```

3. **Crear rama de feature**
   ```bash
   git checkout -b feature/mi-cambio
   ```

4. **Hacer cambios**
   - Edita los archivos necesarios
   - Verifica localmente con `mkdocs serve`

5. **Commit de cambios**
   ```bash
   git add .
   git commit -m "docs: descripción clara del cambio"
   ```

6. **Push a tu fork**
   ```bash
   git push origin feature/mi-cambio
   ```

7. **Pull Request**
   - Abre un PR en GitHub
   - Describe los cambios
   - Espera revisión

### Convenciones de Commits

```
docs: cambios en documentación
fix: correcciones de errores
style: cambios de CSS o formato
refactor: reorganización de contenido
feat: nuevas características
```

---

## Mantenimiento

### Actualizar Dependencias

```bash
pip install --upgrade mkdocs mkdocs-material
```

### Verificar Versiones

```bash
mkdocs --version
```

---

## Recursos Útiles

- **MkDocs Docs:** https://www.mkdocs.org/
- **Material Theme:** https://squidfunk.github.io/mkdocs-material/
- **Markdown Guide:** https://www.markdownguide.org/
- **Glymm Docs:** https://docs.glymm.com

---

## Soporte

Si encuentras problemas:

1. Revisa esta guía
2. Consulta la [Guía de Estilo](GUIA-ESTILO.md)
3. Abre un issue en GitHub
4. Contacta a support@glymm.com

---

**Última actualización:** 14 de enero de 2026  
**Versión:** 1.0
