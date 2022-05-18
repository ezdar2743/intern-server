import client from "../../client";

export default {
  Query: {
    viewMoney: async (_, { year, month }, { loggedInUser }) =>
      await client.moneyList.findMany({
        where: {
          userId: loggedInUser.id,
          year,
          month,
        },
      }),
  },
};
