import { voucherStub } from '@/modules/voucher/tests/stubs';
import { ApiProperty } from '@nestjs/swagger';

export class CreatedOneVoucherResponseDTO {
  @ApiProperty({
    example: voucherStub,
  })
  public readonly data: typeof voucherStub;
}
