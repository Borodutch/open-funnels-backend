import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { MetaService } from './meta.service';

@Controller('meta')
export class MetaController {
  constructor(private readonly metaService: MetaService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getMeta(
    @Param('id') id: string,
    @Query('p') platform: string,
    @Query('ds') dateStart: string,
    @Query('de') dateEnd: string,
  ): Promise<number[]> {
    return this.metaService.getMeta({
      funnelId: id,
      end: dateEnd,
      platform: platform,
      start: dateStart,
    });
  }
}
