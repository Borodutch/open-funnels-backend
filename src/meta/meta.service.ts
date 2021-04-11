import { Injectable, NotFoundException } from '@nestjs/common';
import { EventService } from 'src/event/event.service';
import { FunnelService } from 'src/funnel/funnel.service';

@Injectable()
export class MetaService {
  constructor(
    private readonly eventService: EventService,
    private readonly funnelService: FunnelService,
  ) {}

  async getMeta(funnelId: string) {
    const funnel = await this.funnelService.findOne(funnelId);
    if (funnel) {
      const funnelUsers = await this.eventService.countUsersInSteps(
        funnel.steps,
      );
      return funnelUsers;
    }
    throw new NotFoundException();
  }
}
