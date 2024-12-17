import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ClientsModule } from '../clients/clients.module';
import { TokenModule } from '../token/token.module';
import { PasswordModule } from '../password/password.module';
import { SellersModule } from '../sellers/sellers.module';

@Module({
  imports: [ClientsModule, SellersModule, TokenModule, PasswordModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
