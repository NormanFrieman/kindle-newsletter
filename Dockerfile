FROM node:15

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .
COPY --chown=node:node . .

USER node

EXPOSE 8080

CMD [ "yarn", "dev" ]