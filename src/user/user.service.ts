import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(private readonly configService: ConfigService) {}

  isAdmin(user: User): boolean {
    const admin = this.configService.get<User>('admin');
    if (user.login === admin.login && user.password === admin.password) {
      return true;
    }
    return false;
  }
}
