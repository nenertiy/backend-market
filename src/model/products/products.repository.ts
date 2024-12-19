import { PrismaService } from './../app/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createProduct(data: CreateProductDto) {
    return this.prisma.product.create({ data });
  }

  async updateProduct(id: string, data: UpdateProductDto) {
    return this.prisma.product.update({ where: { id }, data });
  }

  async deleteProduct(id: string) {
    return this.prisma.product.update({
      where: { id },
      data: { isDeleted: true },
    });
  }

  async findAllProducts() {
    return this.prisma.product.findMany({
      where: { isDeleted: false },
      include: { productCategory: true },
    });
  }

  async findOneProduct(id: string) {
    return this.prisma.product.findUnique({
      where: { id },
      include: { productCategory: true },
    });
  }
}
