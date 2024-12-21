import { type VoucherStatus } from '@/shared/enums';

export class Voucher {
  public readonly id: string;
  public readonly code: string;
  public readonly expirationDate: Date;

  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  public readonly status?: VoucherStatus;
  public readonly userId?: string;

  constructor(voucher?: Partial<Voucher>) {
    Object.assign(this, voucher);
  }
}
