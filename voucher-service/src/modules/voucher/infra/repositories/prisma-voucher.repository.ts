import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { VoucherRepository } from '../../domain/repositories';
import { PrismaService } from '../orm';
import { VoucherStatus } from '@/shared/enums';
import { CommonResponse } from '@/shared/types';
import { Voucher } from '../../domain/entities';
import { CreateOneVoucherDTO } from '../../presentation/dtos';

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

  public async findCaseVoucherAlreadyAssociated(code: string, userId: string) {}

  public async createOneVoucher({
    code,
    expirationDate,
  }: CreateOneVoucherDTO): Promise<CommonResponse<Voucher>> {
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

  public async updateVoucherStatus(
    voucherId: string,
    status: VoucherStatus,
  ): Promise<CommonResponse<Voucher>> {
    throw new Error('Method not implemented.');
  }

  public async deleteVoucherByCode(
    code: string,
  ): Promise<CommonResponse<Voucher>> {
    throw new Error('Method not implemented.');
  }

  public async updateVoucherExpirationDate(
    voucherId: string,
    expirationDate: Date,
  ): Promise<CommonResponse<Voucher>> {
    throw new Error('Method not implemented.');
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
