import { Module } from '@nestjs/common';
import { ProductCategoriesService } from './product-categories.service';
import { ProductCategoriesController } from './product-categories.controller';
import { ProductCategoriesRepository } from './product-categories.repository';
import { PrismaService } from '../app/prisma.service';

@Module({
  controllers: [ProductCategoriesController],
  providers: [
    ProductCategoriesService,
    ProductCategoriesRepository,
    PrismaService,
  ],
})
export class ProductCategoriesModule {}
