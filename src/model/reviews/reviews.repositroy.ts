import { Injectable } from '@nestjs/common';
import { PrismaService } from '../app/prisma.service';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createReview(clientId: string, data: CreateReviewDto) {
    return this.prisma.review.create({ data: { ...data, clientId } });
  }

  async getAllProductReviews(productId: string) {
    return this.prisma.review.findMany({ where: { productId } });
  }

  async getAllReviewsOfClient(clientId: string) {
    return this.prisma.review.findMany({ where: { clientId } });
  }

  async getSellerReviews(sellerId: string) {
    return this.prisma.review.findMany({
      take: 5,
      orderBy: { createdAt: 'asc' },
      where: { product: { sellerId } },
    });
  }

  async deleteReview(id: string) {
    return this.prisma.review.delete({ where: { id } });
  }
}
