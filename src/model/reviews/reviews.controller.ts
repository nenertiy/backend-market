import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  async createReview(@Body() dto: CreateReviewDto) {
    return this.reviewsService.createReview(dto);
  }

  @ApiOperation({ summary: 'Получить отзывы продавца' })
  @Get('seller/:id')
  async getSellerReviews(@Param('id') id: string) {
    return this.reviewsService.getSellerReviews(id);
  }

  @ApiOperation({ summary: 'Получить отзывы клиента' })
  @Get('client/:id')
  async getAllReviewsOfClient(@Param('id') id: string) {
    return this.reviewsService.getAllReviewsOfClient(id);
  }

  @ApiOperation({ summary: 'Получить отзывы продукта' })
  @Get('product/:id')
  async getAllProductReviews(@Param('id') id: string) {
    return this.reviewsService.getAllProductReviews(id);
  }

  @Delete('id')
  async deleteReview(@Param('id') id: string) {
    return this.reviewsService.deleteReview(id);
  }
}
