import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body(new ValidationPipe()) loginDto: LoginDto) {
    return this.authService.validateUser(loginDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getCurrentUser(@Request() req) {
    return req.user;
  }
}
