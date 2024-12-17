import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Client, Seller } from '../types/types';

export const DecodeClient = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user as Client;
  },
);

export const DecodeSeller = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user as Seller;
  },
);
