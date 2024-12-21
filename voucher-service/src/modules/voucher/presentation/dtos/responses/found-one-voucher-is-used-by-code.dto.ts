import { ApiProperty } from '@nestjs/swagger';

export class FoundOneVoucherIsUsedByCodeResponseDTO {
  @ApiProperty({
    example: true,
  })
  public readonly data: boolean;
}
