# Dermelab · Art

*A ciência do cuidado, a majestade da sua arte.*

Scaffold de e-commerce da linha de cuidado/cicatrização para tatuadores (escopo atual:
somente essa linha — suprimento geral fica fora por enquanto, ver `CLAUDE.md`).
Arquitetura de experiência inspirada na mecânica editorial full-bleed de sites de
portfólio (ver `DESIGN.md` para o que exatamente foi replicado vs. adaptado) — todo
conteúdo, copy e código aqui são originais. Domínio/e-mail em `src/data/site.json`
ainda são placeholder.

## Abrir no Claude Code

1. Descompacte este projeto em uma pasta local.
2. Abra a pasta no Claude Code (`claude` na raiz do projeto).
3. Leia primeiro `CLAUDE.md` (convenções + backlog) e `DESIGN.md` (sistema visual) —
   ambos já estão na raiz para o Claude Code carregar como contexto.
4. `npm install && npm run dev` para ver o scaffold em `http://localhost:4321`.

## O que já existe

- Home (`/`) com hero full-bleed, seção science-reveal, Método, índice de categorias e parede de produtos.
- Catálogo (`/loja`), catálogo por categoria (`/loja/[categoria]`) e página de produto dinâmica (`/produto/[slug]`).
- Páginas `/sobre`, `/contato` e `404` custom.
- Design system aplicado via Tailwind + CSS vars (`src/styles/global.css`).
- SEO base: `<title>`/OG/Twitter/canonical por página, `sitemap-index.xml` (via `@astrojs/sitemap`) e `robots.txt`.
- Deploy configurado para **Cloudflare Pages** (`_headers`, `.nvmrc`) — domínio alvo `dermelab.art`.
- Dados de exemplo em `src/data/*.json` — todos marcados como placeholder.

## Deploy (Cloudflare Pages)

O site é 100% estático. Não precisa de nenhuma variável de ambiente para buildar.

| Config | Valor |
|---|---|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `22` (lida do `.nvmrc`) |

Passo a passo no painel da Cloudflare em `PASSOS-PUBLICACAO.md` (na raiz do repo).

## O que falta (ver `CLAUDE.md` → Backlog técnico)

Carrinho, checkout/pagamento, filtro client-side de categoria em `/loja`, CMS headless
para o catálogo real, formulário de lead B2B, validação clínica de todas as claims, e
confirmação de exigência regulatória (ANVISA/registro) por SKU antes de publicar.
