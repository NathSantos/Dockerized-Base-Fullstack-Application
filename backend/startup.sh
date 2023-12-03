#!/bin/sh

# Entrar no diretório src
cd /app/src

# Executar o comando do sequelize-cli para migrações
npx sequelize-cli db:migrate

# Executar o comando do sequelize-cli para seeders
npx sequelize-cli db:seed:all

# Executar o serviço
npm start