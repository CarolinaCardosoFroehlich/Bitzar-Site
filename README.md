# Bitzar — site institucional

Protótipo do site da Bitzar Solutions feito com **Astro 7** e **TypeScript** (modo `strict`), sem frameworks de UI: componentes `.astro`, CSS escopado e scripts em TS.

## Como rodar

Requer Node.js 22 ou mais recente.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # astro check (tipos) + build estático em dist/
npm run preview   # serve o build
```

## Estrutura

```
src/
├── data/site.ts            # TODO o conteúdo do site, tipado (serviços, cases, perguntas…)
├── styles/global.css       # tokens de cor/tipografia e classes compartilhadas
├── layouts/BaseLayout.astro
├── pages/index.astro       # monta a home com as seções
└── components/
    ├── Header.astro        # menu, seletor de idioma, menu mobile
    ├── Hero.astro
    ├── Clients.astro
    ├── Services.astro
    ├── About.astro
    ├── HowWeWork.astro
    ├── Cases.astro
    ├── Diagnostic.astro    # quiz de 4 perguntas + resumo + formulário
    ├── Footer.astro
    ├── Logo.astro          # logo provisório
    └── Icon.astro          # ícones SVG
```

## Onde mexer

- **Textos, serviços, cases, perguntas do diagnóstico:** `src/data/site.ts`. Tudo que está entre `[colchetes]` é placeholder para trocar por dados reais.
- **Cores e fontes:** variáveis no topo de `src/styles/global.css` (`--navy`, `--accent`…).
- **Logos de clientes / imagens dos cases:** coloque os arquivos em `public/` e preencha `src` em `clientLogos` ou `image` em `cases`.
- **Logo:** `src/components/Logo.astro` e `public/favicon.svg`.

## Comportamentos

- **Seletor de idioma (header):** troca a sigla, atualiza `<html lang>`, salva a escolha no `localStorage` e dispara o evento `bitzar:language-change`. A tradução do conteúdo ainda não existe; o caminho natural é usar o [i18n do Astro](https://docs.astro.build/en/guides/internationalization/) com rotas `/en/` e `/es/`.
- **Diagnóstico:** estado em TypeScript, botão Voltar, barra de progresso, validação de nome/e-mail e tela de confirmação. O envio só faz `console.info` do payload; para enviar de verdade, troque esse trecho em `Diagnostic.astro` por um `fetch` para uma API ou serviço de formulário.
- **Mobile:** abaixo de 960px o menu vira um botão hambúrguer.
