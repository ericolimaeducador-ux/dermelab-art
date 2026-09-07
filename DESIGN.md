# DESIGN.md — Dermelab · Art
### Arquitetura e sistema visual (referência de mecânica: smorgasbord.studio)

**Conceito de marca:** Dermelab · Art existe na fronteira entre o laboratório e o estúdio de
tatuagem. Traz autoridade, assepsia, método e científico — prepara o terreno para vender
produtos de alta performance (ex.: Kit Pele Rara) mostrando que existe estudo real sobre
cicatrização e pele por trás do produto. Mas a frieza do "laboratório" é quebrada pela
humanidade da arte: a ciência existe para servir o trabalho do tatuador, não o contrário.

**Slogan:** *"A ciência do cuidado, a majestade da sua arte."* A primeira metade valida
o produto (cuidado/ciência); a segunda valida o cliente (majestade/arte) — coloca o
trabalho do tatuador em um pedestal. Essa dualidade é a espinha dorsal de todo o sistema
visual abaixo: **todo componente que carrega texto tem que escolher — conscientemente —
entre o registro "laboratório" (mono, contido, factual) e o registro "arte" (serifa
itálica, grande, expressivo).** Nunca misturar os dois no mesmo elemento.

**Escopo atual (decisão do Erico): somente a linha de cuidado/cicatrização da pele.**
Kit Pele Rara é o carro-chefe. Suprimento geral de tatuagem (agulhas, máquinas, tintas,
EPI) fica fora do site por enquanto — ver nota de escopo no `CLAUDE.md`.

**Identidade visual real.** A marca chegou com arte oficial pronta (`public/brand/`) —
rosto de perfil em linha fina convergindo num ornamento floral vinho na altura do
pescoço/orelha, wordmark "DERMELAB · ART" com o ponto entre as palavras na mesma cor do
ornamento. Essa arte substitui qualquer paleta/composição hipotética descrita
anteriormente neste documento: a cor `pigment-red` (§1) e a composição do Hero (§3) foram
recalibradas para bater com o asset real, não o contrário.

## 0. O que foi replicado da referência (mecânica, não conteúdo/código literal)

Não copiei HTML/CSS/JS do smorgasbord.studio (é um site autoral, Astro + Sanity CMS, com
copy, fotografia e vídeo proprietários — reproduzir isso literalmente seria violação de
direito autoral, não "inspiração"). O que replico é a **arquitetura de experiência**, que é
um padrão de mercado (editorial full-bleed) e pode ser livremente reimplementado com
conteúdo, imagens e código 100% originais:

| Padrão da referência | Adaptação para Dermelab · Art |
|---|---|
| Header fino, wordmark canto-esquerdo, toggle de menu canto-direito | Idêntico na mecânica; wordmark em serifa itálica (registro "arte") |
| Overlay full-screen de menu com lista de serviços | Overlay com Categorias + navegação principal, mesma tipografia itálica grande |
| Parede full-bleed de imagens/vídeo em sequência contínua, mix retrato/paisagem | Parede full-bleed de produtos (mesma lógica de grid), hover revela nome+preço em vez de nome+ano |
| Lista de projetos com ano ("2025—Ongoing") ancorada à direita | Lista de categorias com contagem de SKUs ancorada à direita |
| Toggle "Sound on/off" para vídeo autoplay | Toggle "Vídeo on/off" nos processos de aplicação (mesma função: controle de mídia autoplay) |
| Scroll contínuo de uma única página institucional | Home soma uma seção nova sem equivalente na referência: **Método** (registro laboratório, sustenta a autoridade científica antes da parede de produtos) |

Nunca foi feito fetch do código-fonte ou dos assets (imagens/vídeos) do site de referência —
apenas da página renderizada, para mapear estrutura. Todo asset deste projeto é placeholder
a ser substituído por fotografia própria do Erico.

## 1. Sistema de cor

| Token | Hex | Uso |
|---|---|---|
| `--graphite-950` | `#1B1B1B` | Fundo padrão escuro (header, footer, overlay de menu) |
| `--graphite-700` | `#3A3A38` | Superfície escura secundária, bordas sobre `graphite-950` |
| `--lab-50` | `#F7F5F2` | Fundo clínico — branco **quente**, nunca branco-hospital frio |
| `--glassline` | `#D7DED8` | Hairlines/dividers sobre `lab-50` — referência: vidro de laboratório |
| `--glass-sage` | `#7C9683` | Acento frio "ciência" — rótulos de método, foco, links/hover neutros |
| `--pigment-red` | `#761520` | **Único acento "quente"** — reservado exclusivamente para preço, CTA de compra e badge de carrinho. Cor real extraída da arte oficial da marca (`public/brand/`), não é mais aproximação. |

Regra de ouro: `pigment-red` nunca decora — só aparece onde há uma ação ou valor comercial
(preço, "Adicionar ao carrinho", contador do carrinho, badge de promoção real). Ele é
literalmente o pigmento — a cor entra na paleta no exato momento em que a arte (o produto,
a compra) entra na conversa.

## 2. Tipografia — a dualidade é a tipografia

- **Registro "arte" (`font-display`)** — `Newsreader`, sempre em **itálico** (aplicado
  globalmente via `.font-display { font-style: italic }` em `global.css` — nunca usar o
  peso reto). Serifa editorial, alto contraste, grande. Usada em: wordmark, hero, slogan,
  títulos de categoria, títulos de seção, nome de produto em destaque. É o registro que
  "valida o cliente" — majestoso, nunca contido.
