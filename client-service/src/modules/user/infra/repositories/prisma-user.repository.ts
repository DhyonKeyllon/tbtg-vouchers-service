import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../orm';
import { UserRepository } from '../../domain/repositories';
import { User } from '../../domain/entities';
import {
  AssociateVoucherToUserDTO,
  CreateOneUserDTO,
} from '../../presentation/dtos';
import { CommonResponse } from '@/shared/types';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}
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
    const data = await this.prisma.user.findMany();

    return {
      data,
    };
  }

  public async associateVoucherToUser(
    userId: string,
    { voucherId }: AssociateVoucherToUserDTO,
  ): Promise<CommonResponse<User>> {
    const data = await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        vouchers: {
          connect: {
            id: voucherId,
          },
        },
      },
    });

    return {
      data,
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
