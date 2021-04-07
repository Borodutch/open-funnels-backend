import { User } from 'src/user/interfaces/user.interface';

export class LoginDto implements User {
  login: string;
  password: string;
}
