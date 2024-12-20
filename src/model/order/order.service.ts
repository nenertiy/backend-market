import { OrderRepository } from './order.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepository: OrderRepository) {}

  async findAllOrders(id: string) {
    return this.orderRepository.findAllOrders(id);
  }

  async createOrderFromCart(id: string) {
    return this.orderRepository.createOrderFromCart(id);
  }
}
