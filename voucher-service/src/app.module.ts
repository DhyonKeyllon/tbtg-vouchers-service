import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ModulesModule } from './modules';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      cache: true,
      envFilePath: '.env',
    }),
    ModulesModule,
  ],
})
export class AppModule {}
