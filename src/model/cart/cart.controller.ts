import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { AddToCartDto } from './dto/addToCart.dto';
import { RemoveFromCartDto } from './dto/removeFromCart.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RolesGuard } from '../auth/guards/roles.guard';
import { ApiOperation } from '@nestjs/swagger';

@Controller('cart')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('client')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('add')
  @ApiOperation({ summary: 'Добавить в корзину' })
  async addToCart(@Body() dto: AddToCartDto) {
    return this.cartService.addToCart({ ...dto, count: dto.count | 1 });
  }

  @Delete('remove')
  @ApiOperation({ summary: 'Удалить из корзины' })
  async removeFromCart(@Body() dto: RemoveFromCartDto) {
    return this.cartService.removeFromCart(dto);
  }

  @Delete('decrease')
  @ApiOperation({ summary: 'Уменьшить количетво товаров в корзине' })
  async decreaseCount(@Body() dto: RemoveFromCartDto) {
    return this.cartService.decreaseCount(dto);
  }

  @Get(':clientId')
  @ApiOperation({ summary: 'Получить корзину пользователя' })
  async getCart(@Param('clientId') clientId: string) {
    return await this.cartService.findCart(clientId);
  }
}
