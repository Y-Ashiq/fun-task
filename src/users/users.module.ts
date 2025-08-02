import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from "../models/users.model";
import { Event } from 'src/models/events.model';

@Module({
  imports:[TypeOrmModule.forFeature([User,Event])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
