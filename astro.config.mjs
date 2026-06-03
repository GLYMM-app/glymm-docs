import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

export default defineConfig({
  site: 'https://ayuda.glymm.com.ar',
  integrations: [
    starlight({
      title: 'Centro de Ayuda GLYMM',
      description: 'Sistema de gestión para tu salón de extensiones de cabello',
      defaultLocale: 'root',
      locales: {
        root: { label: 'Español', lang: 'es' },
      },
      logo: {
        src: './src/assets/glymm.svg',
        alt: 'GLYMM',
      },
      favicon: '/favicon.svg',
      customCss: ['./src/styles/custom.css'],
      social: [],
      lastUpdated: true,
      pagination: true,
      editLink: {
        baseUrl: 'https://github.com/GLYMM-app/glymm-docs/edit/main/',
      },
      components: {
        Footer: './src/components/Footer.astro',
        Sidebar: './src/components/Sidebar.astro',
      },
      sidebar: [
        { label: 'Inicio', link: '/' },
        {
          label: 'Módulos',
          collapsed: false,
          items: [
            { label: 'Clientes', link: '/clientes/' },
            { label: 'Turnos', link: '/turnos/' },
            { label: 'Servicios', link: '/servicios/' },
            { label: 'Insumos', link: '/insumos/' },
            { label: 'Stock', link: '/stock/' },
            { label: 'Facturación', link: '/facturacion/' },
            { label: 'Usuarios', link: '/usuarios/' },
            { label: 'Configuración', link: '/configuracion/' },
            { label: 'Permisos', link: '/permisos/' }
          ]
        },
        {
          label: 'Soporte',
          collapsed: false,
          items: [
            { label: 'Preguntas Frecuentes', link: '/faq/' },
            { label: 'Solución de Problemas', link: '/solucion-de-problemas/' }
          ]
        }
      ],
    }),
  ],
})
