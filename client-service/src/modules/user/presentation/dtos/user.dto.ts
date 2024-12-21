import { CommonFieldsDTO } from '@/shared/dtos';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class UserDTO extends CommonFieldsDTO {
  @ApiProperty({ example: 'email@example.com' })
  @IsEmail()
  public readonly email: string;

  @ApiProperty({ example: 'John Doe' })
  @IsString()
  public readonly name: string;
}
