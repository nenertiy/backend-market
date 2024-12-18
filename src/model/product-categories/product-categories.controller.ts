import { Controller, Get, Param } from '@nestjs/common';
import { ProductCategoriesService } from './product-categories.service';

@Controller('product-categories')
export class ProductCategoriesController {
  constructor(
    private readonly productCategoriesService: ProductCategoriesService,
  ) {}

  @Get()
  async findAllProductCategories() {
    return this.productCategoriesService.findAllProductCategories();
  }

  @Get(':id')
  async findOneProductCategories(@Param('id') id: string) {
    return this.productCategoriesService.findOneProductCategories(id);
  }
}
