import { Controller, Get, Param, Post } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get(':id')
  async findAllOrders(@Param('id') id: string) {
    return this.orderService.findAllOrders(id);
  }

  @Post(':id')
  async createOrderFromCart(@Param('id') id: string) {
    return this.orderService.createOrderFromCart(id);
  }
}
