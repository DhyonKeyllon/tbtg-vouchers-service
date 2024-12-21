import { Voucher } from './voucher.entity';

export class User {
  public readonly id: string;
  public readonly email: string;
  public readonly name: string;

  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  public readonly vouchers?: Voucher[];
  public readonly deletedAt?: Date;

  constructor(user?: Partial<User>) {
    Object.assign(this, user);
  }
}
