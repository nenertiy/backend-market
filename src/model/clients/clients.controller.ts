import { Controller } from '@nestjs/common';
import { ClientsService } from './clients.service';

@Controller('users')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}
}
