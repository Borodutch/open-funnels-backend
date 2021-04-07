import { User } from 'src/user/interfaces/user.interface';

export class LoginDto implements User {
  username: string;
  password: string;
}
