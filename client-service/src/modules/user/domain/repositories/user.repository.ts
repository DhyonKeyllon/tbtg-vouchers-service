import { CommonResponse } from '@/shared/types';
import { User } from '../entities';

export interface UserRepository {
  findAllUsers(): Promise<CommonResponse<User[]>>;

  createOneUser(
    user: Pick<User, 'name' | 'email'>,
  ): Promise<CommonResponse<User>>;

  associateVoucherToUser(
    userId: string,
    dto: { voucherId: string },
  ): Promise<CommonResponse<User>>;
}
