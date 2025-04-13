<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


curl --location 'localhost:3000/users' 


    curl --location --request POST 'http://localhost:3000/users' \
--header 'Content-Type: application/json' \
--data '    {
        "name": "namevalue2",
        "email": "eamilvalue2"
    }'   
 

curl -d '{"name":"nameval1", "email":"emailval2"}' -H "Content-Type: application/json" -X POST http://localhost:3000/users


    docker logs c8f0819a40ed 


$Form = @{ 
name  = 'John' 
email = 'Doe' 
}

$json=convertto-json($form)

 Invoke-RestMethod 'http://localhost:3000/users' -Method POST -Body $json  -ContentType 'application/json'
 
This works for POST. Note I have to convert it to Json

Remove all images
docker images -a -q | % { docker image rm $_ -f }
docker ps -q | % { docker stop $_ }


adding pino logger https://github.com/iamolegga/nestjs-pino/blob/master/README.md

git config --global core.autocrlf false


OpenAPI tools

https://www.npmjs.com/package/nest-openapi-tools
https://openapi-generator.tech/docs/generators/typescript-nestjs/
https://arnaudcortisse.com/blog/trying-out-nestjs-part-1/

  This outputs JSON
  http://localhost:3000/api-json
  
  This is saved using https://editor.swagger.io/ from https://github.com/arnaud-cortisse/trying-out-nestjs-part-3.git 

https://arnaudcortisse.com/blog/trying-out-nestjs-part-1/
      
      https://www.npmjs.com/package/nest-openapi-tools

https://www.npmjs.com/package/@fresha/openapi-codegen-server-nestjs
docker

In terminal in VSCode
docker compose exec nestapp sh
docker compose exec nestapp bash
Removing command: npm run start will mean that nestapp does not appear. If we then add in command: tail -F really that means we can attach to the nestapp service (docker compose exec nestapp bash) and run the application
or add     tty: yes instead of tail and it works
exit

https://jestjs.io/docs/getting-started
https://www.testim.io/blog/supertest-how-to-test-apis-like-a-pro/

or use https://github.com/v-checha/nestjs-template.git


/src/src/app.controller.spec.ts failed becuase
Nest can't resolve dependencies of the PinoLogger (?). Please make sure that the argument "pino-params" at index [0] is available in the RootTestModule context.
Chnaged to winston and found working sample


https://www.typescriptlang.org/tsconfig/#strictNullChecks