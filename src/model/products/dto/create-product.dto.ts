import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Abudabi', required: true })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Abudabi Shop', required: true })
  @IsString()
  description: string;

  @ApiProperty({ example: 5.3, required: true })
  @IsNumber()
  price: number;

  @ApiProperty({ example: 'image', required: true })
  @IsString()
  img: string;

  @ApiProperty({ example: ['23123p-123xq-112'], required: true })
  @IsString()
  productCategoryId: string[];
}
