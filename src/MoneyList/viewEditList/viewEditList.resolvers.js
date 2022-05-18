import client from "../../client";

export default {
  Query: {
    viewEditList: async (_, { id }, { loggedInUser }) =>
      await client.moneyList.findUnique({
        where: {
          id,
        },
      }),
  },
};
