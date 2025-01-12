import { CartRepository } from './../cart/cart.repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../app/prisma.service';

@Injectable()
export class OrderRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cartRepository: CartRepository,
  ) {}

  async createOrderFromCart(clientId: string) {
    const cart = await this.cartRepository.findCart(clientId);

    if (!cart || cart.cartProduct.length === 0) {
      throw new Error();
    }

    const validCartProducts = cart.cartProduct.filter(
      (cartProduct) => !cartProduct.product.isDeleted,
    );

    if (validCartProducts.length === 0) {
      throw new Error('Нет доступных товаров для создания заказа.');
    }

    const orderSum = validCartProducts.reduce((price, cartProduct) => {
      price += cartProduct.product.price * cartProduct.count;
      return price;
    }, 0);

    const order = await this.prisma.order.create({
      data: {
        date: new Date(),
        sum: orderSum,
        clientId: clientId,
        orderProduct: {
          create: validCartProducts.map((item) => ({
            productId: item.productId,
            count: item.count,
          })),
        },
      },
    });
    await this.prisma.cartProduct.deleteMany({ where: { cartId: cart.id } });

    return order;
  }

  async findAllOrders(clientId: string) {
    return this.prisma.order.findMany({
      orderBy: { date: 'desc' },
      where: { clientId },
      include: { orderProduct: { include: { product: true } } },
    });
  }
}
