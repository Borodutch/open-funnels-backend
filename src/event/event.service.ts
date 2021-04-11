import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { IDistinct } from './interfaces/distinct.interface';
import { Event, EventDocument } from './models/event.model';

@Injectable()
export class EventService {
  constructor(
    @InjectModel(Event.name)
    private readonly eventModel: Model<EventDocument>,
  ) {}

  // TODO: maybe useless method
  async findAndAggregate(steps: any[]): Promise<any[]> {
    const aggregatedData: any[] = [];
    for (const step of steps) {
      aggregatedData.push(
        await this.eventModel.aggregate([
          { $match: { name: step.name } },
          { $match: { ...step.query } },
          {
            $group: {
              _id: '$userId',
              count: { $sum: 1 },
            },
          },
        ]),
      );
    }
    return aggregatedData;
  }

  // TODO: get users from first step of funnel
  async getFirstStepUsers(id: string) {}

  async getEventsForUser(id: string): Promise<any[]> {
    return this.eventModel.aggregate([
      { $match: { userId: id } },
      {
        $group: {
          _id: '$userId',
          events: { $push: '$name' },
        },
      },
    ]);
  }

  async distinct(index: IDistinct): Promise<any[]> {
    if (index.platform) {
      return this.eventModel.distinct('platform').exec();
    } else if (index.name) {
      return this.eventModel.distinct('name').exec();
    }
    return [];
  }
}
