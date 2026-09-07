# Publicação — Dermelab · Art

Tudo o que falta para o site ficar no ar em `https://dermelab.art`.
O código já builda limpo (`npm run build`) e está pronto para deploy estático.

---

## 1. Conectar o repositório à Cloudflare Pages

1. Entre em https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Autorize o GitHub e escolha o repositório **`dermelab-art`**.
3. Configuração de build:

   | Campo | Valor |
   |---|---|
   | Production branch | `main` |
   | Framework preset | `Astro` |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Root directory | *(vazio — o projeto está na raiz do repo)* |
   | Variáveis de ambiente | nenhuma necessária |

4. **Save and Deploy**. O primeiro build sai em ~1–2 min e o site fica em
   `https://dermelab-art.pages.dev`.
5. A cada `git push` na `main` a Cloudflare rebuilda e publica sozinha. Pull requests
   ganham preview URL automática.

## 2. Ligar o domínio `dermelab.art`

### Se o domínio for registrado/transferido para a Cloudflare (recomendado)
1. Dash → **Websites** → **Add a site** → `dermelab.art` → siga o registro/transferência.
2. Em **Workers & Pages → dermelab-art → Custom domains → Set up a custom domain**,
   adicione `dermelab.art` e `www.dermelab.art`. Os registros DNS são criados sozinhos.

### Se o domínio ficar em outro registrador
Crie no DNS do registrador:

| Tipo | Nome | Valor |
|---|---|---|
| CNAME | `@` (ou `dermelab.art`) | `dermelab-art.pages.dev` |
| CNAME | `www` | `dermelab-art.pages.dev` |

> `.art` é um TLD comum; a maioria dos registradores aceita CNAME na raiz (CNAME flattening).
> Se o seu não aceitar, registre o domínio na Cloudflare para resolver isso.

O HTTPS/SSL é emitido automático pela Cloudflare depois que o DNS propaga (minutos a 1h).

## 3. Verificações pós-publicação

- [ ] `https://dermelab.art` carrega com o hero em vídeo.
- [ ] `https://dermelab.art/sitemap-index.xml` responde.
- [ ] `https://dermelab.art/robots.txt` responde.
- [ ] Google Search Console: adicionar a propriedade `dermelab.art` e enviar o sitemap.
- [ ] Testar OG: colar a URL no https://www.opengraph.xyz/ (a imagem é o logotipo da marca).

---

## 4. O que ainda impede o site de ser uma LOJA de verdade

O site hoje funciona como **vitrine/catálogo institucional**. Para virar e-commerce
transacional falta (ordem sugerida no `CLAUDE.md` → Backlog técnico):

| # | Item | Decisão necessária do Erico |
|---|---|---|
| 1 | Carrinho client-side (contador, drawer) | — |
| 2 | Checkout + gateway de pagamento | **Qual gateway?** (Mercado Pago é o padrão do projeto OmniaCare) |
| 3 | Filtro client-side de categoria em `/loja` | — |
| 4 | CMS headless p/ o catálogo real (Sanity) | Confirmar ferramenta + quem alimenta |
| 5 | Formulário de lead B2B em `/contato` | Para onde enviam os leads (e-mail? CRM?) |
| 6 | **Catálogo real**: nomes, preços, fotos, composição dos produtos | Dados reais — nada pode ser inventado |
| 7 | **Validação clínica** de toda claim (Método, Kit Pele Rara, science-reveal) | Profissional habilitado precisa aprovar a linguagem |
| 8 | **Regulatório**: registro ANVISA / procedência por SKU | Confirmar o que se aplica antes de publicar preço |
| 9 | Conteúdo institucional de `/sobre` | Texto do manifesto da marca |
| 10 | Dados de contato reais em `src/data/site.json` | E-mail, WhatsApp e Instagram definitivos (hoje são placeholder) |

> Enquanto 6–8 não estiverem resolvidos, o site pode ir ao ar como vitrine, mas
> **sem preço e sem claim de eficácia** — os placeholders atuais já refletem isso
> ("sob consulta", blocos `[PENDENTE — validar]`).
