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
      const funnelMeta: number[] = [];
      const steps = funnel.steps;
      for (let index = steps.length - 1; index >= 0; index--) {
        funnelMeta.push(
          await this.eventService.countUsersInSteps(steps.slice(index)),
        );
      }
      return funnelMeta;
    }
    throw new NotFoundException();
  }
}
