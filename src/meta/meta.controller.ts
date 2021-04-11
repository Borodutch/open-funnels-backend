import { Controller, Get, Param } from '@nestjs/common';
import { MetaService } from './meta.service';

@Controller('meta')
export class MetaController {
  constructor(private readonly metaService: MetaService) {}

  @Get(':id')
  async getMeta(@Param('id') id: string) {
    return this.metaService.getMeta(id);
  }
}
