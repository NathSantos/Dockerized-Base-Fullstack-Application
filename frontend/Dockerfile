FROM node:18.16.1
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN cp .env.example .env    
EXPOSE 3000
CMD ["npm", "run", "dev"]