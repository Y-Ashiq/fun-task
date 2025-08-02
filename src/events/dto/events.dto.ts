import { IsUUID, IsString, IsISO8601 } from 'class-validator';

export class ScheduleEventDto {
  @IsUUID()
  user: string;

  @IsString()
  event_name: string;

  @IsISO8601()
  execute_at: string;
}