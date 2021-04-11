import { Module } from '@nestjs/common';
import { EventModule } from 'src/event/event.module';
import { FunnelModule } from 'src/funnel/funnel.module';
import { MetaController } from './meta.controller';
import { MetaService } from './meta.service';

@Module({
  imports: [EventModule, FunnelModule],
  controllers: [MetaController],
  providers: [MetaService],
})
export class MetaModule {}
