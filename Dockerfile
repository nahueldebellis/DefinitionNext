#Node js client
FROM node:latest

MAINTAINER debellisnahuel@gmail.com

WORKDIR /app

COPY package.json /

RUN npm install

COPY . /