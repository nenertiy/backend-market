import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../auth/auth.module';
import { ClientsModule } from '../clients/clients.module';
import { SellersModule } from '../sellers/sellers.module';
import { TokenModule } from '../token/token.module';
import { ProductCategoriesModule } from '../product-categories/product-categories.module';
import { SellerCategoriesModule } from '../seller-categories/seller-categories.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ClientsModule,
    SellersModule,
    AuthModule,
    TokenModule,
    SellerCategoriesModule,
    ProductCategoriesModule,
  ],
})
export class AppModule {}
