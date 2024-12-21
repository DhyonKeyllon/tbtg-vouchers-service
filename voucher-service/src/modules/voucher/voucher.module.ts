import { Module } from '@nestjs/common';

import { VoucherService } from './application/service';
import { PrismaService } from './infra/orm';
import { PrismaVoucherRepository } from './infra/repositories';
import { VoucherController } from './presentation/controllers';

@Module({
  providers: [
    VoucherService,
    PrismaService,
    {
      provide: 'VoucherRepository',
      useClass: PrismaVoucherRepository,
    },
  ],
  controllers: [VoucherController],
  exports: [VoucherService],
})
export class VoucherModule {}
