import { gql } from "apollo-server";

export default gql`
  type Query {
    viewMoney(year: Int!, month: Int): [MoneyList!]!
  }
`;
