import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from 'nestjs-pino';
import { OpenApiNestFactory } from 'nest-openapi-tools';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule, { bufferLogs: true });
//   app.useLogger(app.get(Logger));

//   await OpenApiNestFactory.configure(
//     app,
//     new DocumentBuilder()
//       .setTitle('My API')
//       .setDescription('An API to do awesome things')
//       .addBearerAuth(),
//     {
//       webServerOptions: {
//         enabled: true,
//         path: 'api-docs',
//       },
//       fileGeneratorOptions: {
//         enabled: true,
//         outputFilePath: './openapi.yaml', // or ./openapi.json
//       },
//       clientGeneratorOptions: {
//         enabled: true,
//         type: 'typescript-axios',
//         outputFolderPath: '../typescript-api-client/src',
//         additionalProperties:
//           'apiPackage=clients,modelPackage=models,withoutPrefixEnums=true,withSeparateModelsAndApi=true',
//         openApiFilePath: './openapi.yaml', // or ./openapi.json
//         skipValidation: true, // optional, false by default
//       },
//     },
//     {
//       operationIdFactory: (c: string, method: string) => method,
//     },
//   );


//   await app.listen(3000);
// }


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Tasks')
    .setDescription('The users API description')
    .setVersion('1.0')
    .addTag('tasks')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.NEST_PORT);
}


bootstrap();

