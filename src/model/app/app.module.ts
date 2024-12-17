import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../auth/auth.module';
import { ClientsModule } from '../clients/clients.module';
import { SellersModule } from '../sellers/sellers.module';
import { TokenModule } from '../token/token.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ClientsModule,
    SellersModule,
    AuthModule,
    TokenModule,
  ],
})
export class AppModule {}
