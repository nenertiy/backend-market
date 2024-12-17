import { IsString } from 'class-validator';

export class SignUpClientDto {
  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsString()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  password: string;
}
