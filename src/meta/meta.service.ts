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
      const allUsers = await this.eventService.getFirstStepUsers(
        funnel.steps[0],
      );
      const usersSteps: any[] = [];
      for (const user of allUsers) {
        console.log(user['_id']);
        usersSteps.push(await this.eventService.getEventsForUser(user['_id']));
      }
      return usersSteps;
    }
    throw new NotFoundException();
    // TODO: implement for specific funnel
    // return this.eventService.findAndAggregate([
    //   { name: 'add_todo_opened', query: { platform: 'web' } },
    // ]);
    // return this.eventService.getFirstStepUsers('add_todo_opened');
  }
}
