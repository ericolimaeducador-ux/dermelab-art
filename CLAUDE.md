# CLAUDE.md — Dermelab · Art

Instruções de projeto para o Claude Code. Leia `DESIGN.md` antes de tocar em qualquer
componente visual — ele define paleta, tipografia, layout e os princípios de design que
não podem ser quebrados silenciosamente.

## O que é este projeto

**Escopo atual (decisão do Erico): somente a linha de cuidado/cicatrização da pele.**
Carro-chefe: Kit Pele Rara. Categorias ativas: Kits completos, Limpeza & Preparo,
Cicatrização ativa, Hidratação & Manutenção. Suprimento geral de tatuagem (agulhas,
máquinas, tintas, EPI) **não faz parte do site por enquanto** — foi removido de
`categories.json`/`products.sample.json`, não apenas escondido. Se o escopo for ampliado
no futuro, isso é uma decisão de produto a confirmar com o Erico antes de recriar essas
categorias, não uma retomada automática.

Posicionamento de marca: **a ciência do cuidado, a majestade da arte** — autoridade de
laboratório que existe para servir o trabalho do tatuador, nunca para competir com ele.

Arquitetura de experiência inspirada na mecânica editorial de sites de portfólio
full-bleed (referência de estrutura: smorgasbord.studio) — mas todo conteúdo, copy,
imagens e código deste projeto são originais. Nunca reintroduza texto, nomes de clientes
ou assets do site de referência.

**Regra de tipografia não-negociável:** todo texto novo escolhe entre registro
"laboratório" (`font-mono`, factual, contido) e registro "arte" (`font-display`, serifa
itálica, grande). Ver DESIGN.md §2 antes de estilizar qualquer texto novo.

## Assets de marca reais (não são mais placeholder)

O Erico entregou a arte oficial da marca em `public/brand/`:

- `dermelab-art-mark.png` — logotipo completo (rosto de linha + ornamento floral vinho +
  wordmark "DERMELAB · ART"), 2500×2500, fundo transparente/branco.
- `dermelab-art-mark-face.png` — só a ilustração (sem wordmark), recorte do arquivo acima.
- `favicon-256.png` — recorte quadrado da ilustração, usado como favicon/apple-touch-icon.
- `dermelab-art-hero.mp4` — animação de reveal do logotipo (10s, 1920×1080, com áudio),
  usada como fundo full-bleed do Hero da home. Tem trilha sonora real — por isso o Hero
  implementa o toggle "Som: ligado/desligado" (mesma mecânica de "Sound on/off" da
  referência smorgasbord.studio, aqui com função literal, não só decorativa).
- `poster.jpg` — frame extraído do vídeo de reveal do logotipo, usado como `poster` do
  `<video>` do Hero.
- `science-reveal.mp4` — segundo vídeo real da marca: soro penetrando a pele até revelar
  o mesmo ornamento floral vinho do logotipo, já tatuado. Usado em `ScienceRevealSection`
  (home, entre Hero e Método). **Tem texto em inglês ("HYDRATION") já embutido no vídeo**
  — não dá pra localizar sem reeditar o arquivo-fonte; se isso incomodar, pedir ao
  fornecedor do asset uma versão sem overlay de texto, ou sem legendas em PT-BR.
- `science-reveal-poster.jpg` / `pele-rara-still.jpg` — frames extraídos desse vídeo; o
  segundo é usado como imagem do Kit Pele Rara (ver nota no `products.sample.json` —
  é still real, ainda não é foto de produto/embalagem).

A cor `--pigment-red` (`#761520`) foi recalibrada para o valor real extraído dessa arte —
deixou de ser a aproximação de projeto anterior (`#8C2F39`). Não reverter sem motivo.

O wordmark do site (`Wordmark.astro`, usado no Header e no Footer) é uma réplica em texto
do lockup oficial — "DERMELAB" + ponto vermelho (`bg-pigment-red`) + "ART", fonte `Jost`.
Nunca voltar a renderizar o nome da marca em `font-display` (serifa itálica) nem escrever
"Derme.Lab" — esse nome foi substituído.

## Stack

- **Astro 4** (SSG/hybrid) + **Tailwind CSS** — mesma escolha da referência (site rápido,
  conteúdo majoritariamente estático no marketing, ilhas interativas só onde precisa).
