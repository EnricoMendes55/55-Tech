# 55 Tech — padrões do projeto

Site institucional da 55 Tech: Astro + TypeScript + Tailwind CSS, gerado como site estático
e publicado no GitHub Pages pelo GitHub Actions (todo push na `main` publica).
Documentação detalhada em `docs/`: architecture.md, maintenance.md, deployment.md.

## Idioma

- Código em inglês: nomes de arquivos, pastas, componentes, props, funções, variáveis,
  tipos, classes CSS próprias, ids, atributos data-\* e nomes de eventos de analytics.
- Português do Brasil: textos exibidos no site, URLs públicas (/servicos, /quem-somos,
  âncoras como #contato), documentação, comentários e mensagens de commit.

## Comandos

- `npm run dev` — desenvolvimento em http://localhost:4321/55-Tech/
- `npm run check` — erros de TypeScript e Astro
- `npm run format` / `npm run format:check` — Prettier
- `npm run build` / `npm run preview` — build de produção e conferência local

## Onde cada coisa vive

- Texto longo com corpo (artigos, cases, páginas de serviço) → `src/content/` (Markdown/MDX),
  validado pelos schemas de `src/content.config.ts`.
- Dados curtos e estruturados (menu, planos, contatos, etapas) → `src/data/*.ts`, tipados.
- Componentes não contêm texto comercial: recebem conteúdo por props ou leem de data/content.
  Exceção: rótulos de interface ("Enviar", "Abrir menu").
- Páginas (`src/pages/`) só montam layout + seções; sem regra de negócio.
- Lógica reutilizável → `src/utils/` (build) ou `src/scripts/` (navegador).

## Componentes

- Um componente, uma responsabilidade. Acima de ~150 linhas, avaliar divisão.
- Reutilizar antes de criar: ver `src/components/ui/` e `src/components/layout/` (quando existir).
- Criar abstração só quando o mesmo padrão aparecer em 3 lugares ou mais.
- Props tipadas com `interface Props`; nomes de props em inglês.
- Sem React. Interatividade com `<script>` em TypeScript. React só com aprovação explícita
  e quando um script simples não resolver.

## Estilo

- Tailwind primeiro. Cores, fontes e gradientes só pelos tokens de `src/styles/global.css`.
- Proibido: hex/rgb soltos em componentes, CSS-in-JS, LESS/SASS.
- `<style>` local só para o que o Tailwind não expressa bem (efeitos decorativos).
- Contraste mínimo: texto 4,5:1 (3:1 para texto grande); bordas de controles 3:1.
- A identidade visual não muda sem aprovação.

## Links e caminhos

- Links internos sempre com `url()` de `src/utils/url.ts` (o site vive em `/55-Tech`).
- Links externos com `target="_blank"` levam `rel="noopener noreferrer"`.

## SEO, acessibilidade e performance (em toda página nova)

- Título e descrição únicos, passados ao layout.
- Um único `<h1>`, hierarquia de títulos sem pular níveis.
- Imagens via `astro:assets`, com `alt` (vazio se decorativa).
- Teclado: todo controle alcançável, com foco visível e nome acessível.
- Sem JavaScript desnecessário; nada de bibliotecas para o que o navegador já faz.

## Analytics e privacidade

- Nada de rastreamento sem consentimento: GA4 só carrega com `ga4Id` preenchido + aceite.
- Eventos de clique pelo atributo `data-event="event_name"` (snake_case, em inglês).

## Conteúdo

- Não alterar textos comerciais sem aprovação.
- Não inventar clientes, depoimentos, números ou resultados; projetos conceituais
  são identificados como tal.
- SEO e analytics são trabalho mensurável, nunca garantia de posição ou vendas.

## Dependências

- Não instalar nada sem justificar (o que resolve, por que não dá sem ela) e sem aprovação.

## Dados persistidos

- Não renomear chaves de localStorage, cookies ou nomes já gravados por visitantes só por
  padronização. Exemplo: `consentimento-analytics` fica como está. Se houver motivo técnico
  real, apresentar antes uma estratégia de migração.

## Git

- Trabalho em branch própria (ex.: `chore/...`, `feat/...`), criada da `main` atualizada.
- Nada vai para a `main` sem aprovação: push na `main` publica o site.

## Fluxo de trabalho

- Antes de cada fase: arquivos afetados, riscos e critérios de aceitação, para aprovação.
- Commits pequenos, mensagem em português no imperativo ("Adiciona página de cases").
- Depois de cada implementação: arquivos modificados, testes executados e como manter.

## Antes de concluir uma tarefa

1. `npm run check`, `npm run format:check` e `npm run build` sem erros ou avisos.
2. Conferir em 375 px e 1280 px; navegar por teclado nas partes alteradas.
3. Nenhum link interno quebrado; nenhum texto comercial alterado sem aprovação.
4. Atualizar `docs/` se a mudança alterar estrutura, manutenção ou publicação.
