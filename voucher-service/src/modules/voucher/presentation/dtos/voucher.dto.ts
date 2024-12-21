import { CommonFieldsDTO } from '@/shared/dtos';
import { VoucherStatus } from '@/shared/enums';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString, IsUUID } from 'class-validator';

export class VoucherDTO extends CommonFieldsDTO {
  @ApiProperty({
    description: 'Voucher code',
    example: 'BLACKFRIDAY24',
  })
  @IsString()
  public readonly code: string;

  @IsString()
  @ApiProperty({
    description: 'Date when the entity was updated',
    example: '2024-07-15T15:27:15.700Z',
  })
  public readonly expirationDate: Date;

  @ApiProperty({
    description: 'Voucher status',
    example: VoucherStatus.ACTIVE,
    default: VoucherStatus.ACTIVE,
    enumName: 'VoucherStatus',
    required: false,
  })
  @IsEnum(VoucherStatus, {
    message: 'Status must be ACTIVE, INACTIVE, or USED',
  })
  public readonly status?: VoucherStatus;

  @ApiProperty({
    description: 'User id associated with voucher',
    required: false,
  })
  @IsUUID()
  public readonly userId?: string;
}
