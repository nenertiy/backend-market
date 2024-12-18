import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateClientDto {
  @ApiPropertyOptional({
    example: 'John',
    description: 'Имя клиента (опционально)',
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({
    example: 'Doe',
    description: 'Фамилия клиента (опционально)',
  })
  @IsString()
  @IsOptional()
  surname?: string;

  @ApiPropertyOptional({
    example: 'john.doe@example.com',
    description: 'Электронная почта клиента (опционально)',
  })
  @IsString()
  @IsOptional()
  email?: string;

  @ApiPropertyOptional({
    example: '+1234567890',
    description: 'Номер телефона клиента (опционально)',
  })
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiPropertyOptional({
    example: 'securepassword123',
    description: 'Пароль клиента (опционально)',
  })
  @IsString()
  @IsOptional()
  password?: string;
}
