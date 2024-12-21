import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import {
  ConflictResponseDTO,
  InvalidEntriesResponseDTO,
  RecordNotFoundDTO,
} from '@/shared/responses';
import { CommonResponse } from '@/shared/types';

import { VoucherService } from '../../application/service';
import { Voucher } from '../../domain/entities';
import { CreateOneVoucherDTO, UpdateVoucherStatusByCodeDTO } from '../dtos';
import {
  CreatedOneVoucherResponseDTO,
  FoundAllVouchersResponseDTO,
  FoundOneVoucherByCodeResponseDTO,
  FoundOneVoucherIsUsedByCodeResponseDTO,
  UpdatedOneVoucherResponseDTO,
} from '../dtos/responses';

@ApiTags('vouchers')
@Controller('vouchers')
export class VoucherController {
  constructor(private voucherService: VoucherService) {}

  @Post()
  @ApiOperation({
    description: 'Create one voucher with required fields',
    summary: 'Create One Voucher',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Created voucher',
    type: CreatedOneVoucherResponseDTO,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: 'Conflicting voucher response object',
    type: ConflictResponseDTO,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid entries response object',
    type: InvalidEntriesResponseDTO,
  })
  public async createOneVoucher(
    @Body() createOneVoucherDto: CreateOneVoucherDTO,
  ): Promise<CommonResponse<Voucher>> {
    return await this.voucherService.createOneVoucher(createOneVoucherDto);
  }

  @Get()
  @ApiOperation({
    description: 'Find all vouchers',
    summary: 'Find all vouchers',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Found all vouchers',
    type: FoundAllVouchersResponseDTO,
  })
  public async findAllVouchers(): Promise<CommonResponse<Voucher[]>> {
    return await this.voucherService.findAllVouchers();
  }

  @Get(':code')
  @ApiOperation({
    description: 'Find one voucher by code',
    summary: 'Find One Voucher',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Found voucher',
    type: FoundOneVoucherByCodeResponseDTO,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Voucher not found',
    type: RecordNotFoundDTO,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid entries response object',
    type: InvalidEntriesResponseDTO,
  })
  public async findVoucherByCode(
    @Param('code')
    code: string,
  ): Promise<CommonResponse<Voucher>> {
    return await this.voucherService.findVoucherByCode(code);
  }

  @Get(':code/is-used')
  @ApiOperation({
    description: 'Verify if voucher is used by code',
    summary: 'Verify if voucher is used',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Is voucher used response',
    type: FoundOneVoucherIsUsedByCodeResponseDTO,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Voucher not found',
    type: RecordNotFoundDTO,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid entries response object',
    type: InvalidEntriesResponseDTO,
  })
  public async findIsVoucherUsedByCode(
    @Param('code')
    code: string,
  ) {
    return await this.voucherService.findIsVoucherUsedByCode(code);
  }

  @Patch(':code')
  @ApiOperation({
    description: 'Update one voucher status with required fields',
    summary: 'Update one voucher vtatus',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Updated voucher',
    type: UpdatedOneVoucherResponseDTO,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid entries response object',
    type: InvalidEntriesResponseDTO,
  })
  public async updateVoucherStatusByCode(
    @Param('code')
    code: string,
    @Body() updateVoucherStatusByCodeDto: UpdateVoucherStatusByCodeDTO,
  ): Promise<CommonResponse<Voucher>> {
    return await this.voucherService.updateVoucherStatusByCode(
      code,
      updateVoucherStatusByCodeDto,
    );
  }
}
