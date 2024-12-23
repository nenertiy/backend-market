import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import { Roles } from 'src/common/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';

@Controller('order')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('client')
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
