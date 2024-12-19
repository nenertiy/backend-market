import { IsNumber, IsString } from 'class-validator';

export class AddToCartDto {
  @IsString()
  clientId: string;

  @IsString()
  productId: string;

  @IsNumber()
  count?: number;
}
