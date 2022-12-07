FROM node:17.0.1-bullseye-slim as builder

RUN mkdir -p /app
WORKDIR /app

RUN npm install -g @angular/cli@latest

COPY package.json package-lock.json ./

RUN npm ci
COPY . /app

RUN npm run build --prod

CMD ["ng", "serve", "--host", "0.0.0.0"]

FROM builder as dev-envs

# install Docker tools (cli, buildx, compose)
FROM nginx:1.17.1-alpine
COPY /dist/encoder-app /usr/share/ngix/html
CMD ["ng", "serve", "--host", "0.0.0.0"]