import { Module } from '@nestjs/common';
import { PrismaService } from '../app/prisma.service';
import { PasswordModule } from '../password/password.module';
import { ClientsController } from './clients.controller';
import { ClientsRepository } from './clients.repository';
import { ClientsService } from './clients.service';

@Module({
  controllers: [ClientsController],
  providers: [ClientsService, ClientsRepository, PrismaService],
  imports: [PasswordModule],
})
export class ClientsModule {}
