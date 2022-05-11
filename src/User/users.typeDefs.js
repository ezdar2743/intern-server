import { gql } from "apollo-server";

export default gql`
  type Query {
    currentUser: User
  }
  type User {
    id: Int!
    loginId: String!
    email: String!
    name: String!
    createdAt: String!
    moneyLists: [MoneyList!]!
  }
`;
