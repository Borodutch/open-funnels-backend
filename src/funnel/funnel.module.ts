import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FunnelController } from './funnel.controller';
import { FunnelService } from './funnel.service';
import { Funnel, FunnelSchema } from './models/funnel.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Funnel.name, schema: FunnelSchema }]),
  ],
  controllers: [FunnelController],
  providers: [FunnelService],
})
export class FunnelModule {}
