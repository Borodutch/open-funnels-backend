import * as Joi from 'joi';
import { join } from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TerminusModule } from '@nestjs/terminus';
import { FunnelModule } from './funnel/funnel.module';
import { AuthModule } from './auth/auth.module';
import { EventModule } from './event/event.module';
import { UserModule } from './user/user.module';
import { StatusController } from './status/status.controller';
import config from './main.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        PORT: Joi.number().default(3000),
        MONGO_URI: Joi.string().required(),
        ADMIN_LOGIN: Joi.string().required(),
        ADMIN_PASSWORD: Joi.string().required(),
      }),
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
      isGlobal: true,
      load: [config],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'documentation'),
      exclude: ['/v1*'],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('mongo.uri'),
      }),
      inject: [ConfigService],
    }),
    TerminusModule,
    FunnelModule,
    AuthModule,
    EventModule,
    UserModule,
  ],
  controllers: [StatusController],
})
export class AppModule {}
