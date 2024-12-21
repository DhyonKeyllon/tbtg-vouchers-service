import { IntersectionType, PickType } from '@nestjs/swagger';

import { IsNotEmpty } from 'class-validator';

import { VoucherDTO } from './voucher.dto';

class DefaultCreateVoucherDTO extends PickType(VoucherDTO, [
  'code',
  'expirationDate',
] as const) {}

class NewCreateVoucherDTO extends PickType(VoucherDTO, [
  'code',
  'expirationDate',
] as const) {
  @IsNotEmpty()
  public readonly code: string;

  @IsNotEmpty()
  public readonly expirationDate: Date;
}

export class CreateOneVoucherDTO extends IntersectionType(
  DefaultCreateVoucherDTO,
  NewCreateVoucherDTO,
) {}
