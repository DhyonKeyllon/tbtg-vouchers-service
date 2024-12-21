import { Module } from '@nestjs/common';
import { ModulesModule } from './modules';
import { ConfigModule } from '@nestjs/config';

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
