import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { addUserDTO } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  @Post("addUser")
  addUser(@Body()  body: addUserDTO ) {

    return this.usersService.addUser(body)
  }

  @Get("getUserEvents")
  getEvents(){



  }
}
