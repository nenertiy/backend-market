import { Module, forwardRef } from '@nestjs/common';
import { SellersController } from './sellers.controller';
import { SellersService } from './sellers.service';
import { SellersRepository } from './sellers.repository';
import { ClientsModule } from '../clients/clients.module';
import { TokenModule } from '../token/token.module';
import { PrismaService } from '../app/prisma.service';
import { PasswordService } from '../password/password.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [forwardRef(() => ClientsModule), forwardRef(() => TokenModule)],
  controllers: [SellersController],
  providers: [
    SellersService,
    SellersRepository,
    PrismaService,
    PasswordService,
    JwtService,
  ],
  exports: [SellersService],
})
export class SellersModule {}
