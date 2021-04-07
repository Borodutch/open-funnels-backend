import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Event {
  @Prop({ type: String, required: true, index: true })
  userId: string;

  @Prop({ type: String, required: true, index: true })
  name: string;

  @Prop({ type: Number, required: true, index: true })
  timestamp: number;

  @Prop({ type: String, required: true, index: true })
  platform: string;

  @Prop({ type: String, required: true, index: true })
  language: string;

  @Prop({ type: String, required: true, index: true })
  userAgent: string;

  @Prop({ type: Boolean, required: true, index: true, default: false })
  debug: boolean;

  @Prop({ type: Boolean, required: true, index: true, default: false })
  isAnonymous: boolean;

  @Prop({ type: String, index: true })
  density?: string;

  @Prop({ type: String, index: true })
  installationId?: string;
}

export type EventDocument = Event & Document;
export const EventSchema = SchemaFactory.createForClass(Event);
