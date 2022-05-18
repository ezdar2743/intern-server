import { gql } from "apollo-server";

export default gql`
  type Query {
    viewEditList(id: Int!): MoneyList
  }
`;
