import { Module } from '@nestjs/common';
import { SellerCategoriesService } from './seller-categories.service';
import { SellerCategoriesController } from './seller-categories.controller';
import { SellerCategoriesRepository } from './seller-categories.repository';
import { PrismaService } from '../app/prisma.service';

@Module({
  controllers: [SellerCategoriesController],
  providers: [
    SellerCategoriesService,
    SellerCategoriesRepository,
    PrismaService,
  ],
})
export class SellerCategoriesModule {}
