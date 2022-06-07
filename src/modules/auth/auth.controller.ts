import { Body, Controller, Post } from '@nestjs/common';

class SignInDto {
  email: string;
  password: string;
}

@Controller('auth')
export class AuthController {}
