import { userStubWithAssociatedVouchers } from '@/modules/user/tests/stubs';
import { ApiProperty } from '@nestjs/swagger';

export class AssociatedVoucherToUserResponseDTO {
  @ApiProperty({
    example: userStubWithAssociatedVouchers,
  })
  public readonly data: typeof userStubWithAssociatedVouchers;
}
