import { AuthService } from './auth.service';
import { Controller, Get, HttpCode, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @HttpCode(200)
  @Post('login')
  login() {
    return this.authService.login();
  }
  @HttpCode(200)
  @Post('register')
  register() {
    return process.env.DB_DRIVER;
  }
}
