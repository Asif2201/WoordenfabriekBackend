FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . ./

EXPOSE 8080

ENV HOST=0.0.0.0
ENV PORT=8080

RUN yarn start

CMD [ "yarn", "start" ]
