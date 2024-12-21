import { Module } from '@nestjs/common';
import { PrismaService } from './infra/orm/prisma/prisma.service';

@Module({
  providers: [PrismaService],
})
export class VoucherModule {}
