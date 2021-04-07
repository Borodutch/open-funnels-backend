import { Module } from '@nestjs/common';
import { FunnelController } from './funnel.controller';
import { FunnelService } from './funnel.service';

@Module({
  controllers: [FunnelController],
  providers: [FunnelService]
})
export class FunnelModule {}
