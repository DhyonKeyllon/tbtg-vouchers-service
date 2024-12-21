import { Module } from '@nestjs/common';
import { PrismaService } from './infra/orm/prisma.service';
import { UserService } from './application/services';
import { UserController } from './presentation/controllers';
import { PrismaUserRepository } from './infra/repositories';
import { HttpModule } from '@nestjs/axios';
import { VoucherServiceClient } from './infra/http/clients';

@Module({
  providers: [
    UserService,
    PrismaService,
    {
      provide: 'UserRepository',
      useClass: PrismaUserRepository,
    },
    VoucherServiceClient,
  ],
  controllers: [UserController],
  exports: [UserService],
  imports: [HttpModule],
})
export class UserModule {}
