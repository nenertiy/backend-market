import { CreateProductDto } from './dto/create-product.dto';
import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
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

  @Get()
  async findAllProducts() {
    return this.productsService.findAllProducts();
  }

  @Get('random')
  async getRandomProducts() {
    return this.productsService.getRandomProducts();
  }

  @Get(':id')
  async findOneProduct(@Param('id') id: string) {
    return this.productsService.findOneProduct(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('seller')
  @Patch('delete/:id')
  async deleteProduct(@Param('id') id: string) {
    return this.productsService.deleteProduct(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('seller')
  @Post()
  async createProduct(@Body() dto: CreateProductDto) {
    return this.productsService.createProduct(dto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('seller')
  @Patch(':id')
  async updateProduct(@Param('id') id: string, @Body() dto: UpdateProductDto) {
    return this.productsService.updateProduct(id, dto);
  }
}
