import { Injectable } from '@nestjs/common';

type User = {
  email: string;
  password: string;
  userId: string;
};

@Injectable()
export class UserService {
  private users: User[] = [
    {
      email: 'dan@example.com',
      password: 'mypassword',
      userId: '123',
    },
    {
      email: 'tri@example.com',
      password: 'mypassword343',
      userId: '456',
    },
  ];

  async getUser(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }
}
