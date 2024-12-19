import { IsString } from 'class-validator';

export class RemoveFromCartDto {
  @IsString()
  clientId: string;

  @IsString()
  productId: string;
}
