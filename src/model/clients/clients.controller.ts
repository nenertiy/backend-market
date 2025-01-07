import { Controller, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { DecodeClient } from 'src/common/decorators/decode';
import { Client } from 'src/common/types/types';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get('profile')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('client')
  @ApiOperation({ summary: 'Получить профиль через JWT' })
  async getProfile(@DecodeClient() client: Client) {
    return client;
  }

  @Patch('id')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles('client')
  @ApiOperation({ summary: 'Обновить' })
  async updateClient(@Param('id') id: string, dto: UpdateClientDto) {
    return this.clientsService.updateClient(id, dto);
  }
}
