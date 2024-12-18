import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SignUpClientDto {
  @ApiProperty({
    example: 'John',
    description: 'Имя клиента, необходимое для регистрации',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'Doe',
    description: 'Фамилия клиента, необходимая для регистрации',
  })
  @IsString()
  surname: string;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'Электронная почта клиента, необходимая для регистрации',
  })
  @IsString()
  email: string;

  @ApiProperty({
    example: '+1234567890',
    description: 'Номер телефона клиента в международном формате',
  })
  @IsString()
  phone: string;

  @ApiProperty({
    example: 'securepassword123',
    description: 'Пароль клиента для создания учетной записи',
  })
  @IsString()
  password: string;
}
