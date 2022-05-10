import { gql } from "apollo-server";

export default gql`
  type MoneyList {
    id: Int!
    amount: Int!
    title: String!
    date: String!
    year: Int!
    month: Int!
  }
`;
