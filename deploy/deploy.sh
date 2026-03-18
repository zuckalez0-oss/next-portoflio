#!/usr/bin/env bash

set -euo pipefail

APP_DIR="${APP_DIR:-/var/www/next-portfolio}"

cd "$APP_DIR"
git fetch --all
git checkout main
git pull origin main
docker compose up -d --build
docker image prune -f
