import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from 'src/models/events.model';
import { User } from 'src/models/users.model';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Event)
    private eventsRepository: Repository<Event>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  addUser(body) {
    return this.usersRepository.save(body);
  }

  async getEvents(id: string) {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User Not Found');
    }
    const events = await this.eventsRepository.find({
      where: { user: { id } },
    });

    if (events.length === 0) {
      throw new NotFoundException('No Events found for this user');
    }

    return events.map((event) => ({
      event_id: event.id,
      event_name: event.event_name,
      execute_at: event.execute_at.toISOString(),
      status: event.status,
      executed_at: event.executedAt ? event.executedAt.toISOString() : null,
    }));
  }
}
