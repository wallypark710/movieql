import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

const opts = {
  port: 4000,
  endpoint: '/graphql-endP',
};

const server = new GraphQLServer({
  typeDefs: 'graphql/schema.graphql',
  resolvers,
  opts,
});

server.start(() =>
  console.log(
    `😄 Server running at http://localhost:${opts.port}${opts.endpoint}`,
  ),
);
