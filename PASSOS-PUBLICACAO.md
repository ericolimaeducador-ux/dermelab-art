# Publicação — Dermelab · Art

Guia de publicação do site em `https://dermelab.art` via **GitHub Pages** (com GitHub Actions).
O código builda limpo (`npm run build`) e o workflow de CI/CD já está configurado em `.github/workflows/deploy.yml`.

---

## 1. Ativar o GitHub Pages no Repositório

1. Acesse o repositório no GitHub: **https://github.com/ericolimaeducador-ux/dermelab-art**
2. Vá em **Settings** (Configurações) → **Pages** (no menu lateral esquerdo).
3. Na seção **Build and deployment**:
   - **Source**: Selecione **`GitHub Actions`** (em vez de *Deploy from a branch*).
4. Assim que você fizer `git push` na branch `main`, a Action **Deploy to GitHub Pages** rodará automaticamente e fará o build e publicação.

---

## 2. Configurar o Domínio Personalizado (`dermelab.art`)

O arquivo `public/CNAME` já está configurado com `dermelab.art`.

### Configuração de DNS no seu provedor de domínio:
Adicione os seguintes registros DNS:

1. **Registros A (para o domínio raiz `dermelab.art` apontando para o GitHub Pages)**:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

2. **Registro CNAME (para o subdomínio `www`)**:
   - **Nome / Host**: `www`
   - **Tipo**: `CNAME`
   - **Valor / Destino**: `ericolimaeducador-ux.github.io.`

3. **No GitHub (Settings → Pages → Custom domain)**:
   - Digite `dermelab.art` e clique em **Save**.
   - Marque a opção **Enforce HTTPS** (o certificado SSL gratuito do GitHub é gerado em poucos minutos após a propagação do DNS).

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
