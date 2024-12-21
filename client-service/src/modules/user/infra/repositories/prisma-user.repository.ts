import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../orm';
import { UserRepository } from '../../domain/repositories';
import { User } from '../../domain/entities';
import {
  AssociateVoucherToUserDTO,
  CreateOneUserDTO,
} from '../../presentation/dtos';
import { CommonResponse } from '@/shared/types';
import { VoucherServiceClient } from '../http/clients';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly voucherServiceClient: VoucherServiceClient,
  ) {}
  public async createOneUser({ email, name }: CreateOneUserDTO) {
    const existsCustomer = (await this.verifyEmailExistence(email)).data;

    if (existsCustomer)
      throw new ConflictException('User with provided email already exists');

    const data = await this.prisma.user.create({
      data: {
        email,
        name,
      },
    });

    return { data };
  }

  public async findAllUsers() {
    const data = await this.prisma.user.findMany({
      include: {
        vouchers: true,
      },
    });

    return {
      data,
    };
  }

  public async associateVoucherToUser(
    userId: string,
    { voucherCode }: AssociateVoucherToUserDTO,
  ): Promise<CommonResponse<User>> {
    const { data: isVoucherUsed } =
      await this.voucherServiceClient.isVoucherUsed(voucherCode);

    if (isVoucherUsed)
      throw new ConflictException('This voucher has already been used');

    const userUpdated = await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        vouchers: {
          connect: {
            id: voucherCode,
          },
        },
      },
      include: {
        vouchers: true,
      },
    });

    return {
      data: userUpdated,
    };
  }

  private async verifyEmailExistence(email: string) {
    const data = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    return {
      data,
    };
  }
}
