import { Controller, Get, UseGuards } from '@nestjs/common';
import { SellersService } from './sellers.service';
import { DecodeSeller } from 'src/common/decorators/decode';
import { Seller } from 'src/common/types/types';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('sellers')
export class SellersController {
  constructor(private readonly sellersService: SellersService) {}

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async getProfile(@DecodeSeller() seller: Seller) {
    return seller;
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async get() {
    return { message: true };
  }
}
