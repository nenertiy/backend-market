import { PrismaService } from './../app/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsRepository {
  constructor(private readonly prisma: PrismaService) {}
}
