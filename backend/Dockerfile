FROM node:18.16.1
WORKDIR /app
COPY package.json wait-for.sh startup.sh ./
RUN apt-get -q update && apt-get -qy install netcat-traditional && npm install
COPY . .
RUN cp .env.example .env
EXPOSE 3333
RUN chmod +x ./wait-for.sh ./startup.sh
CMD ["npm", "start"]
