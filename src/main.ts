import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WinstonModule } from 'nest-winston';
import { CustomLoggerService } from './custom-logger';
// import { Logger } from 'nestjs-pino';
// import { OpenApiNestFactory } from 'nest-openapi-tools';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const customLoggerService = new CustomLoggerService();
  const app = await NestFactory.create(AppModule, {
    logger: new CustomLoggerService(),
  });

  const config = new DocumentBuilder()
    .setTitle('Tasks')
    .setDescription('The users API description')
    .setVersion('1.0')
    .addTag('tasks')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(parseInt(process.env.NEST_PORT || '' ));
}


bootstrap();

