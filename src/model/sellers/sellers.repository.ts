import { Injectable } from '@nestjs/common';
import { PrismaService } from '../app/prisma.service';
import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';

@Injectable()
export class SellersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createSeller(data: CreateSellerDto) {
    return this.prisma.seller.create({ data });
  }

  async findAllSeller() {
    return this.prisma.seller.findMany({
      include: { sellerCategory: true },
    });
  }

  async findById(id: string) {
    const seller = await this.prisma.seller.findUnique({
      where: { id },
      include: {
        sellerCategory: true,
        products: {
          where: { isDeleted: false },
          include: { review: true },
        },
      },
    });

    if (!seller) {
      throw new Error('Продавец не найден');
    }

    const rating = await this.calculateSellerRating(id);

    return { ...seller, rating };
  }

  async findByEmail(email: string) {
    return this.prisma.seller.findUnique({ where: { email } });
  }

  async updateSeller(id: string, data: UpdateSellerDto) {
    return this.prisma.seller.update({
      data,
      where: { id },
      include: { sellerCategory: true },
    });
  }

  private async calculateSellerRating(sellerId: string) {
    const result = await this.prisma.review.aggregate({
      _avg: {
        rating: true,
      },
      where: {
        product: {
          sellerId,
        },
      },
    });

    return result._avg.rating || 0;
  }
}
