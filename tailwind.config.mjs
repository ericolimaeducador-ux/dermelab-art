/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // ver DESIGN.md §1 — Dermelab · Art: dualidade "laboratório" (frio/preciso) x "arte" (quente/expressivo)
        graphite: {
          950: '#1B1B1B', // autoridade — texto, header/footer escuros
          700: '#3A3A38', // superfície escura secundária
        },
        lab: {
          50: '#F7F5F2', // fundo clínico — branco quente, nunca branco-hospital frio
        },
        glassline: '#D7DED8', // hairline sobre lab-50 — vidro de laboratório
        glass: {
          sage: '#7C9683', // acento frio "ciência" — labels de método, foco, links neutros
        },
        pigment: {
          red: '#761520', // ÚNICO acento quente "arte" (preço, CTA, badge) — cor real extraída da arte oficial Dermelab · Art, não é mais placeholder
        },
      },
      fontFamily: {
        // register "arte/majestade" — serifa editorial itálica para headline e slogan
        display: ['"Newsreader"', 'Georgia', 'serif'],
        // wordmark — geométrica leve, mesma família visual do logotipo oficial (DERMELAB · ART)
        wordmark: ['"Jost"', '"Century Gothic"', 'sans-serif'],
        // register "laboratório/método" — specs, rótulos de lote, notas de método
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
        // utilitário neutro — corpo de texto, navegação, formulários
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(2.75rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.005em' }],
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};
