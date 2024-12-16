import { BadRequestException, Injectable } from '@nestjs/common';
import { PasswordService } from '../password/password.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientsRepository } from './clients.repository';

@Injectable()
export class ClientsService {
  constructor(
    private readonly clientsRepository: ClientsRepository,
    private readonly passwordService: PasswordService,
  ) {}

  async createClient(dto: CreateClientDto) {
    await this.existUserByEmail(dto.email);
    const hashPassword = await this.passwordService.hashPassword(dto.password);
    return this.clientsRepository.createClient({
      ...dto,
      password: hashPassword,
    });
  }

  async updateClient(id: string, dto: UpdateClientDto) {
    await this.existUserbyId(id);
    const hashPassword = await this.passwordService.hashPassword(dto.password);
    return this.clientsRepository.updateClient(id, {
      ...dto,
      password: hashPassword,
    });
  }

  async findById(id: string) {
    return this.clientsRepository.findById(id);
  }

  async findByEmail(email: string) {
    return this.clientsRepository.findByEmail(email);
  }

  private async existUserByEmail(email: string) {
    const exist = await this.findByEmail(email);
    if (exist) {
      throw new BadRequestException();
    }
  }

  private async existUserbyId(id: string) {
    const exist = await this.findById(id);
    if (exist) {
      throw new BadRequestException();
    }
  }
}
