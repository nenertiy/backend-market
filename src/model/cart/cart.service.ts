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

  async addToCart(dto: AddToCartDto, id: string) {
    return this.cartRepository.addToCart(dto, id);
  }

  async removeFromCart(dto: RemoveFromCartDto, id: string) {
    return this.cartRepository.removeFromCart(dto, id);
  }

  async decreaseCount(dto: RemoveFromCartDto, id: string) {
    return this.cartRepository.decreaseCount(dto, id);
  }
}
