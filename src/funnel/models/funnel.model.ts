import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Funnel {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, default: '' })
  description?: string;

  @Prop({ type: [String], required: true })
  steps: string[];

  @Prop({ type: String, default: 'all' })
  platform?: string;
}

export type FunnelDocument = Funnel & Document;
export const FunnelSchema = SchemaFactory.createForClass(Funnel);
