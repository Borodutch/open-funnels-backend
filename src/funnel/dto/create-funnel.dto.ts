import { IsNotEmpty } from 'class-validator';

export class CreateFunnelDto {
  @IsNotEmpty() name: string;
  description?: string;
  @IsNotEmpty() steps: string;
  queries?: string;
}
