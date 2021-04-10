import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
import { ITokenPayload } from './interfaces/token-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(loginDto: LoginDto): Promise<{ access_token: string }> {
    const isAdmin = this.userService.isAdmin(loginDto);
    if (!isAdmin) {
      throw new UnauthorizedException();
    }
    const payload: ITokenPayload = { username: loginDto.login };
    return { access_token: this.jwtService.sign(payload) };
  }
}
