import { PrismaModule } from './../prisma/prisma.module';
import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controler';

@Module({
  imports: [PrismaModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
