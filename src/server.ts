import express from 'express';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import { PrismaClient } from '@prisma/client';
import {
  MatchRelationsResolver,
  FindUniqueMatchResolver,
  FindManyMatchResolver,
  AggregateMatchResolver,
  // CreateMatchResolver,
  // UpdateMatchResolver,
  // DeleteMatchResolver,
  TeamRelationsResolver,
  FindUniqueTeamResolver,
  FindManyTeamResolver,
  // CreateTeamResolver,
  // UpdateTeamResolver,
  // DeleteTeamResolver,
  PlayersRelationsResolver,
  FindUniquePlayersResolver,
  FindManyPlayersResolver,
  // CreatePlayersResolver,
  // UpdatePlayersResolver,
  // DeletePlayersResolver,
} from '@generated/type-graphql';

export async function createServer() {
  const server = express();
  const prisma = new PrismaClient();

  const schema = await buildSchema({
    resolvers: [
      // Match
      MatchRelationsResolver,
      FindManyMatchResolver,
      FindUniqueMatchResolver,
      AggregateMatchResolver,
      // CreateMatchResolver,
      // UpdateMatchResolver,
      // DeleteMatchResolver,
      // Team
      TeamRelationsResolver,
      FindUniqueTeamResolver,
      FindManyTeamResolver,
      // CreateTeamResolver,
      // UpdateTeamResolver,
      // DeleteTeamResolver,
      // Player
      PlayersRelationsResolver,
      FindUniquePlayersResolver,
      FindManyPlayersResolver,
      // CreatePlayersResolver,
      // UpdatePlayersResolver,
      // DeletePlayersResolver,
    ],
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
