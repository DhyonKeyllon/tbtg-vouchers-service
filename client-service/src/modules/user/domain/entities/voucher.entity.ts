import { VoucherStatus } from '@/shared/enums';

export class Voucher {
  public readonly id: string;
  public readonly code: string;
  public readonly expirationDate: Date;
  public readonly userId: string;
  public readonly status: VoucherStatus;

  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  constructor(voucher?: Partial<Voucher>) {
    Object.assign(this, voucher);
  }
}
