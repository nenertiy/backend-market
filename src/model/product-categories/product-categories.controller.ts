import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductCategoriesService } from './product-categories.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('product-categories')
export class ProductCategoriesController {
  constructor(
    private readonly productCategoriesService: ProductCategoriesService,
  ) {}

  @ApiOperation({ summary: 'Получить все категории продуктов' })
  @Get()
  async findAllProductCategories(@Query('search') search: string) {
    if (search) {
      return this.productCategoriesService.searchProductCategories(search);
    }
    return this.productCategoriesService.findAllProductCategories();
  }

  @ApiOperation({ summary: 'Получить все товары одно категории' })
  @Get(':id')
  async findOneProductCategories(@Param('id') id: string) {
    return this.productCategoriesService.findOneProductCategories(id);
  }
}
