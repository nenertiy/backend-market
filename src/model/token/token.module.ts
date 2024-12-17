import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';
import { ClientsModule } from '../clients/clients.module';
import { SellersModule } from '../sellers/sellers.module';

@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        signOptions: { expiresIn: '1h' },
        secret: config.get('ACCESS_TOKEN'),
      }),
    }),
    PassportModule,
    ClientsModule,
    SellersModule,
    ConfigModule,
  ],
  providers: [TokenService, JwtStrategy],
  exports: [TokenService, JwtStrategy],
})
export class TokenModule {}
