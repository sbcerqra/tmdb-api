import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class tasks {
  private readonly logger = new Logger('tasks');
  @Cron(CronExpression.EVERY_DAY_AT_7AM, {
    timeZone: 'America/Sao_Paulo',
  })

  FetchMovies() {
    this.logger.debug('');
  }
}