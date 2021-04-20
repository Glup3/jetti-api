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
  CreatePlayersResolver,
  // UpdatePlayersResolver,
  // DeletePlayersResolver,
  PlayerHRelationsResolver,
  FindUniquePlayerHResolver,
  FindManyPlayerHResolver,
  ResolversEnhanceMap,
  applyResolversEnhanceMap,
} from '@generated/type-graphql';
import { Authorized } from 'type-graphql';
import { customAuthChecker } from './auth';
import { CustomContext } from './customContext';

export async function createServer() {
  const server = express();
  const prisma = new PrismaClient();

  const resolversEnhanceMap: ResolversEnhanceMap = {
    Players: {
      createPlayers: [Authorized()],
    },
  };

  applyResolversEnhanceMap(resolversEnhanceMap);

  const schema = await buildSchema({
    authChecker: customAuthChecker,
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
      CreatePlayersResolver,
      // UpdatePlayersResolver,
      // DeletePlayersResolver,
      // PlayerH
      PlayerHRelationsResolver,
      FindUniquePlayerHResolver,
      FindManyPlayerHResolver,
    ],
    validate: false,
  });

  const apolloServer = new ApolloServer({
    schema,
    playground: true,
    introspection: true,
    context: (ctx): CustomContext => {
      const context: CustomContext = {
        serverContext: ctx,
        prismaContext: prisma,
      };

      return context;
    },
  });

  apolloServer.applyMiddleware({ app: server });

  return server;
}
