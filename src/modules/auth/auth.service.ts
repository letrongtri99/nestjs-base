import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validate(email: string, password: string) {
    const user = await this.usersService.getUser('tri@example.com');

    if (user && user.password === password) {
      const { password, ...remainData } = user;
      return remainData;
    }

    return;
  }

  async login(user: any) {
    const payload = { username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
