import { Controller, Get } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckService,
  HealthCheckResult,
  MongooseHealthIndicator,
} from '@nestjs/terminus';

@Controller('status')
export class StatusController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly db: MongooseHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  dbConnectionCheck(): Promise<HealthCheckResult> {
    return this.health.check([() => this.db.pingCheck('database')]);
  }
}
