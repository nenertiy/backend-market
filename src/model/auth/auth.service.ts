import { Injectable, NotFoundException } from '@nestjs/common';
import { ClientsService } from '../clients/clients.service';
import { SellersService } from '../sellers/sellers.service';
import { TokenService } from '../token/token.service';
import { SignUpClientDto } from './dto/sign-up.client.dto';
import { SignUpSellerDto } from './dto/sign-up.seller.dto';
import { SignInDto } from './dto/sign-in.dto';
import { PasswordService } from '../password/password.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly clientsService: ClientsService,
    private readonly sellersService: SellersService,
    private readonly tokenService: TokenService,
    private readonly passwordService: PasswordService,
  ) {}

  async signUpClient(dto: SignUpClientDto) {
    const client = await this.clientsService.createClient(dto);
    return {
      accessToken: await this.tokenService.generateAccessToken(
        client.id,
        'client',
      ),
      refreshToken: await this.tokenService.generateRefreshToken(
        client.id,
        'client',
      ),
    };
  }

  async signUpSeller(dto: SignUpSellerDto) {
    const seller = await this.sellersService.createSeller(dto);
    return {
      accessToken: await this.tokenService.generateAccessToken(
        seller.id,
        'seller',
      ),
      refreshToken: await this.tokenService.generateRefreshToken(
        seller.id,
        'seller',
      ),
    };
  }

  async signInClient(dto: SignInDto) {
    const client = await this.clientsService.findByEmail(dto.email);
    if (
      !(await this.passwordService.comparePassword(
        dto.password,
        client.password,
      ))
    ) {
      throw new NotFoundException();
    }
    return {
      accessToken: await this.tokenService.generateAccessToken(
        client.id,
        'client',
      ),
      refreshToken: await this.tokenService.generateRefreshToken(
        client.id,
        'client',
      ),
    };
  }

  async signInSeller(dto: SignInDto) {
    const seller = await this.sellersService.findByEmail(dto.email);
    if (
      !(await this.passwordService.comparePassword(
        dto.password,
        seller.password,
      ))
    ) {
      throw new NotFoundException();
    }
    return {
      accessToken: await this.tokenService.generateAccessToken(
        seller.id,
        'seller',
      ),
      refreshToken: await this.tokenService.generateRefreshToken(
        seller.id,
        'seller',
      ),
    };
  }

  async refreshClient(refreshToken: string) {
    const payload = await this.tokenService.verifyRefreshToken(refreshToken);

    return {
      accessToken: await this.tokenService.generateAccessToken(
        payload.id,
        'client',
      ),
      refreshToken: await this.tokenService.generateRefreshToken(
        payload.id,
        'client',
      ),
    };
  }

  async refreshSeller(refreshToken: string) {
    const payload = await this.tokenService.verifyRefreshToken(refreshToken);

    return {
      accessToken: await this.tokenService.generateAccessToken(
        payload.id,
        'seller',
      ),
      refreshToken: await this.tokenService.generateRefreshToken(
        payload.id,
        'seller',
      ),
    };
  }
}
