import { SellerCategoriesRepository } from './seller-categories.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SellerCategoriesService {
  constructor(
    private readonly sellerCategoriesRepository: SellerCategoriesRepository,
  ) {}

  async findAllSellerCategories() {
    return this.sellerCategoriesRepository.findAllSellerCategories();
  }

  async findOneSellerCategories(id: string) {
    return this.sellerCategoriesRepository.findOneSellerCategories(id);
  }
}
