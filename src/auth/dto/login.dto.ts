import { IUser } from 'src/user/interfaces/user.interface';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto implements IUser {
  @IsNotEmpty()
  @IsString()
  login: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
