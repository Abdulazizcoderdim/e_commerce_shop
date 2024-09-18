import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class AuthDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsString({
    message: 'Email must be a string',
  })
  @IsEmail()
  email: string;

  @MinLength(6, {
    message: 'Password must be at least 6 characters',
  })
  @IsString({
    message: 'Password must be a string',
  })
  password: string;
}
