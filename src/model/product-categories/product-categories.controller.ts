import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductCategoriesService } from './product-categories.service';

@Controller('product-categories')
export class ProductCategoriesController {
  constructor(
    private readonly productCategoriesService: ProductCategoriesService,
  ) {}

  @Get()
  async findAllProductCategories(@Query('search') search: string) {
    if (search) {
      return this.productCategoriesService.searchProductCategories(search);
    }
    return this.productCategoriesService.findAllProductCategories();
  }

  @Get(':id')
  async findOneProductCategories(@Param('id') id: string) {
    return this.productCategoriesService.findOneProductCategories(id);
  }
}
