import { ApiProperty } from '@nestjs/swagger';

import { voucherStub } from '@/modules/voucher/tests/stubs';

export class FoundOneVoucherByCodeResponseDTO {
  @ApiProperty({
    example: voucherStub,
  })
  public readonly data: typeof voucherStub;
}
