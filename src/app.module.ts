import { AuthModule } from './authenticate/auth.module';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';

@Module({
  imports: [AuthModule, UserModule, BookmarkModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
