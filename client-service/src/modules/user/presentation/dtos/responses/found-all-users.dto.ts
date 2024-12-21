import { ApiProperty } from '@nestjs/swagger';
import { UserDTO } from '../user.dto';

export class FoundAllUserResponseDTO {
  @ApiProperty({ type: UserDTO, isArray: true })
  public readonly data: UserDTO[];
}
