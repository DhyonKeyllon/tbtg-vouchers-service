import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class AssociateVoucherToUserDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Voucher code to associate with the user',
    example: 'BLACKFRIDAY24',
  })
  public readonly voucherCode: string;
}
