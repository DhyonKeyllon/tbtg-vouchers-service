import { CommonResponse } from '@/shared/types';
import { Voucher } from '../entities';
import { VoucherStatus } from '@/shared/enums';

export interface UserRepository {
  findAllVouchers(): Promise<CommonResponse<Voucher[]>>;

  findVoucherByCode(code: string): Promise<CommonResponse<Voucher>>;

  createOneVoucher(
    voucher: Pick<Voucher, 'code' | 'expirationDate'>,
  ): Promise<CommonResponse<Voucher>>;

  updateVoucherStatus(
    voucherId: string,
    status: VoucherStatus,
  ): Promise<CommonResponse<Voucher>>;

  deleteVoucherByCode(code: string): Promise<CommonResponse<Voucher>>;

  updateVoucherExpirationDate(
    voucherId: string,
    expirationDate: Date,
  ): Promise<CommonResponse<Voucher>>;
}
