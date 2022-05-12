import { ApolloServer, gql } from "apollo-server";
import "dotenv/config";
import schema from "./schema";
import { getUser } from "./User/user.utils";

const server = new ApolloServer({
  schema,
  context: async ({ req, res }) => {
    return {
      loggedInUser: await getUser(req.headers.authorization),
    };
  },
});

const PORT = process.env.PORT;
server
  .listen(PORT)
  .then(() => console.log(`🚀Server is running on http://localhost:${PORT}/`));
