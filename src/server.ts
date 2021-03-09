import express from 'express';
import { resolvers } from '@generated/type-graphql';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import { PrismaClient } from '@prisma/client';

export async function createServer() {
  const server = express();
  const prisma = new PrismaClient();

  const schema = await buildSchema({
    resolvers,
    validate: false,
  });

  const apolloServer = new ApolloServer({
    schema,
    playground: true,
    context: () => ({ prisma }),
  });

  apolloServer.applyMiddleware({ app: server });

  return server;
}
