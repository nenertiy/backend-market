import { Injectable } from '@nestjs/common';
import { ReviewsRepository } from './reviews.repositroy';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewsService {
  constructor(private readonly reviewsRepository: ReviewsRepository) {}

  async createReview(dto: CreateReviewDto) {
    return this.reviewsRepository.createReview(dto);
  }

  async deleteReview(id: string) {
    return this.reviewsRepository.deleteReview(id);
  }

  async getSellerReviews(id: string) {
    return this.reviewsRepository.getSellerReviews(id);
  }
}
