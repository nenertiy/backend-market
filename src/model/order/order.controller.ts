import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import { Roles } from 'src/common/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { ApiOperation } from '@nestjs/swagger';

@Controller('order')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('client')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Получить все заказы пользователя' })
  async findAllOrders(@Param('id') id: string) {
    return this.orderService.findAllOrders(id);
  }

  @Post(':id')
  @ApiOperation({ summary: 'Создать заказ из корзины' })
  async createOrderFromCart(@Param('id') id: string) {
    return this.orderService.createOrderFromCart(id);
  }
}
