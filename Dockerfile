# ! Important
# Since we rely in our code to environment variables for e.g. db connection
# this can only be run successfully with docker-compose file

# Specify node version and choose image
# also name our image as development (can be anything)
ARG NODE_VERSION=23.0.0
FROM node:${NODE_VERSION} AS development
ENV NODE_ENV=dev
# Specify our working directory, this is in our container/in our image
WORKDIR /src

# Copy the package.jsons from host to container
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Here we install all the deps
RUN npm install

# Bundle app source / copy all other files
COPY . .

# Build the app to the /dist folder
RUN npm run build
CMD [ "npm", "run","start:dev" ]

FROM development AS test
ENV NODE_ENV=test
CMD [ "npm", "run", "test" ]

FROM test AS test-cov
CMD [ "npm", "run", "test:cov" ]
################
## PRODUCTION ##
################
# Build another image named production
FROM node:${NODE_VERSION}  AS production

# Set node env to prod
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Set Working Directory
WORKDIR /src

# Copy all from development stage
COPY --from=development /src/ .

EXPOSE 3000

# Run app
CMD [ "node", "dist/main" ]

# Example Commands to build and run the dockerfile
# docker build -t thomas-nest .
# docker run thomas-nest -e JWT_SECRET='1hard_to_guess_secret7890a'