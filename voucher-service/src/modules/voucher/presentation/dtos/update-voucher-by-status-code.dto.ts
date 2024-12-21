import { IntersectionType, PickType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { VoucherDTO } from './voucher.dto';
import { type VoucherStatus } from '@/shared/enums';

class DefaultUpdateVoucherStatusByCodeDTO extends PickType(VoucherDTO, [
  'status',
] as const) {}

class NewUpdateVoucherStatusByCodeDTO extends PickType(VoucherDTO, [
  'status',
] as const) {
  @IsNotEmpty()
  public readonly status: VoucherStatus;
}

export class UpdateVoucherStatusByCodeDTO extends IntersectionType(
  DefaultUpdateVoucherStatusByCodeDTO,
  NewUpdateVoucherStatusByCodeDTO,
) {}
