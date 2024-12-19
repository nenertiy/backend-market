import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, Length } from 'class-validator';

export class SignUpSellerDto {
  @ApiProperty({
    example: 'Abudabi Shop',
    description: 'Название магазина продавца, необходимое для регистрации',
    required: true,
  })
  @IsString()
  shopName: string;

  @ApiProperty({
    example: 'Abu',
    description: 'Фамилия продавца, необходимая для регистрации',
    required: true,
  })
  @IsString()
  surname: string;

  @ApiProperty({
    example: 'Dabi',
    description: 'Имя продавца, необходимое для регистрации',
    required: true,
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'Sha',
    description: 'Отчество продавца (опционально)',
    required: false,
  })
  @IsString()
  @IsOptional()
  patronyc?: string;

  @ApiProperty({
    example: '+79091990201',
    description: 'Номер телефона продавца в международном формате',
    required: true,
  })
  @IsString()
  phone: string;

  @ApiProperty({
    example: 'abdabi@gmail.com',
    description: 'Электронная почта продавца, необходимая для регистрации',
    required: true,
  })
  @IsString()
  email: string;

  @ApiProperty({
    example: '12345',
    description: 'Пароль продавца для создания учетной записи',
    required: true,
  })
  @IsString()
  password: string;

  @ApiProperty({ example: '123456789900', required: true })
  @Length(12)
  @IsString()
  INN: string;

  @ApiProperty({
    example: 'logo.png',
    description: 'URL логотипа магазина (опционально)',
    required: false,
  })
  @IsString()
  @IsOptional()
  logo?: string;
}
