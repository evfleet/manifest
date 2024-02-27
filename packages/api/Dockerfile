FROM node:20.11.1

WORKDIR /app

RUN npm install -g pnpm

COPY package.json . 

RUN pnpm install

COPY . .

EXPOSE 8080

CMD ["pnpm", "run", "dev"]