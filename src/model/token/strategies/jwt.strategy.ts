import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { ClientsService } from 'src/model/clients/clients.service';
import { SellersService } from 'src/model/sellers/sellers.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly clientsService: ClientsService,
    private readonly sellersService: SellersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('ACCESS_TOKEN'),
    });
  }

  async validate(payload: { id: string; type: string }) {
    const { id, type } = payload;

    if (type === 'client') {
      return this.clientsService.findById(id);
    }

    if (type === 'seller') {
      return this.sellersService.findById(id);
    }

    throw new UnauthorizedException('Invalid token type');
  }
}
