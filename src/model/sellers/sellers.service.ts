import { BadRequestException, Injectable } from '@nestjs/common';
import { PasswordService } from '../password/password.service';
import { SellersRepository } from './sellers.repository';
import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';

@Injectable()
export class SellersService {
  constructor(
    private readonly sellersRepository: SellersRepository,
    private readonly passwordService: PasswordService,
  ) {}

  async createSeller(dto: CreateSellerDto) {
    await this.existUserByEmail(dto.email);
    const hashPassword = await this.passwordService.hashPassword(dto.password);
    return this.sellersRepository.createSeller({
      ...dto,
      password: hashPassword,
    });
  }

  async updateSeller(id: string, dto: UpdateSellerDto) {
    await !this.existUserbyId(id);
    const hashPassword = await this.passwordService.hashPassword(dto.password);
    const updateData = {
      ...dto,
      password: hashPassword,
      sellerCategory: dto.sellerCategoryId
        ? { connect: dto.sellerCategoryId.map((id) => ({ id })) }
        : undefined,
    };
    return this.sellersRepository.updateSeller(id, updateData);
  }

  async findByEmail(email: string) {
    return this.sellersRepository.findByEmail(email);
  }

  async findById(id: string) {
    return this.sellersRepository.findById(id);
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
