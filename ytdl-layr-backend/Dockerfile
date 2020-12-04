# Using the alpine variant of node
FROM node:alpine

# Updating system and Installing youtube-dl
RUN apk update
RUN apk upgrade
RUN apk add youtube-dl

# Installing app dependencys
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

# Bundle app source
copy . .
EXPOSE 3000

# Running app
CMD ["npm", "start"]