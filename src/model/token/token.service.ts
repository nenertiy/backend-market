import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async generateAccessToken(id: string, type: 'client' | 'seller') {
    return this.jwtService.sign({ id, type });
  }

  async generateRefreshToken(id: string, type: 'client' | 'seller') {
    return this.jwtService.sign(
      { id, type },
      { secret: this.configService.get('REFRESH_TOKEN'), expiresIn: '30d' },
    );
  }

  async verifyAccessToken(token: string) {
    try {
      return this.jwtService.verify(token, {
        secret: this.configService.get('ACCESS_TOKEN'),
      });
    } catch {
      throw new UnauthorizedException();
    }
  }

  async verifyRefreshToken(token: string) {
    try {
      return this.jwtService.verify(token, {
        secret: this.configService.get('REFRESH_TOKEN'),
      });
    } catch {
      throw new UnauthorizedException();
    }
  }
}
