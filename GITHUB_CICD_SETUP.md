# GitHub Actions CI/CD

Este projeto ja esta preparado para:
- validar `lint` e `build` em toda alteracao relevante
- fazer deploy automatico na droplet quando a `main` passar no CI

## Workflows

- `.github/workflows/ci.yml`
  - roda em `push` para `main`
  - roda em `pull_request`
  - executa `npm ci`, `npm run lint` e `npm run build`

- `.github/workflows/deploy.yml`
  - roda automaticamente depois que o workflow `CI` terminar com sucesso na branch `main`
  - tambem pode ser disparado manualmente em `Actions > Deploy Portfolio > Run workflow`
  - conecta por SSH na droplet e executa:
    - `git fetch --all`
    - `git checkout main`
    - `git pull origin main`
    - `docker compose up -d --build`
    - `docker image prune -f`

## Secrets necessarios

Crie estes secrets em `GitHub > Repository > Settings > Secrets and variables > Actions`:

- `DROPLET_HOST`
  - IP publico da droplet
  - exemplo: `138.197.78.236`

- `DROPLET_PORT`
  - porta SSH
  - normalmente `22`

- `DROPLET_USERNAME`
  - usuario usado para deploy
  - exemplo: `root`

- `DROPLET_SSH_KEY`
  - chave privada SSH em formato OpenSSH
  - cole o conteudo completo, incluindo:
    - `-----BEGIN OPENSSH PRIVATE KEY-----`
    - `-----END OPENSSH PRIVATE KEY-----`

- `DROPLET_APP_PATH`
  - caminho do projeto na droplet
  - exemplo: `/root/next-portoflio`

## Como gerar uma chave dedicada para o GitHub Actions

Na sua maquina local:

```bash
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/github_actions_droplet
```

Isso gera:
- chave privada: `~/.ssh/github_actions_droplet`
- chave publica: `~/.ssh/github_actions_droplet.pub`

## Como autorizar a chave na droplet

Na droplet, adicione a chave publica em `~/.ssh/authorized_keys` do usuario que fara o deploy:

```bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh
cat >> ~/.ssh/authorized_keys
```

Cole a chave publica e finalize com `Ctrl+D`.

Depois ajuste permissões:

```bash
chmod 600 ~/.ssh/authorized_keys
```

## Como cadastrar a chave privada no GitHub

Abra o arquivo da chave privada local e copie o conteudo inteiro:

```bash
cat ~/.ssh/github_actions_droplet
```

Cole esse conteudo no secret `DROPLET_SSH_KEY`.

## Teste do pipeline

1. Faça uma alteracao pequena no projeto.
2. Rode:

```bash
git add .
git commit -m "test: ci cd"
git push origin main
```

3. No GitHub:
   - confira o workflow `CI`
   - depois confira o workflow `Deploy Portfolio`

4. Na droplet, valide:

```bash
cd /root/next-portoflio
docker compose ps
docker compose logs --tail=100
curl http://127.0.0.1:3010/api/health
```

## Observacoes

- se o deploy falhar por permissao SSH, revise `authorized_keys`, usuario e secret da chave privada
- se o deploy falhar por `docker compose`, confirme que o plugin v2 esta disponivel na droplet
- se o repositorio estiver em outro caminho, ajuste `DROPLET_APP_PATH`
