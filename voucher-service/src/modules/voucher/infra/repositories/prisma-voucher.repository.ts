import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { CommonResponse } from '@/shared/types';

import { Voucher } from '../../domain/entities';
import { VoucherRepository } from '../../domain/repositories';
import { PrismaService } from '../orm';

@Injectable()
export class PrismaVoucherRepository implements VoucherRepository {
  constructor(private prisma: PrismaService) {}
  public async findAllVouchers(): Promise<CommonResponse<Voucher[]>> {
    const data = await this.prisma.voucher.findMany();

    return { data };
  }

  public async findVoucherByCode(
    code: string,
  ): Promise<CommonResponse<Voucher>> {
    const data = await this.prisma.voucher.findUnique({
      where: {
        code,
      },
      include: {
        user: true,
      },
    });

    if (!data) throw new NotFoundException('Voucher not found');

    return { data };
  }

  public async findIsVoucherUsedByCode(
    code: string,
  ): Promise<CommonResponse<boolean>> {
    const voucher = await this.prisma.voucher.findUnique({
      where: { code },
      include: { user: true },
    });

    if (!voucher) throw new NotFoundException('Voucher not found');

    const isUsed = !!voucher.user;

    return { data: isUsed };
  }

  public async createOneVoucher({
    code,
    expirationDate,
  }: Pick<Voucher, 'code' | 'expirationDate'>): Promise<
    CommonResponse<Voucher>
  > {
    const existsVoucher = (await this.verifyVoucherExistence(code)).data;

    if (existsVoucher)
      throw new ConflictException('Voucher with provided code already exists');

    const data = await this.prisma.voucher.create({
      data: {
        code,
        expirationDate,
      },
    });

    return { data };
  }

  public async updateVoucherStatusByCode(
    code: string,
    { status }: Pick<Voucher, 'status'>,
  ): Promise<CommonResponse<Voucher>> {
    const data = await this.prisma.voucher.update({
      where: {
        code,
      },
      data: {
        status,
      },
    });

    return { data };
  }

  private async verifyVoucherExistence(code: string) {
    const data = await this.prisma.voucher.findUnique({
      where: {
        code,
      },
    });

    return {
      data,
    };
  }
}
