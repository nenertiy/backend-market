import { Controller, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { SellersService } from './sellers.service';
import { DecodeSeller } from 'src/common/decorators/decode';
import { Seller } from 'src/common/types/types';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { UpdateSellerDto } from './dto/update-seller.dto';

@Controller('sellers')
export class SellersController {
  constructor(private readonly sellersService: SellersService) {}

  @Get('profile')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('seller')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Получить профиль через JWT' })
  async getProfile(@DecodeSeller() seller: Seller) {
    return seller;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получить профиль' })
  async findById(@Param('id') id: string) {
    return this.sellersService.findById(id);
  }

  @Get()
  @ApiOperation({ summary: 'Получить всех продавцов' })
  async findAllSeller() {
    return this.sellersService.findAllSeller();
  }

  @Patch()
  @ApiOperation({ summary: 'Обновить' })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('seller')
  async updateSeller(@DecodeSeller() seller: Seller, dto: UpdateSellerDto) {
    return this.sellersService.updateSeller(seller.id, dto);
  }
}
