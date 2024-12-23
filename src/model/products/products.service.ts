import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsRepository } from './products.repository';
import { Injectable, Param } from '@nestjs/common';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async searchProducts(query: string, skip: number, take: number) {
    return this.productsRepository.searchProducts(query, take, skip);
  }

  async findAllProducts(skip: number, take: number) {
    return this.productsRepository.findAllProducts(take, skip);
  }

  async findPopularProducts() {
    return this.productsRepository.findPopularProducts();
  }

  async findOneProduct(id: string) {
    return this.productsRepository.findOneProduct(id);
  }

  async createProduct(dto: CreateProductDto) {
    return this.productsRepository.createProduct(dto);
  }

  async updateProduct(id: string, dto: UpdateProductDto) {
    return this.productsRepository.updateProduct(id, dto);
  }

  async deleteProduct(id: string) {
    return this.productsRepository.deleteProduct(id);
  }

  async getRandomProducts() {
    return this.productsRepository.getRandomProducts();
  }
}
