import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/models/events.model';
import { User } from 'src/models/users.model';

@Module({
  imports:[TypeOrmModule.forFeature([User,Event])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
