import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpClientDto } from './dto/sign-up.client.dto';
import { SignInDto } from './dto/sign-in.dto';
import { RefreshDto } from './dto/refresh.dto';
import { SignUpSellerDto } from './dto/sign-up.seller.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('client/sign-up')
  async signUpClient(@Body() dto: SignUpClientDto) {
    return this.authService.signUpClient(dto);
  }

  @Post('client/sign-in')
  async signInClient(@Body() dto: SignInDto) {
    return this.authService.signInClient(dto);
  }

  @Post('client/refresh')
  async refreshClient(@Body() dto: RefreshDto) {
    return this.authService.refreshClient(dto.refreshToken);
  }

  @Post('seller/sign-up')
  async signUpSeller(@Body() dto: SignUpSellerDto) {
    return this.authService.signUpSeller(dto);
  }

  @Post('seller/sign-in')
  async signInSeller(@Body() dto: SignInDto) {
    return this.authService.signInSeller(dto);
  }

  @Post('seller/refresh')
  async refreshSeller(@Body() dto: RefreshDto) {
    return this.authService.refreshSeller(dto.refreshToken);
  }
}
