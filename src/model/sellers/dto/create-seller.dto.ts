import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, Length } from 'class-validator';

export class CreateSellerDto {
  @ApiProperty({ example: 'Abudabi Shop', required: true })
  @IsString()
  shopName: string;

  @ApiProperty({ example: 'Abu', required: true })
  @IsString()
  surname: string;

  @ApiProperty({ example: 'Dabi ', required: true })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Sha' })
  @IsString()
  @IsOptional()
  patronyc?: string;

  @ApiProperty({ example: '+79091990201', required: true })
  @IsString()
  phone: string;

  @ApiProperty({ example: 'abdabi@gmail.com', required: true })
  @IsString()
  email: string;

  @ApiProperty({ example: '12345', required: true })
  @IsString()
  password: string;

  @ApiProperty({ example: '123456789900', required: true })
  @Length(12)
  @IsString()
  INN: string;

  @ApiProperty({ example: 'logo' })
  @IsString()
  @IsOptional()
  logo?: string;
}
