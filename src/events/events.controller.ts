import { Body, Controller, Post } from '@nestjs/common';
import { EventsService } from './events.service';
import { ScheduleEventDto } from './dto/events.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post('createEvent')
  addEvent(@Body() body: ScheduleEventDto) {
    return this.eventsService.addEvent(body);
  }
}
