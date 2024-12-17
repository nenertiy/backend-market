import { IsOptional, IsString } from 'class-validator';

export class CreateSellerDto {
  @IsString()
  shopName: string;

  @IsString()
  surname: string;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  patronyc?: string;

  @IsString()
  phone: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  @IsOptional()
  logo?: string;
}
