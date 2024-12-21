import { CommonResponse } from '@/shared/types';

import { Voucher } from '../entities';

export interface VoucherRepository {
  createOneVoucher(
    dto: Pick<Voucher, 'code' | 'expirationDate'>,
  ): Promise<CommonResponse<Voucher>>;

  findVoucherByCode(code: string): Promise<CommonResponse<Voucher>>;

  findIsVoucherUsedByCode(code: string): Promise<CommonResponse<boolean>>;

  findAllVouchers(): Promise<CommonResponse<Voucher[]>>;

  updateVoucherStatusByCode(
    voucherCode: string,
    dto: Pick<Voucher, 'status'>,
  ): Promise<CommonResponse<Voucher>>;
}
