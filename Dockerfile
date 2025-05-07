ARG NODE_VERSION=23.0.0
FROM node:${NODE_VERSION}

# Create app directory
WORKDIR /src
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
--mount=type=bind,target=/src
# USER node

# Install app dependencies
# COPY package*.json ./
COPY . .
RUN npm ci

# Bundle app source

# RUN npm ci
RUN npm run build

EXPOSE 3000

# CMD [ "npm", "run" , "start" ]