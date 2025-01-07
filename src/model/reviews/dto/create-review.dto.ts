import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateReviewDto {
  @ApiProperty({
    example: 'd0d28ef7-2ee7-4bf6-b6d4-0ef2196d8f28',
    required: true,
  })
  @IsString()
  productId: string;

  // @ApiProperty({
  //   example: 'd0d28ef7-2ee7-4bf6-b6d4-0ef2196d8f28',
  //   required: true,
  // })
  // @IsString()
  // clientId: string;

  @ApiProperty({
    example: '5',
    required: true,
  })
  @IsNumber()
  @MaxLength(5)
  @MinLength(1)
  rating: number;

  @ApiProperty({
    example: 'This good is the best',
    required: true,
  })
  @IsString()
  @IsOptional()
  description?: string;
}
