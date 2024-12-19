import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsRepository } from './products.repository';
import { Injectable, Param } from '@nestjs/common';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async findAllProducts() {
    return this.productsRepository.findAllProducts();
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
