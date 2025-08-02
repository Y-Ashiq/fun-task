import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID, MinLength } from 'class-validator';

export class addUserDTO {
  /**
   * The user's name.
   * Must be a non-empty string with at least 3 characters.
   */
    @ApiProperty({ description: "User's name", example: 'Youssef', minLength: 3 })

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;
}

export class UUIDParams {
  /**
   * UUID string representing an entity's unique identifier.
   */
    @ApiProperty({ description: 'UUID parameter', example: 'e179c723-c03f-435e-9a4f-672412335898' })

  @IsUUID()
  id: string;
}
