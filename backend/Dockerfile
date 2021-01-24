FROM node:11.0.0

WORKDIR /app

RUN npm i -g @feathersjs/cli sequelize-cli eslint

COPY package.json package-lock.json ./

RUN npm install

COPY . ./

EXPOSE 3030

CMD [ "npm", "run", "dev" ]