# Publicação

## Como funciona

O workflow `.github/workflows/deploy.yml` roda a cada push na `main` (e manualmente pela aba
Actions, em "Run workflow"):

1. `npm ci` — instala as dependências exatas do `package-lock.json`.
2. `npm run check` — erros de TypeScript e Astro bloqueiam a publicação.
3. `npm run format:check` — arquivos fora do padrão do Prettier bloqueiam a publicação.
4. `npm run build` — gera `dist/`.
5. `npm run check:links` — um link interno quebrado bloqueia a publicação.
6. Envia `dist/` ao GitHub Pages.

Push em outras branches não publica nada.

## Acompanhar

- Status: aba **Actions** do repositório. Verde = publicado em
  https://enricomendes55.github.io/55-Tech/ (pode levar um ou dois minutos para aparecer).
- Configuração do Pages: Settings → Pages, com "Source" em **GitHub Actions**.

## Se falhar

Abra a execução com X vermelho e veja o passo que falhou.

| Passo          | Causa comum                                                       | O que fazer                                              |
| -------------- | ----------------------------------------------------------------- | -------------------------------------------------------- |
| `npm ci`       | `package-lock.json` desatualizado                                 | Rodar `npm install` localmente e commitar o lock         |
| `check`        | Erro de tipo ou import quebrado                                   | Rodar `npm run check` localmente e corrigir              |
| `format:check` | Arquivo não formatado                                             | Rodar `npm run format` e commitar                        |
| `build`        | Erro em componente ou página, ou campo inválido em `src/content/` | Rodar `npm run build` localmente e ler a mensagem        |
| `check:links`  | Link ou âncora que não existe                                     | Rodar `npm run build` e `npm run check:links` localmente |
| deploy         | Pages desativado ou permissão                                     | Conferir Settings → Pages                                |

Enquanto o novo deploy não passa, o site continua com a última versão publicada.

## Base path

O site vive em `https://enricomendes55.github.io/55-Tech/`, definido em `astro.config.mjs`
(`site` + `base`). Por isso todo link interno usa `url()` de `src/utils/url.ts`.

## Domínio próprio

1. Em `astro.config.mjs`, troque `site` pelo domínio e remova a linha `base`.
2. Crie `public/CNAME` contendo apenas o domínio (ex.: `55tech.com.br`).
3. Configure o DNS no registrador conforme a documentação do GitHub Pages e informe o domínio
   em Settings → Pages; ative "Enforce HTTPS".

Os links feitos com `url()` se ajustam sozinhos.

## robots.txt

Gerado no build por `src/pages/robots.txt.ts`, apontando para o sitemap. Enquanto o site estiver
em `github.io/55-Tech`, os buscadores não o leem (só procuram na raiz do domínio); com domínio
próprio, passa a valer. Até lá, o sitemap
pode ser enviado manualmente no Google Search Console.
