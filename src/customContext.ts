import { PrismaClient } from '.prisma/client';
import { ExpressContext } from 'apollo-server-express';

export interface CustomContext {
  serverContext: ExpressContext;
  prisma: PrismaClient;
}
