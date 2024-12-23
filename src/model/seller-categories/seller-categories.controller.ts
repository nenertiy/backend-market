import { Body, Controller, Get, Param } from '@nestjs/common';
import { SellerCategoriesService } from './seller-categories.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('seller-categories')
export class SellerCategoriesController {
  constructor(
    private readonly sellerCategoriesService: SellerCategoriesService,
  ) {}

  @ApiOperation({ summary: 'Получить все категории продавцов' })
  @Get()
  async findAllSellerCategories() {
    return this.sellerCategoriesService.findAllSellerCategories();
  }

  @ApiOperation({ summary: 'Получить всех продавцов одной категории' })
  @Get(':id')
  async findOneSellerCategories(@Param('id') id: string) {
    return this.sellerCategoriesService.findOneSellerCategories(id);
  }
}
