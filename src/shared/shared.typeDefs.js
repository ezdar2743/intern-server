import { gql } from "apollo-server";

export default gql`
  type MutationResult {
    ok: Boolean!
    error: String
  }
`;
