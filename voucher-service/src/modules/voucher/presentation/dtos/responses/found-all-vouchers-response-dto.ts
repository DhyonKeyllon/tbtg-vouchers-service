import { ApiProperty } from '@nestjs/swagger';
import { VoucherDTO } from '../voucher.dto';

export class FoundAllVouchersResponseDTO {
  @ApiProperty({
    type: VoucherDTO,
    isArray: true,
  })
  public readonly data: VoucherDTO[];
}
