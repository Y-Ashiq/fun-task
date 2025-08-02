import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from 'src/models/events.model';
import { User } from 'src/models/users.model';

import { LessThanOrEqual, Repository } from 'typeorm';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private eventsRepository: Repository<Event>,
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  /**
   * Adds a new event scheduled by a user.
   *
   * @param body - Object containing event data including `user` (UUID), `event_name`, and `execute_at` (ISO datetime string).
   * @throws NotFoundException if the specified user does not exist.
   * @throws BadRequestException if the `execute_at` datetime is invalid or in the past.
   * @returns The saved Event entity.
   */

  @ApiOperation({ summary: 'Schedule a new event' })
  @ApiResponse({ status: 201, description: 'Event created successfully.' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  async addEvent(body) {

    let isUser = await this.userRepo.findOne({ where: { id: body.user } });
    if (!isUser) throw new NotFoundException('User not found');
    const executeAt = new Date(body.execute_at);
    if (isNaN(executeAt.getTime()) || executeAt < new Date()) {
      throw new BadRequestException('Invalid execute_at time');
    }

    return this.eventsRepository.save(body);
  }

  /**
   * Finds and executes all pending events whose execution time has arrived.
   * Updates each event's status to 'executed' and sets the executedAt timestamp.
   *
   * @returns Promise<void>
   */

  async executeEvents() {
    const now = new Date();
    const events = await this.eventsRepository.find({
      where: {
        status: 'pending',
        execute_at: LessThanOrEqual(now),
      },
    });

    for (const e of events) {
      e.status = 'executed';
      e.executedAt = now;
      await this.eventsRepository.save(e);
      console.log('executed');
    }
  }
}
