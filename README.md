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

> **Windows:** se o PowerShell mostrar "a execução de scripts foi desabilitada", use `npm.cmd install` e `npm.cmd run dev`, ou abra o terminal como **Command Prompt**.

## Estrutura

```
src/
├── data/site.ts            # TODO o conteúdo do site, tipado (serviços, cases, perguntas…)
├── lib/web3forms.ts        # envio do diagnóstico por e-mail
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
- **Logos de clientes / imagens dos cases:** arquivos em `public/images/`, referenciados em `clientLogos` e `cases` no `site.ts`.
- **Logo:** `src/components/Logo.astro` e `public/favicon.svg`.

## Envio do diagnóstico por e-mail

Quando alguém conclui o diagnóstico, as respostas (desafio, estágio, prazo, porte) e o nome/e-mail da pessoa são enviados por e-mail usando o [Web3Forms](https://web3forms.com), um serviço gratuito que dispensa backend.

**Enquanto a chave não for configurada, o envio é simulado:** o site mostra a tela de "Recebemos seu diagnóstico!", mas nenhum e-mail é enviado. No console do navegador aparece o aviso `Web3Forms não configurado`.

### Como ativar

1. **Gerar a chave.** Acesse [web3forms.com](https://web3forms.com), digite **o e-mail que deve receber os diagnósticos** (o e-mail do responsável pela Bitzar) e clique em **Create Access Key**. A chave chega nesse e-mail, no formato `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`.
2. **Criar o arquivo `.env`.** Na raiz do projeto, copie o arquivo de exemplo:
   ```bash
   cp .env.example .env          # Linux / macOS
   copy .env.example .env        # Windows
   ```
3. **Colar a chave.** Abra o `.env` e troque `INSIRA_A_CHAVE_DO_WEB3FORMS` pela chave recebida:
   ```
   PUBLIC_WEB3FORMS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   ```
4. **Reiniciar o servidor.** O Astro só lê o `.env` ao iniciar: pare com `Ctrl + C` e rode `npm run dev` de novo.
5. **Testar.** Faça o diagnóstico no site e confira a caixa de entrada (e o spam) do e-mail cadastrado.

### Observações

- O `.env` está no `.gitignore` e **não vai para o GitHub**. O `.env.example` vai, só com o texto de exemplo.
- A chave do Web3Forms não é uma senha: ela só permite enviar mensagens para o e-mail cadastrado, e o serviço recomenda usá-la no navegador. Mesmo assim, ela fica fora do repositório por organização.
- Ao publicar o site (Vercel, Netlify etc.), cadastre `PUBLIC_WEB3FORMS_KEY` nas variáveis de ambiente da plataforma, porque o `.env` local não é enviado.
- O formulário tem um campo invisível anti-spam (`botcheck`): envios de robôs que o preenchem são descartados pelo Web3Forms.
- O e-mail chega com o assunto **"Novo diagnóstico pelo site — Nome da pessoa"**, e **Responder** vai direto para o e-mail de quem preencheu.

## Outros comportamentos

- **Seletor de idioma (header):** troca a sigla, atualiza `<html lang>`, salva a escolha no `localStorage` e dispara o evento `bitzar:language-change`. A tradução do conteúdo ainda não existe; o caminho natural é usar o [i18n do Astro](https://docs.astro.build/en/guides/internationalization/) com rotas `/en/` e `/es/`.
- **Diagnóstico:** estado em TypeScript, botão Voltar, barra de progresso, validação de nome/e-mail, estado "Enviando…", mensagem de erro se o envio falhar e tela de confirmação.
- **Mobile:** abaixo de 960px o menu vira um botão hambúrguer.