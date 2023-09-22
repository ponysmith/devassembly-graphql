import Koa from 'koa';
import mount from 'koa-mount';
import { graphqlHTTP } from 'koa-graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from './types';
import { resolvers } from './resolvers';
import { db } from './db/db';
import { redis } from './redis/redis';

const app = new Koa();
app.context.db = db;
app.context.redis = redis;

app.use(
  mount(
    '/graphql',
    graphqlHTTP({
      schema: makeExecutableSchema({ typeDefs, resolvers }),
      graphiql: { editorTheme: 'nord' },
    }),
  ),
);

app.listen({ port: 4000 });