export class CreateFunnelDto {
  app: string;
  name: string;
  description?: string;
  steps: string;
  queries?: string;
}
