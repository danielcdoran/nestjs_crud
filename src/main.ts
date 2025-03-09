import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from 'nestjs-pino';
import { OpenApiNestFactory } from 'nest-openapi-tools';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.useLogger(app.get(Logger));

  await OpenApiNestFactory.configure(
    app,
    new DocumentBuilder()
      .setTitle('My API')
      .setDescription('An API to do awesome things')
      .addBearerAuth(),
    {
      webServerOptions: {
        enabled: true,
        path: 'api-docs',
      },
      fileGeneratorOptions: {
        enabled: true,
        outputFilePath: './openapi.yaml', // or ./openapi.json
      },
      clientGeneratorOptions: {
        enabled: true,
        type: 'typescript-axios',
        outputFolderPath: '../typescript-api-client/src',
        additionalProperties:
          'apiPackage=clients,modelPackage=models,withoutPrefixEnums=true,withSeparateModelsAndApi=true',
        openApiFilePath: './openapi.yaml', // or ./openapi.json
        skipValidation: true, // optional, false by default
      },
    },
    {
      operationIdFactory: (c: string, method: string) => method,
    },
  );


  await app.listen(3000);
}
bootstrap();

