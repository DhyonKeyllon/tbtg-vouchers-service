import { IsNotEmpty } from 'class-validator';
import { IntersectionType, PickType } from '@nestjs/swagger';
import { UserDTO } from './user.dto';

class DefaultCreateUserDTO extends PickType(UserDTO, [
  'name',
  'email',
] as const) {}

export class NewCreateUserDto extends PickType(UserDTO, [
  'name',
  'email',
] as const) {
  @IsNotEmpty()
  public readonly email: string;

  @IsNotEmpty()
  public readonly name: string;
}

export class CreateOneUserDTO extends IntersectionType(
  DefaultCreateUserDTO,
  NewCreateUserDto,
) {}
