import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserService } from './user.service';

@Module({
  imports: [ConfigModule],
  providers: [UserService],
})
export class UserModule {}