- **TypeScript estrito** em toda ilha interativa (carrinho, filtros, formulário).
- Catálogo inicial em JSON local (`src/data/products.sample.json`) — **trocar por CMS
  headless** (Sanity, como a própria referência usa, ou alternativa) assim que o catálogo
  real existir. Não inventar produtos, preços ou registros — são placeholders explícitos.
- Carrinho/checkout: ainda não implementado neste scaffold (ver backlog abaixo).

## Convenções

- Componentes `.astro` para tudo que é estático; usar `client:visible` ou `client:idle`
  (nunca `client:load` por padrão) nas poucas ilhas interativas (menu overlay, carrinho).
- Tokens de cor/tipografia SOMENTE via variáveis CSS em `src/styles/global.css` — nunca
  hex hard-coded em componente.
- Nomes de arquivo, variáveis, commits: inglês. Copy visível ao usuário: PT-BR.
- Todo produto com dado técnico (etapa de uso, indicação, composição) usa
  `SpecTable.astro` — nunca specs soltas em prosa.
- `pigment-red` (var `--pigment-red`) só em: preço, botão de compra, badge de carrinho, badge
  de promoção real. Se você se pegar usando em outro lugar, pare — é o princípio nº 1 do
  DESIGN.md.

## Status de publicação (2026-09)

Site configurado para deploy estático na **Cloudflare Pages**, domínio alvo `dermelab.art`
(valor já aplicado em `astro.config.mjs`). Ver `PASSOS-PUBLICACAO.md` na raiz.
Feito: rota `/loja/[categoria]`, página `404`, `robots.txt`, `sitemap` (`@astrojs/sitemap`),
meta tags OG/Twitter/canonical por página, placeholders visuais de produto
(`public/products/placeholder*.svg`). Header não exibe mais link de carrinho (não existe
ainda); CTA de produto encaminha para `/contato`.

## Backlog técnico (ordem sugerida)

1. **Carrinho client-side** (Nano Stores ou Astro + localStorage) — estado do carrinho,
   contador no header, drawer lateral.
2. **Checkout** — definir gateway com o Erico antes de codar (Mercado Pago é o padrão já
   usado no projeto OmniaCare dele; perguntar se este projeto segue o mesmo padrão).
3. **Filtro de categoria em `/loja`** — client-side no MVP, mover para query server-side
   quando o catálogo passar de ~200 SKUs.
4. **CMS headless** para substituir `products.sample.json` — Sanity é a escolha natural
   (mesmo stack da referência, boa para catálogo com muitas imagens).
5. **Página de categoria** `/loja/[categoria].astro` (dynamic route, `getStaticPaths`).
6. **SEO**: meta tags por página, sitemap, OG image por produto (mesmo padrão já aplicado
   no projeto SWB do Erico — `Helmet`-like via `<head>` do Astro).
7. **Regulatório**: se algum SKU da linha de cuidado (Kit Pele Rara e afins) exigir
   registro sanitário/ANVISA (cosmético/correlato) ou nota de procedência, adicionar
   campo `regulatory` no schema do produto ANTES de publicar — não assumir que não se
   aplica sem confirmar.
8. **Claims de cicatrização/cuidado da pele** (todo copy do Kit Pele Rara, da seção
   Método e da seção "A ciência penetra. A arte permanece.") precisam de validação por
   profissional habilitado antes de publicação — linguagem de finalidade, nunca de
   promessa/cura. Manter `[PENDENTE — validar]` até lá. Isso vale mesmo quando a sugestão
   de eficácia vem de um vídeo/imagem, não só de texto.

## O que NUNCA fazer neste projeto

- Não reintroduzir texto, nomes de projeto/cliente ou mídia do site de referência.
- Não inventar preço, estoque, avaliação de cliente ou selo/certificação — placeholder
  explícito (`// TODO(data): confirmar com Erico`) até haver dado real.
- Não usar `pigment-red` fora de contexto comercial (ver princípio nº 1).
- Não subir credencial de gateway de pagamento no código — `.env` sempre, nunca commitado.
- Não quebrar a regra de "um acento só" adicionando gradiente, sombra colorida ou segunda
  cor "quente" sem atualizar o DESIGN.md primeiro (é uma decisão de marca, não um detalhe
  de implementação).

## Como rodar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
```
