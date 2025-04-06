FROM node:23-alpine

WORKDIR /app

COPY package.json .

RUN npm install
RUN npm update

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "host"]

