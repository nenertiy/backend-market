import { PrismaService } from './../app/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createProduct(data: CreateProductDto, sellerId: string) {
    return this.prisma.product.create({
      data: {
        name: data.name,
        description: data.description,
        price: data.price,
        img: data.img,
        productCategory: { connect: { id: data.productCategoryId } },
        seller: {
          connect: { id: sellerId },
        },
      },
    });
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

  async searchProducts(query: string, take: number, skip: number) {
    const products = await this.prisma.product.findMany({
      take,
      skip,
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { description: { contains: query, mode: 'insensitive' } },
        ],
      },
      include: { productCategory: true },
    });

    const productsWithRatings = await Promise.all(
      products.map(async (product) => {
        const rating = await this.calculateProductRating(product.id);
        return { ...product, rating };
      }),
    );

    return productsWithRatings;
  }

  async findAllProducts(take: number, skip: number) {
    const products = await this.prisma.product.findMany({
      take,
      skip,
      where: { isDeleted: false, isAvailable: true },
      include: { productCategory: true },
    });

    const productsWithRatings = await Promise.all(
      products.map(async (product) => {
        const rating = await this.calculateProductRating(product.id);
        return { ...product, rating };
      }),
    );

    return productsWithRatings;
  }

  async findPopularProducts() {
    return this.prisma.product.findMany({
      where: { isPopular: true, isDeleted: false, isAvailable: true },
    });
  }

  async findOneProduct(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: { productCategory: true, review: { include: { client: true } } },
    });

    const rating = await this.calculateProductRating(id);

    return { ...product, rating };
  }

  async getRandomProducts() {
    return this.prisma.product
      .findMany({
        where: { isDeleted: false, isAvailable: true },
        include: { productCategory: true },
        orderBy: {
          id: 'asc',
        },
      })
      .then((products) => {
        return products.sort(() => Math.random() - 0.5);
      });
  }

  async calculateProductRating(productId: string) {
    const result = await this.prisma.review.aggregate({
      _avg: {
        rating: true,
      },
      where: {
        product: {
          id: productId,
        },
      },
    });

    return result._avg.rating || 0;
  }
}
