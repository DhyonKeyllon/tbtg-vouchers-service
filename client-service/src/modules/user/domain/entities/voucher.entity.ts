export class Voucher {
  public readonly id: string;
  public readonly code: string;
  public readonly discount: number;
  public readonly expireDate: Date;
  public readonly userId: string;

  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  constructor(voucher?: Partial<Voucher>) {
    Object.assign(this, voucher);
  }
}
