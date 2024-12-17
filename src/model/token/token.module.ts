import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { TokenService } from './token.service';
import { ClientsModule } from '../clients/clients.module';
import { JwtStrategy } from './strategies/jwt.strategy';
import { SellersService } from '../sellers/sellers.service';
import { SellersModule } from '../sellers/sellers.module';

@Module({
  imports: [
    PassportModule,
    ConfigModule,
    SellersModule,
    forwardRef(() => ClientsModule), // forwardRef to resolve circular dependency
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        secret: config.get('ACCESS_TOKEN'),
        signOptions: { expiresIn: '1h' },
      }),
    }),
  ],
  providers: [TokenService, JwtStrategy],
  exports: [TokenService, JwtStrategy],
})
export class TokenModule {}
