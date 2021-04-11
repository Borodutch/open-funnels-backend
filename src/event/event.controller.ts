import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { EventService } from './event.service';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get('distinct/:value')
  async getDistinct(@Param('value') value: string): Promise<any[]> {
    if (value === 'platform') {
      return this.eventService.distinct({ platform: true });
    } else if (value === 'name') {
      return this.eventService.distinct({ name: true });
    }
    throw new BadRequestException();
  }
}
