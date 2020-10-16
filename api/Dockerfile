FROM node:12.16.1-alpine3.9

RUN \
  apk add --update --no-cache git openssh-client python3 \
  && npm install -g nodemon

WORKDIR /usr/src/app

COPY package.json .

EXPOSE 3993