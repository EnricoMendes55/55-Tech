# Arquitetura

## Stack

| Peça                                            | Para que serve                                                                          |
| ----------------------------------------------- | --------------------------------------------------------------------------------------- |
| [Astro](https://astro.build) 7                  | Gera HTML estático a partir de componentes `.astro`. Nenhum framework vai ao navegador. |
| TypeScript (modo `strict`)                      | Tipos nos dados, props e scripts; erros aparecem no `npm run check`.                    |
| Tailwind CSS 4 (`@tailwindcss/vite`)            | Estilo por classes utilitárias, com os tokens da marca em `src/styles/global.css`.      |
| `@astrojs/sitemap`                              | Gera `sitemap-index.xml` no build.                                                      |
| Fontsource (Space Grotesk, Manrope, Space Mono) | Fontes servidas pelo próprio site, sem depender do Google Fonts.                        |
| Prettier + plugins Astro e Tailwind             | Formatação automática; o plugin do Tailwind ordena as classes.                          |
| GitHub Actions + GitHub Pages                   | Build e publicação a cada push na `main` (ver `deployment.md`).                         |

Sem React: a interatividade (menu do celular, formulário, consentimento) cabe em poucos
`<script>` em TypeScript, que o Astro empacota e otimiza.

## Pastas

```
astro.config.mjs        Endereço do site (site + base), integrações e Tailwind
public/                 Copiado como está: favicon.png e og.png (imagem de compartilhamento)
tools/check-links.mjs   Confere os links internos de dist/ (roda no CI depois do build)
src/
  content.config.ts     Schemas das coleções de conteúdo (Content Collections)
  content/services/     Um Markdown por serviço; o nome do arquivo é a URL (/servicos/<nome>/)
  assets/               Logos; o Astro otimiza no build (astro:assets)
  styles/global.css     Tailwind, tokens da marca (@theme), utilitários e estilos base
  data/                 Conteúdo estruturado e tipado
    site.ts             Nome, slogan, descrição, contatos, GA4 e menu (navigation)
    about.ts            Diferenciais (home e /quem-somos/)
    projects.ts         Projetos & Experimentos
    process.ts          Etapas do processo e formatos de trabalho
    solutions.ts        Textos da seção Soluções integradas (home e /servicos/)
    team.ts             Equipe exibida em /quem-somos/
  layouts/
    BaseLayout.astro    <head> (SEO, Open Graph, JSON-LD), Header, Footer e banner
  components/
    layout/             Estrutura: Container, Section, PageHeader, Breadcrumbs, Prose
    ui/                 Peças genéricas: Button, Card, Eyebrow, SectionHeading, Tag
    sections/           Uma seção da página inicial por arquivo (Hero, Services, ...)
    Header, Footer, ConsentBanner
    ServiceCard, ServiceGrid        Card de serviço; grade dos serviços + Auditoria em destaque
    ProcessSteps, WorkFormats       Etapas do processo; formatos de trabalho
    ContactChannels, ContactForm    Canais de contato; formulário que abre o WhatsApp
    CallToAction                    Bloco final "Vamos conversar" das páginas internas
    IntegratedSolutions             Seção Soluções integradas (#solucoes-integradas)
    TeamSection                     Seção Equipe de /quem-somos/
    ProjectCard
  scripts/analytics.ts  Consentimento e GA4 (roda no navegador)
  utils/
    url.ts              url() prefixa links internos; getCurrentState() calcula o aria-current
    contact.ts          Links de WhatsApp/Instagram, contato principal e getContactAbout(assunto)
    services.ts         getServices(), getAuditOffer(), getCombinedServices() e servicePath()
  pages/                Cada arquivo vira uma rota
    index.astro         Página inicial: só monta as seções
    servicos/index.astro    /servicos/: serviços, soluções integradas e formatos de trabalho
    servicos/[slug].astro   /servicos/<nome>/: uma página por arquivo de content/services
    quem-somos.astro    /quem-somos/
    contato.astro       /contato/
    privacidade.astro   Política de privacidade
    404.astro           Página não encontrada (noindex)
    robots.txt.ts       Gera o robots.txt apontando para o sitemap
```

## Fluxo

`src/content/` e `src/data/` → componentes → páginas (`src/pages/`) → HTML estático em `dist/`.

- **Texto longo com corpo** (páginas de serviço; no futuro, artigos e cases) fica em
  `src/content/`, em Markdown, validado pelos schemas de `src/content.config.ts`. Um campo
  faltando ou errado faz o build falhar com a mensagem do problema.
- **Dados curtos** (menu, contatos, etapas, diferenciais) ficam em `src/data/*.ts`.
- Os componentes leem esses arquivos e desenham; para mudar um texto ou adicionar um item,
  edita-se o arquivo de conteúdo ou de dados.
- A coleção `services` é a única fonte dos serviços: os cards da home, `/servicos/`, as
  páginas de cada serviço e as opções do formulário leem dela. São seis serviços principais
  (`kind: 'service'`, numerados de 01 a 06) e a Auditoria Digital 55 (`kind: 'audit'`).
- O campo `combinesWith` de cada serviço lista outros serviços pelo nome do arquivo e alimenta
  o bloco "Combina com" da página do serviço. Usa `reference('services')`: um nome que não
  existe faz o build falhar.

## Componentes de layout e de interface

| Componente          | Uso                                                                                                                                                           |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `layout/Container`  | Largura máxima e margens laterais. `width="reading"` para textos longos; `as` troca a tag.                                                                    |
| `layout/Section`    | Seção de página: Container + espaçamento vertical. `id` é a âncora pública; `tone="alt"` dá a faixa de fundo alternada. `class` vai para o Container interno. |
| `layout/PageHeader` | Topo das páginas internas: etiqueta, `<h1>` e descrição opcional.                                                                                             |
| `ui/Card`           | Superfície padrão (fundo midnight, borda stroke, cantos). Padding fica com quem usa.                                                                          |
| `ui/Eyebrow`        | Etiqueta mono ciano acima de títulos.                                                                                                                         |
| `ui/SectionHeading` | Etiqueta + `<h2>` + descrição das seções.                                                                                                                     |
| `ui/Button`         | Link com aparência de botão (`primary`/`secondary`), com `event` para analytics.                                                                              |
| `ui/Tag`            | Etiqueta pequena com borda (detalhes técnicos, status).                                                                                                       |

## Estilos

- **Tokens** no bloco `@theme` de `global.css`: `--color-deep-black`, `--color-midnight`,
  `--color-surface`, `--color-cyan`, `--color-violet`, `--color-pink`, `--color-lavender`,
  `--color-ice`, `--color-muted`, `--color-stroke` (bordas de cards e controles, contraste 3:1)
  e as fontes `--font-display`, `--font-sans`, `--font-mono`.
  Cada token vira classes (`bg-midnight`, `text-cyan`, `border-stroke`, `font-display`...).
- **Fontes:** importadas do Fontsource em `global.css`. O `BaseLayout` pré-carrega o arquivo
  latino de cada uma (`<link rel="preload">`), para que cheguem antes da primeira pintura: sem
  isso, a troca da fonte do sistema pela da marca muda a quebra de linha de títulos e da trilha
  de navegação e desloca a página (CLS). Ao trocar ou acrescentar uma fonte, atualize os imports
  `?url` no `BaseLayout`.
- **Larguras** `--container-content` (72rem) e `--container-reading` (48rem), usadas como
  `max-w-content` e `max-w-reading` pelo `Container`.
- **Gradiente da marca** em `--gradient-brand`, usado pelos utilitários
  `bg-brand-gradient`, `text-brand-gradient` e `border-brand-gradient` (decorativo).
  Botões com texto escuro usam `bg-action-gradient` (`--gradient-action`), com o violeta um pouco
  mais claro para o texto ter contraste de 4,5:1 ou mais.
- **Bordas:** `border-stroke` em cards e controles (campos, botões); `border-surface` só em
  divisórias e detalhes decorativos.
- O Tailwind só procura classes em `src/` (`source('..')` no `@import`), então texto da
  documentação não gera CSS.
- **`<style>` local** só para efeitos decorativos que o Tailwind não expressa bem
  (os brilhos e a grade do Hero: `.glow`, `.glow-cyan`, `.glow-pink`, `.grid-floor`).

## Scripts do navegador

- `Header.astro`: abre e fecha o menu do celular (`#menu-button`, `#mobile-menu`); Esc fecha
  e devolve o foco ao botão.
- `Contact.astro`: valida o formulário (`#contact-form`) e abre o WhatsApp com a mensagem pronta.
  Nada é enviado a servidor algum.
- `ConsentBanner.astro` + `scripts/analytics.ts`: banner de consentimento e carregamento do GA4.

## Decisões

- **Base path.** O site vive em `/55-Tech`; todo link interno passa por `url()`.
- **Consentimento.** O GA4 só carrega com `ga4Id` preenchido em `site.ts` **e** aceite do visitante.
  A escolha fica no `localStorage` na chave `consentimento-analytics` (valores `aceito`/`recusado`).
  Essa chave é dado persistido no navegador dos visitantes e não deve ser renomeada.
- **Eventos.** Cliques são medidos por `data-event="event_name"` (delegação em `ConsentBanner.astro`).
  Eventos atuais: `whatsapp_click`, `instagram_click`, `email_click`, `contact_form_submit`.
- **Navegação.** Itens de `navigation` (`site.ts`) têm `label` e `path`: âncora (`'/#servicos'`)
  ou página (`'/servicos/'`). O item da página aberta recebe `aria-current="page"`.
- **404** tem `noindex` e não declara canonical.
- **Páginas internas** têm trilha de navegação (`Breadcrumbs`, com JSON-LD BreadcrumbList).
  As de serviço também declaram JSON-LD `Service` pelo `structuredData` do `BaseLayout`.
- **Cards de serviço** são inteiramente clicáveis: o link fica no título e um pseudo-elemento
  cobre o card, mantendo um único link por card para leitores de tela.
- **URLs e âncoras públicas em português** (`/privacidade/`, `#servicos`, `#contato`...),
  porque são lidas por pessoas e buscadores; nomes técnicos em inglês.

## Estrutura-alvo (roteiro multipágina)

Planejada para as próximas fases, sujeita a aprovação a cada etapa:

- `src/content/` + `src/content.config.ts` (Content Collections) para blog, cases e páginas de serviço.
- Páginas: `/planos/`, `/cases/` e `/blog/`, quando houver conteúdo real (preços, clientes, artigos).
