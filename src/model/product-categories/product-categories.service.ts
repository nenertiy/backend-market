import { ProductCategoriesRepository } from './product-categories.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductCategoriesService {
  constructor(
    private readonly productCategoriesRepository: ProductCategoriesRepository,
  ) {}

  async findAllProductCategories() {
    return this.productCategoriesRepository.findAllProductCategories();
  }

  async searchProductCategories(query: string) {
    return this.productCategoriesRepository.searchProductCategories(query);
  }

  async findOneProductCategories(id: string) {
    return this.productCategoriesRepository.findOneProductCategories(id);
  }
}