- **Registro "laboratório" (`font-mono`)** — `IBM Plex Mono`. Usada em: eyebrow de seção
  ("Método", "0.30mm", nº de lote), tabela de specs técnicas, notas de pendência
  regulatória. É o registro que "valida o produto" — factual, contido, nunca decorativo.
  Minúsculo/sentence case sempre — nunca ALL CAPS (não é rótulo genérico, é dado).
- **Corpo (`font-body`)** — `Inter`. Parágrafos, navegação, formulários, botões. Neutro,
  16px base, line-height 1.6. É o registro "utilitário" — nem ciência nem arte, só a
  informação que faz a interface funcionar.

Regra de composição: qualquer bloco de texto novo começa perguntando "isso é ciência ou é
arte?" — a resposta decide a fonte. Nunca criar um quarto registro tipográfico sem
atualizar esta seção primeiro.

Escala: hero clamp(44–80px) · título de seção 32px · corpo 16px · mono/spec 13–14px.
Máximo 4 níveis.

## 3. Layout

```
┌─────────────────────────────────────────┐
│ DERMELAB·ART            MENU ☰           │  ← header fixo, translúcido sobre o vídeo
├─────────────────────────────────────────┤
│                                           │
│  [vídeo real: rosto de linha + ornamento]│  ← hero full-bleed, 100vh, vídeo de marca
│    A ciência do cuidado,  (mono)         │    (public/brand/dermelab-art-hero.mp4)
│    a majestade da sua arte.  (serifa)    │    com toggle "Som: ligado/desligado"
│    [Kit Pele Rara]  [Ver catálogo]       │
├─────────────────────────────────────────┤
│  [vídeo real: soro → pele → revela a     │  ← science-reveal.mp4 — dramatização
│   tatuagem do mesmo ornamento do logo]   │    literal do slogan (mostra, antes
│  A ciência penetra. A arte permanece.    │    de o Método explicar)
├─────────────────────────────────────────┤
│  Método                                  │  ← registro laboratório: 3 passos
│  01 Compreensão · 02 Formulação ·        │    (autoridade científica antes da venda)
│  03 Aplicação                            │
├─────────────────────────────────────────┤
│  Kits completos          ·  0 itens →    │  ← índice de categorias, lista tipográfica
│  Limpeza & Preparo       ·  0 itens →    │    (mesma lógica da lista de projetos da ref.;
│  Cicatrização ativa      ·  0 itens →    │    só a linha de cuidado por enquanto — ver
│  Hidratação & Manutenção ·  0 itens →    │    nota de escopo no início deste doc)
├─────────────────────────────────────────┤
│  [img] [img·retrato] [img]  [img]        │  ← parede full-bleed contínua,
│  [img·retrato] [img] [img·retrato]       │    mix paisagem/retrato, hover = nome+preço
├─────────────────────────────────────────┤
│  contato · instagram · newsletter        │  ← footer minimal
└─────────────────────────────────────────┘
```

Alinhamento: conteúdo de texto sempre à esquerda (nunca centralizado) — reforça o tom
técnico/profissional do público (tatuadores, estúdios), não um tom "boutique lifestyle".

## 4. Princípios

1. **Um acento só.** `pigment-red` é gastado exclusivamente em comércio (preço, CTA,
   badge). Todo o resto vive em graphite/lab/sage.
2. **A dualidade ciência×arte é estrutural, não decorativa.** Todo texto escolhe
   conscientemente um registro tipográfico (§2). Se um componente parece "neutro demais",
   ele provavelmente deveria estar em mono (laboratório) ou serifa itálica (arte).
3. **Nenhuma claim de cicatrização/cuidado sem lastro.** Mesma régua do consultor clínico
   do projeto OmniaCare do Erico: linguagem de finalidade, nunca de promessa/cura; toda
   claim nova entra como rascunho com `[PENDENTE — validar]` até ter evidência real.
4. **Índice de categoria = quadro clínico-editorial.** Lista tipográfica grande, sem
   cards, sem sombra, sem borda arredondada — texto puro fazendo o trabalho visual.
5. **Specs técnicas sempre em mono, sempre tabuladas.** Público profissional decide por
   dado técnico (calibre, voltagem, protocolo), não por adjetivo.
6. **Sem urgência falsa.** Nada de contador regressivo ou "só restam 2" — só se for dado
   real de estoque vindo do backend.

## 5. Mapa de páginas (MVP)

- `/` — Home (hero com slogan partido + Método + índice de categorias + parede de produtos)
- `/loja` — Catálogo completo, filtro por categoria
- `/loja/[categoria]` — Catálogo filtrado (TODO no Claude Code)
- `/produto/[slug]` — PDP com galeria + specs + CTA de compra. `pele-rara-kit` é o
  produto carro-chefe (`site.json.flagshipProduct`) — recebe o CTA primário do hero.
- `/sobre` — Manifesto da marca / autoridade (registro sanitário se aplicável)
- `/contato` — Atacado/lojista + suporte

## 6. Próximos passos para o Claude Code

Ver `CLAUDE.md` na raiz — lista as convenções e o backlog técnico (carrinho, checkout,
integração de pagamento, CMS/headless para catálogo).
