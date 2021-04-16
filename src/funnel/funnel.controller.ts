import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateFunnelDto } from './dto/create-funnel.dto';
import { FunnelService } from './funnel.service';
import { FunnelDocument } from './models/funnel.model';

@Controller('funnel')
export class FunnelController {
  constructor(private readonly funnelService: FunnelService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getFunnels(): Promise<FunnelDocument[]> {
    return this.funnelService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body(new ValidationPipe()) createFunnelDto: CreateFunnelDto,
  ): Promise<FunnelDocument> {
    return this.funnelService.create(createFunnelDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  async deleteFunnel(@Body('id') id: string): Promise<void> {
    const funnel = this.funnelService.findOne(id);
    if (!funnel) {
      throw new NotFoundException();
    }
    this.funnelService.deleteOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getFunnel(@Param('id') id: string): Promise<FunnelDocument> {
    const funnel = this.funnelService.findOne(id);
    if (!funnel) {
      throw new NotFoundException();
    }
    return funnel;
  }
}
