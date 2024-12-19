import { Injectable } from '@nestjs/common';
import { CartRepository } from './cart.repository';
import { AddToCartDto } from './dto/addToCart.dto';
import { RemoveFromCartDto } from './dto/removeFromCart.dto';

@Injectable()
export class CartService {
  constructor(private readonly cartRepository: CartRepository) {}

  async findCart(id: string) {
    return this.cartRepository.findCart(id);
  }

  async addToCart(dto: AddToCartDto) {
    return this.cartRepository.addToCart(dto);
  }

  async removeFromCart(dto: RemoveFromCartDto) {
    return this.cartRepository.removeFromCart(dto);
  }

  async decreaseCount(cliendId: string, productId: string, count: number = 1) {
    return this.cartRepository.decreaseCount(cliendId, productId, count);
  }
}
