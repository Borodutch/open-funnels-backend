import { User } from 'src/user/interfaces/user.interface';
import { IsNotEmpty } from 'class-validator';

export class LoginDto implements User {
  @IsNotEmpty() login: string;
  @IsNotEmpty() password: string;
}
