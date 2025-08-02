import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/users.model';
import { Repository } from 'typeorm';
import { addUserDTO } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  addUser(body) {
    return this.usersRepository.save(body);
  }

  getEvents() {}
}
