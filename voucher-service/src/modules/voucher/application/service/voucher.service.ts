import { Inject, Injectable } from '@nestjs/common';
import { VoucherRepository } from '../../domain/repositories';
import { CommonResponse } from '@/shared/types';
import { Voucher } from '../../domain/entities';
import {
  CreateOneVoucherDTO,
  UpdateVoucherStatusByCodeDTO,
} from '../../presentation/dtos';

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

  public async findIsVoucherUsedByCode(
    code: string,
  ): Promise<CommonResponse<boolean>> {
    return await this.voucherRepository.findIsVoucherUsedByCode(code);
  }

  public async findAllVouchers(): Promise<CommonResponse<Voucher[]>> {
    return await this.voucherRepository.findAllVouchers();
  }

  public async updateVoucherStatusByCode(
    code: string,
    dto: UpdateVoucherStatusByCodeDTO,
  ): Promise<CommonResponse<Voucher>> {
    return await this.voucherRepository.updateVoucherStatusByCode(code, dto);
  }
}
