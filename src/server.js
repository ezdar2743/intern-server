import { ApolloServer, gql } from "apollo-server";
import "dotenv/config";
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "hihii",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const PORT = process.env.PORT;
server
  .listen(PORT)
  .then(() => console.log(`🚀Server is running on http://localhost:${PORT}/`));
