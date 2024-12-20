import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { OrderRepository } from './order.repository';
import { PrismaService } from '../app/prisma.service';
import { CartRepository } from '../cart/cart.repository';

@Module({
  controllers: [OrderController],
  providers: [OrderService, OrderRepository, CartRepository, PrismaService],
})
export class OrderModule {}
