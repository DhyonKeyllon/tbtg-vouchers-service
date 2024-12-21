import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories';
import {
  AssociateVoucherToUserDTO,
  CreateOneUserDTO,
} from '../../presentation/dtos';
import { CommonResponse } from '@/shared/types';
import { User } from '../../domain/entities';

@Injectable()
export class UserService {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: UserRepository,
  ) {}

  public async createOneUser(
    dto: CreateOneUserDTO,
  ): Promise<CommonResponse<User>> {
    return this.userRepository.createOneUser(dto);
  }

  public async findAllUsers() {
    return this.userRepository.findAllUsers();
  }

  public async associateVoucherToUser(
    userId: string,
    dto: AssociateVoucherToUserDTO,
  ) {
    return this.userRepository.associateVoucherToUser(userId, dto);
  }
}
