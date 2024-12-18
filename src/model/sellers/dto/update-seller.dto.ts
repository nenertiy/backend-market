import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsOptional,
  IsString,
  IsNumber,
  Matches,
  Length,
  IsArray,
} from 'class-validator';

export class UpdateSellerDto {
  @ApiPropertyOptional({
    example: 'Abudabi Shop',
    description: 'Название магазина',
  })
  @IsString()
  @IsOptional()
  shopName?: string;

  @ApiPropertyOptional({ example: 'Abu', description: 'Фамилия продавца' })
  @IsString()
  @IsOptional()
  surname?: string;

  @ApiPropertyOptional({ example: 'Dabi', description: 'Имя продавца' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({ example: 'Sha', description: 'Отчество продавца' })
  @IsString()
  @IsOptional()
  patronyc?: string;

  @ApiPropertyOptional({
    example: '+79091990201',
    description: 'Номер телефона в международном формате',
  })
  @IsString()
  @IsOptional()
  @Matches(/^\+\d{11,15}$/, {
    message: 'Phone number must be in international format starting with +',
  })
  phone?: string;

  @ApiPropertyOptional({
    example: 'abdabi@gmail.com',
    description: 'Электронная почта продавца',
  })
  @IsEmail({}, { message: 'Invalid email format' })
  @IsOptional()
  email?: string;

  @ApiPropertyOptional({
    example: 'newpassword123',
    description: 'Пароль продавца, от 5 до 20 символов',
  })
  @IsString()
  @IsOptional()
  @Length(5, 20, {
    message: 'Password must be between 5 and 20 characters long',
  })
  password?: string;

  @ApiPropertyOptional({
    example: 'logo-url.png',
    description: 'URL логотипа продавца',
  })
  @IsString()
  @IsOptional()
  logo?: string;

  @ApiPropertyOptional({
    example: [1, 2, 3],
    description: 'Массив ID категорий продавца',
  })
  @IsArray()
  @IsOptional()
  @IsNumber(
    {},
    { each: true, message: 'Each sellerCategoryId must be a number' },
  )
  sellerCategoryId?: number[];
}
