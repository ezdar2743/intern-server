import { gql } from "apollo-server";

export default gql`
  type Mutation {
    createMoney(
      title: String!
      amount: Int!
      date: String!
      year: Int!
      month: Int!
    ): MutationResult!
  }
`;
