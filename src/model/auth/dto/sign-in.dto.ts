import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SignInDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'Электронная почта пользователя для входа',
  })
  @IsString()
  email: string;

  @ApiProperty({
    example: 'securepassword123',
    description: 'Пароль пользователя для входа',
  })
  @IsString()
  password: string;
}
