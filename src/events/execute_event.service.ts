import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { EventsService } from './events.service';

@Injectable()
export class ExecuteEventService {
  constructor(private readonly eventsService: EventsService) {}

  @Cron('*/30 * * * * *')
  async handleCron() {
    await this.eventsService.executeEvents();
  }
}
