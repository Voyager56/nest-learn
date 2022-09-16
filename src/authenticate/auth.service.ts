import { AuthDto } from './types/auth.dto';
import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { User, BookMark } from '@prisma/client';
import * as argon from 'argon2';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  login(dto: AuthDto) {
    return { msg: 'login' };
  }

  async register(dto: AuthDto) {
    const hash = await argon.hash(dto.password);
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        username: dto.username,
        password: hash,
      },
      select: {
        email: true,
        username: true,
        id: true,
        createdAt: true,
      },
    });
    return user;
  }
}
