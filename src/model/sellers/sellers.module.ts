import { Module } from '@nestjs/common';
import { SellersService } from './sellers.service';
import { SellersController } from './sellers.controller';
import { SellersRepository } from './sellers.repository';
import { PrismaService } from '../app/prisma.service';
import { PasswordModule } from '../password/password.module';

@Module({
  controllers: [SellersController],
  providers: [SellersService, SellersRepository, PrismaService],
  imports: [PasswordModule],
  exports: [SellersService],
})
export class SellersModule {}
