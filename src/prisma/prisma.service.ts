import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'mysql://common:1234@127.0.0.1:3306/nestjs?schema=public',
        },
      },
    });
  }
}
