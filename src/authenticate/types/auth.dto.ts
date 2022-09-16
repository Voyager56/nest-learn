import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  @IsEmail()
  email: string;

  username?: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
