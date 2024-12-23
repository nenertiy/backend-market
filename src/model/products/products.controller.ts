import { ApiOperation } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';
import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { UpdateProductDto } from './dto/update-product.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiOperation({ summary: 'Получить все продукты' })
  @Get()
  async findAllProducts(
    @Query('search') search?: string,
    @Query('take') take?: number,
    @Query('skip') skip?: number,
  ) {
    const safeTake = Math.min(Number(take) || 10, 100); // Максимум 100 записей
    const safeSkip = Math.max(Number(skip) || 0, 0);

    if (search) {
      return this.productsService.searchProducts(search, safeSkip, safeTake);
    }
    return this.productsService.findAllProducts(safeSkip, safeTake);
  }

  @ApiOperation({ summary: 'Получить продукты в рандомном порядке' })
  @Get('random')
  async getRandomProducts() {
    return this.productsService.getRandomProducts();
  }

  @ApiOperation({ summary: 'Получить популярные продукты' })
  @Get('popular')
  async findPopularProducts() {
    return this.productsService.findPopularProducts();
  }

  @ApiOperation({ summary: 'Получить определенный продукт' })
  @Get(':id')
  async findOneProduct(@Param('id') id: string) {
    return this.productsService.findOneProduct(id);
  }

  @ApiOperation({ summary: 'Удаление продукта' })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('seller')
  @Patch('delete/:id')
  async deleteProduct(@Param('id') id: string) {
    return this.productsService.deleteProduct(id);
  }

  @ApiOperation({ summary: 'Создание продукта' })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('seller')
  @Post()
  async createProduct(@Body() dto: CreateProductDto) {
    return this.productsService.createProduct(dto);
  }

  @ApiOperation({ summary: 'Обновление продуктов' })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('seller')
  @Patch(':id')
  async updateProduct(@Param('id') id: string, @Body() dto: UpdateProductDto) {
    return this.productsService.updateProduct(id, dto);
  }
}
