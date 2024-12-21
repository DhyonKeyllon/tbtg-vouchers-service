import { ApiProperty } from '@nestjs/swagger';

import { IsUUID, IsNotEmpty, IsString } from 'class-validator';

export class CommonFieldsDTO {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    description: 'id',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  public readonly id: string;

  @IsString()
  @ApiProperty({
    description: 'Date when the entity was deleted',
    example: '2024-07-15T15:27:15.700Z',
    required: false,
  })
  public readonly deletedAt?: Date;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Date when the entity was updated',
    example: '2024-07-15T15:27:15.700Z',
  })
  public readonly updatedAt: Date;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Date when the entity was created',
    example: '2024-07-15T15:27:15.700Z',
  })
  public readonly createdAt: Date;
}
