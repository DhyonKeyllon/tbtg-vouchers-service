import { IntersectionType, PickType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { VoucherDTO } from './voucher.dto';

class DefaultUpdateVoucherStatusByCodeDTO extends PickType(VoucherDTO, [
  'status',
] as const) {}

class NewUpdateVoucherStatusByCodeDTO extends PickType(VoucherDTO, [
  'status',
] as const) {
  @IsNotEmpty()
  public readonly code: string;
}

export class UpdateVoucherStatusByCodeDTO extends IntersectionType(
  DefaultUpdateVoucherStatusByCodeDTO,
  NewUpdateVoucherStatusByCodeDTO,
) {}
