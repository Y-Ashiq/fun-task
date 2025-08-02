import { Body, Controller, Post } from '@nestjs/common';
import { EventsService } from './events.service';
import { ScheduleEventDto } from './dto/events.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('events')
@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  /**
   * Endpoint to schedule a new event.
   *
   * Accepts an event creation request body matching ScheduleEventDto,
   * validates and creates a new event via EventsService.
   *
   * @param body - The event details including user ID, event name, and execute_at datetime.
   * @returns The created event entity.
   */
  @Post('createEvent')
  @ApiOperation({ summary: 'Schedule a new event' })
  @ApiResponse({ status: 201, description: 'Event created successfully.' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  addEvent(@Body() body: ScheduleEventDto) {
    return this.eventsService.addEvent(body);
  }
}
