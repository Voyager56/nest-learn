import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controler';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
