import { Module } from '@nestjs/common';
import { VoucherController } from './presentation/controllers';
import { VoucherService } from './application/service';
import { PrismaVoucherRepository } from './infra/repositories';
import { PrismaService } from './infra/orm';

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
