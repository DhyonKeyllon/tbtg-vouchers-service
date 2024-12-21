import { userStub } from '../../../tests/stubs';
import { ApiProperty } from '@nestjs/swagger';

export class CreatedOneUserResponseDTO {
  @ApiProperty({
    example: userStub,
  })
  public readonly data: typeof userStub;
}
