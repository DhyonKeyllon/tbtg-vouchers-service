import { Inject, Injectable } from '@nestjs/common';
import { VoucherRepository } from '../../domain/repositories';
import { CommonResponse } from '@/shared/types';
import { Voucher } from '../../domain/entities';
import { CreateOneVoucherDTO } from '../../presentation/dtos';

@Injectable()
export class VoucherService {
  constructor(
    @Inject('VoucherRepository')
    private readonly voucherRepository: VoucherRepository,
  ) {}

  public async createOneVoucher(
    dto: CreateOneVoucherDTO,
  ): Promise<CommonResponse<Voucher>> {
    return await this.voucherRepository.createOneVoucher(dto);
  }

  public async findVoucherByCode(
    code: string,
  ): Promise<CommonResponse<Voucher>> {
    return await this.voucherRepository.findVoucherByCode(code);
  }

  public async findAllVouchers(): Promise<CommonResponse<Voucher[]>> {
    return await this.voucherRepository.findAllVouchers();
  }
}
