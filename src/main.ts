import * as helmet from 'helmet';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule, {
      logger: false,
      cors: true,
    });
    const configService = app.get(ConfigService);
    const port = configService.get('port');
    app.use(
      helmet({
        contentSecurityPolicy: false,
      }),
    );
    app.setGlobalPrefix('api');
    await app.listen(port);
    console.log(
      '\x1b[1m\x1b[42m\x1b[37m Open funnels',
      '\x1b[0m\x1b[36m started:',
      '\x1b[0mbackend is running on',
      `\x1b[1m${await app.getUrl()}\x1b[0m`,
    );
  } catch (error) {
    console.log(error);
  }
}

bootstrap();
