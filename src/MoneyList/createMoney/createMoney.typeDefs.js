import { gql } from "apollo-server";

export default gql`
  type CreateResult {
    ok: Boolean!
    error: String
  }

  type Mutation {
    createMoney(
      title: String!
      amount: Int!
      date: String!
      year: Int!
      month: Int!
    ): CreateResult!
  }
`;
