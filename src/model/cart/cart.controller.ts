import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
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
import { DecodeClient } from 'src/common/decorators/decode';
import { Client } from 'src/common/types/types';

@Controller('cart')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('client')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('add')
  @ApiOperation({ summary: 'Добавить в корзину' })
  async addToCart(@Body() dto: AddToCartDto, @DecodeClient() client: Client) {
    return this.cartService.addToCart(
      {
        ...dto,
        count: dto.count | 1,
      },
      client.id,
    );
  }

  @Delete('remove')
  @ApiOperation({ summary: 'Удалить из корзины' })
  async removeFromCart(
    @Body() dto: RemoveFromCartDto,
    @DecodeClient() client: Client,
  ) {
    return this.cartService.removeFromCart(dto, client.id);
  }

  @Delete('decrease')
  @ApiOperation({ summary: 'Уменьшить количетво товаров в корзине' })
  async decreaseCount(
    @Body() dto: RemoveFromCartDto,
    @DecodeClient() client: Client,
  ) {
    return this.cartService.decreaseCount(dto, client.id);
  }

  @Get(':clientId')
  @ApiOperation({ summary: 'Получить корзину пользователя' })
  async getCart(@Param('clientId') clientId: string) {
    return await this.cartService.findCart(clientId);
  }
}
