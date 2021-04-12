import * as helmet from 'helmet';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//TODO: Implement all controllers JWT-auth
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: true });
  const configService = app.get(ConfigService);
  const port = configService.get('port');
  app.use(
    helmet({
      contentSecurityPolicy: false,
    }),
  );
  app.setGlobalPrefix('api');
  await app.listen(port);
  console.log(`Open funnels backend is running on ${await app.getUrl()}`);
}

bootstrap();
