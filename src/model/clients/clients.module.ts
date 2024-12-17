import { Module, forwardRef } from '@nestjs/common';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { ClientsRepository } from './clients.repository';
import { TokenModule } from '../token/token.module';
import { SellersModule } from '../sellers/sellers.module';
import { PrismaService } from '../app/prisma.service';
import { PasswordService } from '../password/password.service';
import { TokenService } from '../token/token.service';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { JwtStrategy } from '../token/strategies/jwt.strategy';

@Module({
  imports: [forwardRef(() => SellersModule), forwardRef(() => TokenModule)],
  controllers: [ClientsController],
  providers: [
    ClientsService,
    ClientsRepository,
    PrismaService,
    PasswordService,
    JwtService,
    JwtStrategy,
    JwtAuthGuard,
    RolesGuard,
  ],
  exports: [ClientsService],
})
export class ClientsModule {}
