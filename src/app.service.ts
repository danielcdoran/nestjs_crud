import { Injectable } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';

@Injectable()
export class AppService {
  constructor(private readonly logger: PinoLogger) {
    // Optionally you can set context for logger in constructor or ...
    this.logger.setContext(AppService.name);
  }
  getHello(): string {
    this.logger.info('in Hello World');
    return 'Hello World!';
  }
}
