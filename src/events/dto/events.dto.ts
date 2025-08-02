import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsString, IsISO8601 } from 'class-validator';

export class ScheduleEventDto {
  @ApiProperty({ description: 'UUID of the user scheduling the event' })
  @IsUUID()
  user: string;
  /**
   * A name for the event
   */
  @ApiProperty({ description: 'Descriptive event name' })
  @IsString()
  event_name: string;
  /**
   * The exact future date and time when the event should be executed,
   * formatted as an ISO 8601 string.
   */
  @ApiProperty({ description: 'ISO 8601 datetime when event should execute' })
  @IsISO8601()
  execute_at: string;
}
