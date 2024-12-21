import { voucherStub } from '@/modules/voucher/tests/stubs/voucher.stub';
import { ApiProperty } from '@nestjs/swagger';

export class FoundOneVoucherByCodeResponseDTO {
  @ApiProperty({
    example: voucherStub,
  })
  public readonly data: typeof voucherStub;
}
