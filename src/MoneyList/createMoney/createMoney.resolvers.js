import client from "../../client";

export default {
  Mutation: {
    createMoney: async (
      _,
      { title, amount, date, year, month },
      { loggedInUser }
    ) => {
      if (!loggedInUser) {
        return {
          ok: false,
          error: "ログインしてください。",
        };
      }
      await client.moneyList.create({
        data: {
          title,
          amount,
          date,
          year,
          month,
          user: {
            connect: { id: loggedInUser.id },
          },
        },
      });
      return {
        ok: true,
      };
    },
  },
};
