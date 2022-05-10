import { gql } from "apollo-server";

export default gql`
  type CreateResult {
    ok: Boolean!
    error: String
  }

  type Mutation {
    createAccount(
      loginId: String!
      email: String!
      name: String!
      password: String!
    ): CreateResult
  }
`;
