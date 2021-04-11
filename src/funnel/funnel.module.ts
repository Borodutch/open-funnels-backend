import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventModule } from 'src/event/event.module';
import { FunnelController } from './funnel.controller';
import { FunnelService } from './funnel.service';
import { Funnel, FunnelSchema } from './models/funnel.model';

@Module({
  imports: [
    EventModule,
    MongooseModule.forFeature([{ name: Funnel.name, schema: FunnelSchema }]),
  ],
  controllers: [FunnelController],
  providers: [FunnelService],
  exports: [FunnelService],
})
export class FunnelModule {}
