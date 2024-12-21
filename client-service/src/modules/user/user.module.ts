import { Module } from '@nestjs/common';
import { PrismaService } from './infra/orm/prisma.service';
import { UserService } from './application/services';
import { UserController } from './presentation/controllers';
import { PrismaUserRepository } from './infra/repositories';

@Module({
  providers: [
    UserService,
    PrismaService,
    {
      provide: 'UserRepository',
      useClass: PrismaUserRepository,
    },
  ],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
