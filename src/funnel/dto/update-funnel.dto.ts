import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class UpdateFunnelDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  description?: string;

  @IsNotEmpty()
  @IsArray()
  steps: string[];
}
