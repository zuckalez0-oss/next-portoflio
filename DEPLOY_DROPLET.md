# Deploy na Droplet com Docker, Nginx e GitHub Actions

Este fluxo foi pensado para o seu cenario atual:
- o repositorio ja esta clonado na droplet
- a aplicacao vai rodar isolada em Docker
- o Nginx da VPS fara o proxy reverso e terminacao SSL
- o deploy futuro sera automatizado pelo GitHub Actions

## Arquitetura final

```text
Internet -> Nginx (host) -> 127.0.0.1:3001 -> container Docker -> Next.js
```

O container nao fica exposto publicamente. Apenas o Nginx acessa a aplicacao via `127.0.0.1:3001`.

## 1. Preparar a droplet

Instale Docker, Compose plugin, Nginx e Certbot:

```bash
sudo apt-get update
sudo apt-get install -y docker.io docker-compose-plugin nginx certbot python3-certbot-nginx
sudo systemctl enable --now docker
sudo systemctl enable --now nginx
sudo usermod -aG docker $USER
newgrp docker
docker --version
docker compose version
nginx -v
```

## 2. Posicionar o projeto

Sugestao de caminho:

```bash
sudo mkdir -p /var/www/next-portfolio
sudo chown -R $USER:$USER /var/www/next-portfolio
git clone https://github.com/SEU_USUARIO/SEU_REPO.git /var/www/next-portfolio
cd /var/www/next-portfolio
```

Se voce ja clonou o repo em outro caminho, apenas substitua `/var/www/next-portfolio` pelos comandos equivalentes.

## 3. Subir o container pela primeira vez

```bash
cd /var/www/next-portfolio
docker compose up -d --build
docker compose ps
curl http://127.0.0.1:3001/api/health
```

Resposta esperada:

```json
{"status":"ok"}
```

## 4. Configurar o Nginx

Copie o modelo do repositorio:

```bash
sudo cp deploy/nginx-portfolio.example.conf /etc/nginx/sites-available/next-portfolio
sudo nano /etc/nginx/sites-available/next-portfolio
```

Ajuste o `server_name` se necessario. Para usar o dominio principal, deixe:
- `matribeiro.tech`
- `www.matribeiro.tech`

Ative o site:

```bash
sudo ln -s /etc/nginx/sites-available/next-portfolio /etc/nginx/sites-enabled/next-portfolio
sudo nginx -t
sudo systemctl reload nginx
```

## 5. Mudar o DNS

Hoje o dominio `matribeiro.tech` aponta para o App Platform da DigitalOcean. Quando o Nginx estiver pronto, altere os registros `A` de:
- `matribeiro.tech`
- `www.matribeiro.tech`

Para o IP da sua droplet.

Se quiser uma transicao mais segura, voce pode validar primeiro com um subdominio temporario como `portfolio.matribeiro.tech` e depois fazer o corte do dominio principal.

## 6. Gerar SSL com Let's Encrypt

Depois que o DNS propagar:

```bash
sudo certbot --nginx -d matribeiro.tech -d www.matribeiro.tech
```

Teste a renovacao automatica:

```bash
sudo certbot renew --dry-run
```

## 7. Configurar CI/CD no GitHub

Crie estes secrets no repositorio GitHub:

- `DROPLET_HOST`: IP ou dominio da droplet
- `DROPLET_USERNAME`: usuario SSH usado no deploy
- `DROPLET_SSH_KEY`: chave privada da maquina que o GitHub Actions vai usar
- `DROPLET_APP_PATH`: caminho do projeto na droplet, ex. `/var/www/next-portfolio`

O workflow `deploy.yml` faz:
- `git pull` no servidor
- `docker compose up -d --build`
- limpeza simples de imagens antigas

O workflow `ci.yml` valida `lint` e `build` em todo push e pull request.

## 8. Operacao do dia a dia

```bash
cd /var/www/next-portfolio
docker compose ps
docker compose logs -f
docker compose up -d --build
docker compose restart
docker compose down
```

Status do proxy:

```bash
sudo systemctl status nginx
sudo nginx -t
```

## 9. Rollback simples

Se um deploy quebrar:

```bash
cd /var/www/next-portfolio
git log --oneline -5
git checkout HASH_DO_COMMIT_ESTAVEL
docker compose up -d --build
```

Depois disso, fixe a branch novamente no commit correto quando decidir seguir.
