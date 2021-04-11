import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFunnelDto } from './dto/create-funnel.dto';
import { Funnel, FunnelDocument } from './models/funnel.model';

@Injectable()
export class FunnelService {
  constructor(
    @InjectModel(Funnel.name)
    private readonly funnelModel: Model<FunnelDocument>,
  ) {}

  async create(createFunnelDto: CreateFunnelDto): Promise<FunnelDocument> {
    const createdFunnel = new this.funnelModel(createFunnelDto);
    return createdFunnel.save();
  }

  async findOne(id: string): Promise<FunnelDocument> {
    return this.funnelModel.findById(id).exec();
  }
}
