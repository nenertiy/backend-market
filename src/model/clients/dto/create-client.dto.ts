import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateClientDto {
  @ApiProperty({
    example: 'John',
    description: 'Имя клиента',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'Doe',
    description: 'Фамилия клиента',
  })
  @IsString()
  surname: string;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'Электронная почта клиента',
  })
  @IsString()
  email: string;

  @ApiProperty({
    example: '+1234567890',
    description: 'Номер телефона клиента',
  })
  @IsString()
  phone: string;

  @ApiProperty({
    example: 'securepassword123',
    description: 'Пароль клиента',
  })
  @IsString()
  password: string;
}
