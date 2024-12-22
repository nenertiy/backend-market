import { Injectable } from '@nestjs/common';
import { ReviewsRepository } from './reviews.repositroy';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewsService {
  constructor(private readonly reviewsRepository: ReviewsRepository) {}

  async createReview(dto: CreateReviewDto) {
    return this.reviewsRepository.createReview(dto);
  }

  async getSellerReviews(id: string) {
    return this.reviewsRepository.getSellerReviews(id);
  }

  async getAllProductReviews(id: string) {
    return this.reviewsRepository.getAllProductReviews(id);
  }

  async getAllReviewsOfClient(id: string) {
    return this.reviewsRepository.getAllReviewsOfClient(id);
  }

  async deleteReview(id: string) {
    return this.reviewsRepository.deleteReview(id);
  }
}
