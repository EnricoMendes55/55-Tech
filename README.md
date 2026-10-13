# 55 Tech — site institucional

Site da 55 Tech, feito com [Astro](https://astro.build), TypeScript e Tailwind CSS.
Publicado em https://enricomendes55.github.io/55-Tech/ pelo GitHub Pages.

## Comandos

| Comando           | O que faz                                                      |
| ----------------- | -------------------------------------------------------------- |
| `npm install`     | Instala as dependências (só na primeira vez ou após um clone)  |
| `npm run dev`     | Abre o site em http://localhost:4321/55-Tech/ com recarga automática |
| `npm run build`   | Gera o site final na pasta `dist/`                             |
| `npm run preview` | Serve a pasta `dist/` para conferir o build                    |
| `npm run check`   | Procura erros de TypeScript nos arquivos                       |

## Publicação

Todo `git push` na branch `main` dispara o workflow `.github/workflows/deploy.yml`,
que roda `npm run build` e publica a pasta `dist/` no GitHub Pages. Não há passo manual.

## Como o projeto está organizado

```
astro.config.mjs      Configuração do Astro: endereço do site, Tailwind e sitemap
public/               Arquivos copiados como estão (favicon, imagem de compartilhamento)
src/
  assets/             Logos. O Astro otimiza essas imagens no build
  styles/global.css   Tailwind + cores, fontes e gradiente da marca
  data/               CONTEÚDO do site (textos, serviços, projetos, contatos)
  layouts/            BaseLayout: a moldura comum a todas as páginas
  components/
    ui/               Peças pequenas e reutilizáveis (Button, Tag, SectionHeading)
    sections/         Uma seção da página inicial por arquivo
    ...               Header, Footer, cards e banner de consentimento
  scripts/            TypeScript que roda no navegador (analytics)
  utils/              Funções auxiliares (links internos, links de contato)
  pages/              Cada arquivo aqui vira uma página do site
```

### As ideias por trás da estrutura

- **Conteúdo separado do layout.** Os textos ficam em `src/data/*.ts`, como listas de
  objetos. Os componentes só leem essas listas e desenham. Para mudar um texto ou
  adicionar um card, você edita o arquivo de dados e não mexe em HTML.
- **Um arquivo `.astro` tem duas partes.** Entre os `---` do topo fica o código que roda
  no build (imports, variáveis). Abaixo fica o HTML. O resultado é HTML estático: nenhum
  framework JavaScript é enviado ao visitante.
- **`<script>` dentro de um componente** é o único JavaScript que vai para o navegador
  (menu do celular, formulário, consentimento).
- **Cores e fontes em um só lugar.** O bloco `@theme` de `global.css` define os tokens.
  `--color-cyan` vira as classes `text-cyan`, `bg-cyan`, `border-cyan` e assim por diante.
- **Links internos passam por `url()`** (`src/utils/url.ts`), porque o site vive em uma
  subpasta (`/55-Tech`). Escreva `url('/privacidade/')`, nunca `/privacidade/` direto.

## Tarefas comuns

**Informar WhatsApp, e-mail ou GA4** — `src/data/site.ts`.
- `whatsapp`: só dígitos, com DDI e DDD (ex.: `5551999999999`). Enquanto estiver vazio,
  os botões de contato levam ao Instagram e o formulário não aparece.
- `email`: vazio = não aparece no site.
- `ga4Id`: vazio = sem analytics e sem banner de cookies. Preenchido, o banner aparece
  e o Google Analytics só carrega depois que o visitante aceita.

**Editar um serviço** — `src/data/servicos.ts`.

**Adicionar, editar ou remover um projeto** — `src/data/projetos.ts`. Copie um objeto da
lista e altere os campos. Quando o projeto estiver no ar, use `status: 'publicado'` e
preencha `link`: a etiqueta "Em desenvolvimento" some e aparece "Ver projeto".

**Mudar a ordem das seções ou remover uma** — `src/pages/index.astro`.

**Criar uma página nova** — crie `src/pages/nome.astro` usando o `BaseLayout`
(veja `privacidade.astro` como modelo). Ela fica disponível em `/55-Tech/nome/`.

**Medir um clique novo** — adicione `data-evento="nome_do_evento"` ao link ou botão.

**Trocar as logos** — substitua os arquivos em `src/assets/` mantendo os nomes.
As atuais foram recortadas das imagens originais; um SVG ou PNG transparente exportado
do arquivo de design terá mais nitidez.

## Usar domínio próprio

1. Em `astro.config.mjs`, troque `site` pelo domínio e remova a linha `base`.
2. Crie o arquivo `public/CNAME` contendo apenas o domínio.
3. Configure o DNS e o domínio em Settings → Pages no GitHub.

Observação: enquanto o site estiver em `github.io/55-Tech`, o `robots.txt` não é lido
pelos buscadores (eles só procuram na raiz do domínio). Com domínio próprio, passa a valer.
