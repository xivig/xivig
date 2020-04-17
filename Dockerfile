FROM node:12.16.2

WORKDIR /usr/src
COPY package.json .
RUN npm install gulp gulp-cli webpack webpack-cli -g && npm install

EXPOSE 8080
CMD [ "npm", "build" ]

COPY . .