import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Funnel {
  @Prop({ type: String, required: true }) app: string;
  @Prop({ type: String, required: true }) name: string;
  @Prop({ type: String, default: '' }) description?: string;
  @Prop({ type: [String], required: true }) steps: [string];
  @Prop({ type: MongooseSchema.Types.Mixed, default: [] }) queries?: [any];
}

export type FunnelDocument = Funnel & Document;
export const FunnelSchema = SchemaFactory.createForClass(Funnel);
