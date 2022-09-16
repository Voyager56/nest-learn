import { AuthService } from './auth.service';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthDto } from './types';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() dto: AuthDto) {
    return this.authService.login(dto);
  }
  @Post('register')
  register(@Body() dto: AuthDto) {
    return this.authService.register(dto);
  }
}
