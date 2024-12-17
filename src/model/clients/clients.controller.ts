import { Controller, Get, UseGuards } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { DecodeClient } from 'src/common/decorators/decode';
import { Client } from 'src/common/types/types';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async getProfiel(@DecodeClient() client: Client) {
    return client;
  }
}
