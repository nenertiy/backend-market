import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );
    console.log('Required Roles:', requiredRoles);

    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    console.log('Decoded User:', user);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    if (!requiredRoles.includes(user.type)) {
      console.log('Access Denied: User type mismatch.');
      throw new ForbiddenException('Insufficient permissions');
    }

    console.log('Access Granted');
    return true;
  }
}
