import { gql } from "apollo-server";

export default gql`
  type Query {
    seeUser: User
  }
  type User {
    id: Int!
    userName: String!
    email: String!
    name: String!
    createdAt: String!
    moneyLists: [MoneyList!]!
  }
`;
