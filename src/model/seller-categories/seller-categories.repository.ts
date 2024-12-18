import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/model/app/prisma.service';

@Injectable()
export class SellerCategoriesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAllSellerCategories() {
    return this.prisma.sellerCategory.findMany();
  }

  async findOneSellerCategories(id: string) {
    return this.prisma.sellerCategory.findUnique({
      where: { id },
      include: { seller: true },
    });
  }
}
