import { Controller, Get, Post, Body, HttpStatus, Param } from '@nestjs/common';
import { UserService } from '../../application/services/user.service';
import { User } from '../../domain/entities/user.entity';
import { CreateOneUserDTO } from '../dtos/create-one-user.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import {
  AssociatedVoucherToUserResponseDTO,
  CreatedOneUserResponseDTO,
  FoundAllUserResponseDTO,
} from '../dtos/responses';
import {
  ConflictResponseDTO,
  InvalidEntriesResponseDTO,
} from '@/shared/responses';
import { CommonResponse } from '@/shared/types';
import { AssociateVoucherToUserDTO } from '../dtos';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @ApiOperation({
    description: 'Create user with required fields',
    summary: 'Create One',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'User response object created',
    type: CreatedOneUserResponseDTO,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: 'Conflicting user response object',
    type: ConflictResponseDTO,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid entries response object',
    type: InvalidEntriesResponseDTO,
  })
  public async createOneUser(
    @Body() createOneUserDto: CreateOneUserDTO,
  ): Promise<CommonResponse<User>> {
    return this.userService.createOneUser(createOneUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all users' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of users',
    type: FoundAllUserResponseDTO,
  })
  public async findAllUsers() {
    return this.userService.findAllUsers();
  }

  @Post(':id/vouchers')
  @ApiOperation({ summary: 'Associate voucher to user' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Voucher associated to user',
    type: AssociatedVoucherToUserResponseDTO,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'User or voucher not found',
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: 'Conflicting user response object',
    type: ConflictResponseDTO,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid voucher id or user id',
  })
  public async associateVoucherToUser(
    @Param('id') userId: string,
    @Body() associateVoucherToUserDto: AssociateVoucherToUserDTO,
  ) {
    return this.userService.associateVoucherToUser(
      userId,
      associateVoucherToUserDto,
    );
  }
}
