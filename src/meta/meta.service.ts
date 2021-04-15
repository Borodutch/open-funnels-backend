import { Injectable, NotFoundException } from '@nestjs/common';
import { EventService } from 'src/event/event.service';
import { FunnelService } from 'src/funnel/funnel.service';

@Injectable()
export class MetaService {
  constructor(
    private readonly eventService: EventService,
    private readonly funnelService: FunnelService,
  ) {}

  async getMeta(
    funnelId: string,
    platform: string,
    start: number,
    end: number,
  ): Promise<number[]> {
    const funnel = await this.funnelService.findOne(funnelId);
    if (!funnel) throw new NotFoundException();
    const funnelMeta: number[] = [];
    const steps = funnel.steps;
    for (let index = steps.length - 1; index >= 0; index--) {
      if (index === 0) {
        funnelMeta.push(
          await this.eventService.countUsersInSteps({
            steps: steps,
            platform: platform,
            dateStart: start,
            dateEnd: end,
          }),
        );
      } else {
        funnelMeta.push(
          await this.eventService.countUsersInSteps({
            steps: steps.slice(0, -index),
            platform: platform,
            dateStart: start,
            dateEnd: end,
          }),
        );
      }
    }
    return funnelMeta;
  }
}
