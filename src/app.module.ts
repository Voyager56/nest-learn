import { AuthModule } from './authenticate/auth.module';
import { Module } from '@nestjs/common';
import { TestController } from './test.controller';

@Module({
  imports: [AuthModule],
  controllers: [TestController],
  providers: [],
})
export class AppModule {}
