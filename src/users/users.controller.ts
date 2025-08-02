import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { addUserDTO, UUIDParams } from './dto/user.dto';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * Endpoint to create/add a new user.
   *
   * @param body - The user data matching addUserDTO.
   * @returns The created user entity.
   */
  @Post('addUser')
  @ApiOperation({ summary: 'Add a new user' })
  @ApiResponse({ status: 201, description: 'User created successfully.' })
  addUser(@Body() body: addUserDTO) {
    return this.usersService.addUser(body);
  }

  /**
   * Endpoint to get all events for a specific user.
   *
   * @param id - The UUID of the user (validated by ParseUUIDPipe).
   * @returns An array of the user's events with their details.
   */

  @Get(':id/events')
  @ApiOperation({ summary: 'Get all events for a user' })
  @ApiParam({ name: 'id', description: 'UUID of the user' })
  @ApiResponse({
    status: 200,
    description: 'List of user events',
  })
  @ApiResponse({ status: 404, description: 'User not found or no events' })
  getEvents(@Param('id', ParseUUIDPipe) id: UUIDParams) {
    return this.usersService.getEvents(id);
  }
}
