import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

export default defineConfig({
  site: 'https://soporte.glymm.com.ar',
  integrations: [
    starlight({
      title: 'Centro de Ayuda GLYMM',
      description: 'Sistema de gestion para tu salon de extensiones de cabello',
      defaultLocale: 'root',
      locales: {
        root: { label: 'Espanol', lang: 'es' },
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
      sidebar: [
        { label: 'Inicio', link: '/' },
        {
          label: 'Modulos',
          collapsed: false,
          items: [
            { label: 'Clientes', link: '/clientes/' },
            { label: 'Turnos', link: '/turnos/' },
            { label: 'Servicios', link: '/servicios/' },
            { label: 'Insumos', link: '/insumos/' },
            { label: 'Stock', link: '/stock/' },
            { label: 'Facturacion', link: '/facturacion/' },
            { label: 'Usuarios', link: '/usuarios/' },
            { label: 'Configuracion', link: '/configuracion/' },
            { label: 'Permisos', link: '/permisos/' }
          ]
        },
        {
          label: 'Soporte',
          collapsed: false,
          items: [
            { label: 'Preguntas Frecuentes', link: '/faq/' },
            { label: 'Solucion de Problemas', link: '/solucion-de-problemas/' }
          ]
        }
      ],
    }),
  ],
})
