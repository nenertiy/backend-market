import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { CartRepository } from './cart.repository';
import { PrismaService } from '../app/prisma.service';

@Module({
  controllers: [CartController],
  providers: [CartService, CartRepository, PrismaService],
})
export class CartModule {}
