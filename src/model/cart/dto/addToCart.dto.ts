import { IsNumber, IsString } from 'class-validator';

export class AddToCartDto {
  @IsString()
  productId: string;

  @IsNumber()
  count?: number;
}
