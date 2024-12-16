import { Injectable } from '@nestjs/common';
import { PrismaService } from '../app/prisma.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createClient(data: CreateClientDto) {
    return this.prisma.client.create({ data });
  }

  async findById(id: string) {
    return this.prisma.client.findUnique({ where: { id } });
  }

  async findByEmail(email: string) {
    return this.prisma.client.findUnique({ where: { email } });
  }

  async updateClient(id: string, data: UpdateClientDto) {
    return this.prisma.client.update({ data, where: { id } });
  }
}
