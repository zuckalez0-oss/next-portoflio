# Guia de Deploy - DigitalOcean App Platform

Este documento detalha o processo de deploy do portfólio no **DigitalOcean App Platform**. 
Como a aplicação utiliza Next.js, a plataforma gerencia o ambiente Node.js de forma otimizada, identificando automaticamente os scripts `build` e `start` presentes no seu `package.json`.

## Arquivos de Build e Start

Você não precisa criar arquivos extras como `Dockerfile` ou scripts `.sh`. A configuração foi feita da seguinte forma:

1. **`package.json`**: Foram adicionados os requisitos do motor Node.js (`engines: { "node": ">=20.0.0" }`), garantindo que o DigitalOcean instale a versão correta para o build do Next.js.
2. **`app.yaml`** (Especificação de Aplicativo): Criamos um arquivo na raiz do projeto chamado `app.yaml` que assemelha a sua "receita" de infraestrutura, incluindo o comando de build e de execução.

## Passo a Passo do Deploy

O deploy via App Platform é guiado pelo Git (Deploy contínuo após novos commits na branch `main`).

### Opção 1: Usando o Painel do DigitalOcean (Recomendado)
1. Acesse sua conta no **DigitalOcean** e navegue até **Apps**.
2. Clique em **Create App**.
3. Selecione o provedor do código-fonte, neste caso **GitHub**.
4. Autorize o acesso ao seu repositório `zuckalez0-oss/portoflio-next`.
5. Selecione a branch `main`.
6. Na etapa de configuração, a plataforma geralmente auto-detecta que é um projeto Node.js e já preenche o `npm run build` e o `npm run start`.
7. (Opcional) Você pode revisar as configurações (instância `basic-xxs` padrão, porta HTTP `3000`).
8. Finalize a criação do App e aguarde o primeiro deploy completar.

### Opção 2: Usando a CLI do DigitalOcean (doctl) + app.yaml
Se preferir utilizar a linha de comando e o arquivo `app.yaml` fornecido:

1. Instale e autentique-se na ferramenta `doctl`.
2. No seu terminal, rodando a partir da raiz do projeto, execute:
   ```bash
   doctl apps create --spec app.yaml
   ```
3. Qualquer alteração futura na especificação pode ser atualizada com:
   ```bash
   doctl apps update <APP_ID> --spec app.yaml
   ```

## Verificação e Acompanhamento

- O build geralmente leva alguns minutos.
- Na aba **Activity** do DigitalOcean Apps, você poderá acompanhar os logs do build.
- Qualquer aviso ou erro no "npm run build" aparecerá nos *Build Logs*.
- Quando finalizado, o App fornecerá uma URL pública (como `https://portfolio-xxxx.ondigitalocean.app`) pronta para uso. 

Se posteriormente decidir adicionar um domínio customizado, vá à aba **Settings → Domains** no painel do seu App.
