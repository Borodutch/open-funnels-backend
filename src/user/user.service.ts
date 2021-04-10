import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LoginDto } from 'src/auth/dto/login.dto';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(private readonly configService: ConfigService) {}

  isAdmin(loginDto: LoginDto): boolean {
    const admin = this.configService.get<IUser>('admin');
    if (
      loginDto.login === admin.login &&
      loginDto.password === admin.password
    ) {
      return true;
    }
    return false;
  }
}
