FROM node:18 as base
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g node-gyp
RUN npm i
RUN npm i nodemon -g
COPY . .

FROM base as builder
RUN npm run build

FROM node:18 as production
WORKDIR /usr/src/app
COPY package*.json ./
COPY pm2-config.yml ./
RUN npm ci
RUN npm i pm2 -g
COPY --from=builder /usr/src/app/build ./build/


