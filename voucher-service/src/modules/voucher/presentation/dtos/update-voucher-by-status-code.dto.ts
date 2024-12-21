import { IntersectionType, PickType } from '@nestjs/swagger';

import { IsNotEmpty } from 'class-validator';

import { type VoucherStatus } from '@/shared/enums';

import { VoucherDTO } from './voucher.dto';

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
