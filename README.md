# GLYMM Docs - Centro de Ayuda

Documentacion y guias de ayuda para GLYMM. Deploy automatico a [soporte.glymm.com.ar](https://soporte.glymm.com.ar).

## Desarrollo local

Requiere Node.js 22+ y pnpm 9+.

```bash
pnpm install
pnpm dev
```

Sitio local: `http://localhost:4321`

## Build

```bash
pnpm build
pnpm preview
```

El build de produccion se genera en `dist/`.

## Deploy

Automatico en cada push a `main` via GitHub Actions.

## Agregar o editar contenido

Los articulos viven en `src/content/docs/`. Cada archivo `.md` o `.mdx` representa una pagina del sitio.

Frontmatter minimo:

```yaml
---
title: Titulo de la pagina
description: Descripcion corta para SEO
---
```

## Assets y branding

- `src/assets/glymm.svg`: logo principal
- `public/favicon.svg`: favicon
- `public/CNAME`: dominio custom para GitHub Pages

## Documentacion interna

La guia editorial del sitio se preserva en `CONTRIBUTING.md`. No forma parte del sitio publico de ayuda.
