import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateProductDto {
  @ApiProperty({ example: 'Abudabi' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ example: 'Abudabi Shop' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ example: 5.3 })
  @IsNumber()
  @IsOptional()
  price?: number;

  @ApiProperty({ example: 'image' })
  @IsString()
  @IsOptional()
  img?: string;

  @ApiProperty({ example: '23123p-123xq-112' })
  @IsString()
  @IsOptional()
  productCategoryId?: string;
}
