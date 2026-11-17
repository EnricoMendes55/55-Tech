# Manutenção

## Primeira vez

```bash
npm install
npm run dev
```

O site abre em http://localhost:4321/55-Tech/ e recarrega a cada alteração.

## Tarefas comuns

**Contatos e GA4** — `src/data/site.ts`.

- `whatsapp`: só dígitos, com DDI e DDD (ex.: `5548999999999`). Vazio: os botões de contato
  levam ao Instagram e o formulário não aparece.
- `email`: vazio = não aparece no site.
- `ga4Id`: vazio = sem analytics e sem banner de cookies. Preenchido, o banner aparece e o
  Google Analytics só carrega depois que o visitante aceita.

**Editar um serviço ou a Auditoria Digital 55** — `src/data/services.ts`.

**Adicionar, editar ou remover um projeto** — `src/data/projects.ts`. Copie um objeto da lista
e altere os campos. Quando o projeto estiver no ar, use `status: 'published'` e preencha `link`:
a etiqueta "Em desenvolvimento" some e aparece "Ver projeto".

**Etapas do processo e formatos de trabalho** — `src/data/process.ts`.

**Itens do menu** — `navigation` em `src/data/site.ts`. O `anchor` é a âncora pública
(`#servicos`); mudar quebra links já compartilhados.

**Ordem das seções da página inicial** — `src/pages/index.astro`.

**Criar uma página** — `src/pages/nome.astro` usando o `BaseLayout` com `title` e
`description` (modelo: `privacidade.astro`). Fica em `/55-Tech/nome/`.
Links para ela: `url('/nome/')`.

**Medir um clique** — adicione `data-event="event_name"` (snake_case, inglês) ao link ou botão.
O evento só é enviado se o GA4 estiver ativo e o visitante tiver aceitado.

**Trocar as logos** — substitua os arquivos em `src/assets/` mantendo os nomes.
Um SVG ou PNG transparente exportado do arquivo de design dá mais nitidez que os recortes atuais.

## Padrões de nomes

| O quê                               | Idioma / formato   | Exemplo                       |
| ----------------------------------- | ------------------ | ----------------------------- |
| Componentes                         | inglês, PascalCase | `ServiceCard.astro`           |
| Arquivos de dados e utilitários     | inglês, camelCase  | `services.ts`, `contact.ts`   |
| Props, funções, variáveis, tipos    | inglês             | `eyebrow`, `getWhatsAppUrl()` |
| Classes CSS próprias, ids, `data-*` | inglês, kebab-case | `#contact-form`, `.glow-cyan` |
| Eventos de analytics                | inglês, snake_case | `whatsapp_click`              |
| URLs e âncoras públicas             | português          | `/privacidade/`, `#contato`   |
| Textos, comentários, docs, commits  | português          | "Adiciona página de cases"    |

Chaves já gravadas no navegador dos visitantes (ex.: `consentimento-analytics`) não são renomeadas.

## Antes de commitar

```bash
npm run format
```

```bash
npm run check
```

```bash
npm run build
```

- `format` reescreve os arquivos no padrão do Prettier (`format:check` só confere; é o que o CI roda).
- `check` precisa terminar com 0 erros, 0 avisos.
- Conferir no `npm run dev` em 375 px e 1280 px e navegar por teclado no que mudou.

## Git

Trabalhe numa branch (`feat/...`, `fix/...`, `chore/...`) criada da `main` atualizada.
Push na `main` publica o site, então ela só recebe trabalho revisado.
