import { Module } from '@nestjs/common';
import { ClientsModule } from '../clients/clients.module';
import { SellersModule } from '../sellers/sellers.module';
import { ConfigModule } from '@nestjs/config';
import config from 'src/config/config';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    ClientsModule,
    SellersModule,
    AuthModule,
  ],
})
export class AppModule {}
