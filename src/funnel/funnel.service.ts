import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, UpdateWriteOpResult } from 'mongoose';
import { CreateFunnelDto } from './dto/create-funnel.dto';
import { UpdateFunnelDto } from './dto/update-funnel.dto';
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
    if (!id.match(/^[0-9a-fA-F]{24}$/)) throw new BadRequestException();
    return this.funnelModel.findById(id).exec();
  }

  async deleteOne(id: string): Promise<FunnelDocument> {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) throw new BadRequestException();
    return this.funnelModel.findByIdAndDelete(id).exec();
  }

  async updateOne(
    id: string,
    updateFunnelDto: UpdateFunnelDto,
  ): Promise<UpdateWriteOpResult> {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) throw new BadRequestException();
    return this.funnelModel
      .updateOne({ _id: id }, { $set: updateFunnelDto })
      .exec();
  }

  async findAll(): Promise<FunnelDocument[]> {
    return this.funnelModel.find({}).exec();
  }
}
