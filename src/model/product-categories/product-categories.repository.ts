import { Injectable } from '@nestjs/common';
import { PrismaService } from '../app/prisma.service';

@Injectable()
export class ProductCategoriesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAllProductCategories() {
    return this.prisma.productCategory.findMany();
  }

  async searchProductCategories(query: string) {
    return this.prisma.productCategory.findMany({
      where: { name: { contains: query, mode: 'insensitive' } },
    });
  }

  async findOneProductCategories(id: string) {
    return this.prisma.productCategory.findUnique({
      where: { id },
      include: { product: true },
    });
  }
}
