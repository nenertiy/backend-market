import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ClientsModule } from '../clients/clients.module';
import { SellersModule } from '../sellers/sellers.module';
import { TokenModule } from '../token/token.module';
import { PasswordModule } from '../password/password.module';

@Module({
  imports: [ClientsModule, SellersModule, TokenModule, PasswordModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
