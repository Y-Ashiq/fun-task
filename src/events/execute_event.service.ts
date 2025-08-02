import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { EventsService } from './events.service';

@Injectable()
export class ExecuteEventService {
  constructor(private readonly eventsService: EventsService) {}
  /**
   * Cron job that runs every 30 seconds to execute pending events.
   *
   * This method calls the EventsService to find all events with
   * status 'pending' and execute_at less than or equal to now,
   * then marks them as executed.
   *
   * @returns Promise<void>
   */
  @Cron('*/30 * * * * *')
  async handleCron() {
    await this.eventsService.executeEvents();
  }
}
