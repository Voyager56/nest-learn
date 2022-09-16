import { AuthDto } from './types';
import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async login(dto: AuthDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (!user) {
      throw new Error('Wrong Email or Password');
    }
    if (argon.verify(user.password, dto.password)) {
      return user;
    }
  }

  async register(dto: AuthDto) {
    const hash = await argon.hash(dto.password);
    try {
      return await this.prisma.user.create({
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
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
          throw new Error('Username or email already taken');
        }
      }
    }
  }
}
