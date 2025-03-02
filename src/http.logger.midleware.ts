import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class HttpLoggerMiddleware implements NestMiddleware {
  private logger: Logger = new Logger('NestApplication');

  use(request: Request, response: Response, next: NextFunction): void {
    const { method, query: queryParams, baseUrl: path } = request;

    // logging request
    setImmediate(async () => {
      const requestLog = {
        method,
        path,
        queryParams,
        body: request.body,
      };
      this.logger.log(`Request: ${JSON.stringify(requestLog)}`);
    });

    // extracting response's body
    let body = {};
    const chunks = [];
    const oldEnd = response.end;
    response.end = (chunk) => {
      if (chunk) {
        chunks.push(Buffer.from(chunk));
      }
      body = Buffer.concat(chunks).toString('utf8');
      return oldEnd.call(response, body);
    };

    // logging response
    response.on('finish', async () => {
      return setTimeout(() => {
        const responseLog = {
          method,
          path,
          statusCode: response.statusCode,
          body,
        };
        this.logger.log(`Response: ${JSON.stringify(responseLog)}`);
      }, 0);
    });

    next();
  }
}
