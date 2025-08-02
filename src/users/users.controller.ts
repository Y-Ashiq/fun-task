import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { addUserDTO } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('addUser')
  addUser(@Body() body: addUserDTO) {
    return this.usersService.addUser(body);
  }

  @Get(':id/events')
  getEvents(@Param('id',ParseUUIDPipe) id: string) {
    return this.usersService.getEvents(id);
  }
}
