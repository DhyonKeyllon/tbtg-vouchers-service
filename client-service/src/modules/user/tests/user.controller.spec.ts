import { Test, TestingModule } from '@nestjs/testing';

import {
  AssociateVoucherToUserDTO,
  CreateOneUserDTO,
} from '../presentation/dtos';
import { UserController } from '../presentation/controllers';
import { UserService } from '../application/services';

import { userStub, userStubWithAssociatedVouchers } from './stubs';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;
  const useServiceMock: jest.Mocked<Omit<UserService, 'userRepository'>> = {
    createOneUser: jest.fn().mockResolvedValue({ data: userStub }),

    findAllUsers: jest.fn().mockResolvedValue({ data: [userStub] }),

    associateVoucherToUser: jest
      .fn()
      .mockResolvedValue({ data: userStubWithAssociatedVouchers }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          useValue: useServiceMock,
          provide: UserService,
        },
      ],
    }).compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
    expect(userService).toBeDefined();
  });

  describe('create user', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('should create an user and return it', async () => {
      const dto: CreateOneUserDTO = {
        email: userStub.email,
        name: userStub.name,
      };

      const result = await userController.createOneUser(dto);

      expect(result).toEqual({ data: userStub });
      expect(userService.createOneUser).toHaveBeenCalledTimes(1);
      expect(userService.createOneUser).toHaveBeenCalledWith(dto);
    });

    it('should throw Error if dto is invalid', async () => {
      const dto: CreateOneUserDTO = {
        email: 'invalid.email',
        name: userStub.name,
      };

      jest
        .spyOn(userService, 'createOneUser')
        .mockRejectedValueOnce(new Error());

      try {
        await userController.createOneUser(dto);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
      }

      expect(userService.createOneUser).toHaveBeenCalledTimes(1);
    });
  });

  describe('get users', () => {
    it('should return a list of users entity successfully', async () => {
      const users = [userStub];

      const result = await userController.foundUsers();

      expect(result).toEqual({ data: users });
      expect(userService.findAllUsers).toHaveBeenCalledTimes(1);
    });

    it('should throw an error if something goes wrong', async () => {
      jest
        .spyOn(userService, 'findAllUsers')
        .mockRejectedValueOnce(new Error());

      try {
        await userController.foundUsers();
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
      }
    });
  });

  describe('associate voucher to user', () => {
    it('should associate voucher to user successfully', async () => {
      const userId = '123e4567-e89b-12d3-a456-426614174000';
      const dto: AssociateVoucherToUserDTO = {
        voucherId: '124e4567-e89b-12d3-a456-426614174000',
      };

      const result = await userController.associateVoucherToUser(userId, dto);

      expect(result).toEqual({ data: userStubWithAssociatedVouchers });
      expect(userService.associateVoucherToUser).toHaveBeenCalledTimes(1);
      expect(userService.associateVoucherToUser).toHaveBeenCalledWith(
        userId,
        dto,
      );
    });

    it('should throw an error if something goes wrong', async () => {
      const userId = '123e4567-e89b-12d3-a456-426614174000';
      const dto: AssociateVoucherToUserDTO = {
        voucherId: '124e4567-e89b-12d3-a456-426614174000',
      };

      jest
        .spyOn(userService, 'associateVoucherToUser')
        .mockRejectedValueOnce(new Error());

      try {
        await userController.associateVoucherToUser(userId, dto);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
      }
    });
  });
});
