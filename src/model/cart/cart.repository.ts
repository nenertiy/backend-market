import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../app/prisma.service';
import { Prisma } from '@prisma/client';
import { AddToCartDto } from './dto/addToCart.dto';
import { RemoveFromCartDto } from './dto/removeFromCart.dto';

@Injectable()
export class CartRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findCart(clientId: string) {
    return this.prisma.cart.findUnique({
      where: { clientId },
      include: {
        cartProduct: {
          orderBy: { product: { name: 'asc' } },
          include: {
            product: true,
          },
        },
      },
    });
  }

  async addToCart(dto: AddToCartDto) {
    const cart = await this.findCart(dto.clientId);
    if (!cart) {
      const newCart = await this.createCart(
        dto.clientId,
        dto.productId,
        dto.count,
      );
      return newCart;
    }
    const cartProduct = cart.cartProduct.find(
      (item) => item.productId === dto.productId,
    );

    if (cartProduct) {
      return await this.prisma.cartProduct.update({
        where: {
          cartId_productId: {
            cartId: cartProduct.cartId,
            productId: cartProduct.productId,
          },
        },
        data: { count: cartProduct.count + dto.count },
      });
    }
    return await this.prisma.cartProduct.create({
      data: {
        cartId: cart.id,
        productId: dto.productId,
        count: dto.count,
      },
    });
  }

  async removeFromCart(dto: RemoveFromCartDto) {
    const cart = await this.findCart(dto.clientId);
    if (!cart) {
      throw new NotFoundException();
    }
    const cartProduct = cart.cartProduct.find(
      (item) => item.productId === dto.productId,
    );
    if (!cartProduct) {
      throw new NotFoundException('Product not found in cart');
    }
    return await this.prisma.cartProduct.delete({
      where: {
        cartId_productId: {
          cartId: cartProduct.cartId,
          productId: cartProduct.productId,
        },
      },
    });
  }

  async decreaseCount(dto: RemoveFromCartDto) {
    const cart = await this.findCart(dto.clientId);
    if (!cart) {
      throw new NotFoundException();
    }
    const cartProduct = cart.cartProduct.find(
      (item) => item.productId === dto.productId,
    );
    if (!cartProduct) {
      throw new NotFoundException('Product not found in cart');
    }
    if (cartProduct.count > 1) {
      return await this.prisma.cartProduct.update({
        where: {
          cartId_productId: {
            cartId: cartProduct.cartId,
            productId: cartProduct.productId,
          },
        },
        data: {
          count: cartProduct.count - 1,
        },
      });
    }
    return await this.prisma.cartProduct.delete({
      where: {
        cartId_productId: {
          cartId: cartProduct.cartId,
          productId: cartProduct.productId,
        },
      },
    });
  }

  private async createCart(
    clientId: string,
    productId: string,
    count: number = 1,
  ) {
    return this.prisma.cart.create({
      data: {
        clientId,
        cartProduct: {
          create: [
            {
              productId,
              count,
            },
          ],
        },
      } as Prisma.CartUncheckedCreateInput,
    });
  }
}
