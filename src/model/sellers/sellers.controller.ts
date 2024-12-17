import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { SellersService } from './sellers.service';
import { DecodeSeller } from 'src/common/decorators/decode';
import { Seller } from 'src/common/types/types';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';

@Controller('sellers')
export class SellersController {
  constructor(private readonly sellersService: SellersService) {}

  @Get('profile')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('seller')
  async getProfile(@DecodeSeller() seller: Seller) {
    return seller;
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.sellersService.findById(id);
  }
}
