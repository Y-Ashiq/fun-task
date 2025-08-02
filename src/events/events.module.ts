import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/models/events.model';
import { User } from 'src/models/users.model';
import { ExecuteEventService } from './execute_event.service';

@Module({
  imports:[TypeOrmModule.forFeature([Event,User])],
  controllers: [EventsController],
  providers: [EventsService,ExecuteEventService],
})
export class EventsModule {}
