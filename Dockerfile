ARG NODE_VERSION=23.0.0
FROM node:${NODE_VERSION} AS base

# Create app directory
WORKDIR /src
FROM base AS development
# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run" , "start:dev" ]