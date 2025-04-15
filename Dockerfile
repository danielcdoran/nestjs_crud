ARG NODE_VERSION=23.0.0
FROM node:${NODE_VERSION}

# Create app directory
WORKDIR /src
# USER node

# Install app dependencies
# COPY package*.json ./
COPY . .
RUN npm install --force

# Bundle app source

# RUN npm ci
RUN npm run build

EXPOSE 3000

# CMD [ "npm", "run" , "start:prod" ]