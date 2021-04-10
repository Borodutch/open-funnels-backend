import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateFunnelDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  description?: string;

  @IsNotEmpty()
  @IsArray()
  steps: [string];

  queries?: string;
}
