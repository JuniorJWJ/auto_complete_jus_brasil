import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from './resolvers';


// Defina o schema diretamente 
const typeDefs = `#graphql
  type Suggestion {
    id: ID!
    term: String!
  }

  type Query {
    suggestions(term: String!): [Suggestion]
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`Servidor GraphQL rodando em ${url}`);
};

startServer().catch(error => {
  console.error('Erro ao iniciar servidor:', error);
});