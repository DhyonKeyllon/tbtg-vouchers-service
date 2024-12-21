import { CommonResponse } from '@/shared/types';
import { Voucher } from '../entities';
import { VoucherStatus } from '@/shared/enums';

export interface VoucherRepository {
  createOneVoucher(
    voucher: Pick<Voucher, 'code' | 'expirationDate'>,
  ): Promise<CommonResponse<Voucher>>;

  findVoucherByCode(code: string): Promise<CommonResponse<Voucher>>;

  findIsVoucherUsedByCode(code: string): Promise<CommonResponse<boolean>>;

  findAllVouchers(): Promise<CommonResponse<Voucher[]>>;

  updateVoucherStatus(
    voucherCode: string,
    status: VoucherStatus,
  ): Promise<CommonResponse<Voucher>>;

  deleteVoucherByCode(code: string): Promise<CommonResponse<Voucher>>;

  updateVoucherExpirationDate(
    voucherCode: string,
    expirationDate: Date,
  ): Promise<CommonResponse<Voucher>>;
}
