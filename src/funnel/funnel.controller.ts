import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CreateFunnelDto } from './dto/create-funnel.dto';
import { FunnelService } from './funnel.service';

@Controller('funnel')
export class FunnelController {
  constructor(private readonly funnelService: FunnelService) {}

  @Post()
  async create(@Body(new ValidationPipe()) createFunnelDto: CreateFunnelDto) {
    this.funnelService.create(createFunnelDto);
  }
}
