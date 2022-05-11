import { gql } from "apollo-server";

export default gql`
  type User {
    id: Int!
    loginId: String!
    email: String!
    name: String!
    createdAt: String!
    moneyLists: [MoneyList!]!
  }
`;
