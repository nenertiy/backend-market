import { Prisma } from '@prisma/client';

export type Client = Prisma.ClientGetPayload<{}>;

export type Seller = Prisma.SellerGetPayload<{}>;
