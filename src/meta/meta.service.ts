import { Injectable } from '@nestjs/common';
import { EventService } from 'src/event/event.service';
import { FunnelService } from 'src/funnel/funnel.service';

@Injectable()
export class MetaService {
  constructor(
    private readonly eventService: EventService,
    private readonly funnelService: FunnelService,
  ) {}

  async getMeta(funnelId: string) {
    // TODO: implement for specific funnel
    // return this.eventService.findAndAggregate([
    //   { name: 'add_todo_opened', query: { platform: 'web' } },
    // ]);
    return this.eventService.getEventsForUser('606ca60703ed18e45226c503');
  }
}
