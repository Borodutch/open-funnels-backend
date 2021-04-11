import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { CreateFunnelDto } from './dto/create-funnel.dto';
import { FunnelService } from './funnel.service';
import { FunnelDocument } from './models/funnel.model';

@Controller('funnel')
export class FunnelController {
  constructor(private readonly funnelService: FunnelService) {}

  @Post()
  async create(
    @Body(new ValidationPipe()) createFunnelDto: CreateFunnelDto,
  ): Promise<FunnelDocument> {
    return this.funnelService.create(createFunnelDto);
  }

  @Get(':id')
  async getFunnel(@Param('id') id: string): Promise<FunnelDocument> {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      const funnel = this.funnelService.findOne(id);
      if (!funnel) {
        throw new NotFoundException();
      }
      return funnel;
    }
    throw new BadRequestException();
  }
}
