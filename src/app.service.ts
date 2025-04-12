import { Injectable , Logger } from '@nestjs/common';
// import { PinoLogger } from 'nestjs-pino';

@Injectable()
export class AppService {
  private logger = new Logger(AppService.name) ;
  getHello(): string {
    this.logger.warn('in Hello World');
    return 'Hello World!';
  }
}
