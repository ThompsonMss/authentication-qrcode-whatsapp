FROM node:16

WORKDIR /usr/src/app

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

COPY . .

RUN npm install


VOLUME [ "/usr/src/app/node_modules" ]

EXPOSE 5173

ENTRYPOINT ["/entrypoint.sh"]

CMD [ "npm", "run", "dev" ]