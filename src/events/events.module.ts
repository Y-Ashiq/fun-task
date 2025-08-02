import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExecuteEventService } from './execute_event.service';
import { Event } from 'src/models/events.model';
import { User } from 'src/models/users.model';

@Module({
  imports:[TypeOrmModule.forFeature([Event,User])],
  controllers: [EventsController],
  providers: [EventsService,ExecuteEventService],
})
export class EventsModule {}
