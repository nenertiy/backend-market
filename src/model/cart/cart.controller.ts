import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { AddToCartDto } from './dto/addToCart.dto';
import { RemoveFromCartDto } from './dto/removeFromCart.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('add')
  async addToCart(@Body() dto: AddToCartDto) {
    return this.cartService.addToCart({ ...dto, count: dto.count | 1 });
  }

  @Delete('remove')
  async removeFromCart(@Body() dto: RemoveFromCartDto) {
    return this.cartService.removeFromCart(dto);
  }

  @Patch('decrease')
  async decreaseCount(
    @Body() clientId: string,
    productId: string,
    count: number,
  ) {
    return this.cartService.decreaseCount(clientId, productId, count);
  }

  @Get(':clientId')
  async getCart(@Param('clientId') clientId: string) {
    return await this.cartService.findCart(clientId);
  }
}
