FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm install

VOLUME [ "/usr/src/app/node_modules" ]

EXPOSE 4000

CMD [ "npm", "start" ]