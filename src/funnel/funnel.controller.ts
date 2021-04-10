import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CreateFunnelDto } from './dto/create-funnel.dto';

@Controller('funnel')
export class FunnelController {
  @Post()
  async create(@Body(new ValidationPipe()) createFunnelDto: CreateFunnelDto) {
    return 'ok';
  }
}
