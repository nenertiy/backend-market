import { Body, Controller, Get, Param } from '@nestjs/common';
import { SellerCategoriesService } from './seller-categories.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('seller-categories')
export class SellerCategoriesController {
  constructor(
    private readonly sellerCategoriesService: SellerCategoriesService,
  ) {}

  @Get()
  async findAllSellerCategories() {
    return this.sellerCategoriesService.findAllSellerCategories();
  }

  @Get(':id')
  async findOneSellerCategories(@Param('id') id: string) {
    return this.sellerCategoriesService.findOneSellerCategories(id);
  }
}
