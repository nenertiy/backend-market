import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../auth/auth.module';
import { ClientsModule } from '../clients/clients.module';
import { SellersModule } from '../sellers/sellers.module';
import { TokenModule } from '../token/token.module';
import { ProductCategoriesModule } from '../product-categories/product-categories.module';
import { SellerCategoriesModule } from '../seller-categories/seller-categories.module';
import { ProductsModule } from '../products/products.module';
import { CartModule } from '../cart/cart.module';
import { OrderModule } from '../order/order.module';
import { ReviewsModule } from '../reviews/reviews.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ClientsModule,
    SellersModule,
    AuthModule,
    TokenModule,
    ProductsModule,
    CartModule,
    OrderModule,
    ReviewsModule,
    SellerCategoriesModule,
    ProductCategoriesModule,
  ],
})
export class AppModule {}
