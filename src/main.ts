import * as helmet from 'helmet';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('port');
  app.use(helmet());
  app.setGlobalPrefix('v1');
  await app.listen(port);
  console.log(`Open funnels backend is running on ${await app.getUrl()}`);
}

bootstrap();
