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

  async findById(id: string) {
    return this.prisma.seller.findUnique({
      where: { id },
      include: { sellerCategory: true, products: true },
    });
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
}
