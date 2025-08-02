import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

  async addEvent(body) {
    console.log(body.user);

    let isUser = await this.userRepo.findOne({ where: { id: body.user } });
    if (!isUser) throw new NotFoundException('User not found');
    const executeAt = new Date(body.execute_at);
    if (isNaN(executeAt.getTime()) || executeAt < new Date()) {
      throw new BadRequestException('Invalid execute_at time');
    }

    return this.eventsRepository.save(body);
  }

  async executeEvents() {
    const now = new Date();
    const events = await this.eventsRepository.find({
      where: {
        status: 'pending',
        execute_at : LessThanOrEqual(now)
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
