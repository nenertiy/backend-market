import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { ClientsService } from 'src/model/clients/clients.service';
import { SellersService } from 'src/model/sellers/sellers.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly configService: ConfigService,
    private readonly clientsService: ClientsService,
    private readonly sellersService: SellersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('ACCESS_TOKEN'),
    });
  }

  async validate(payload: { id: string; type: string }) {
    console.log('Payload:', payload);
    const { id, type } = payload;

    let user;
    if (type === 'client') {
      user = await this.clientsService.findById(id);
    } else if (type === 'seller') {
      user = await this.sellersService.findById(id);
    }

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    return { ...user, type }; // Ensure the `type` is included in the returned object
  }
}
