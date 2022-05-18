import client from "../../client";

export default {
  Mutation: {
    editMoney: async (
      _,
      { id, title, amount, date, year, month },
      { loggedInUser }
    ) => {
      if (!loggedInUser) {
        return {
          ok: false,
          error: "ログインしてください。",
        };
      }

      const money = await client.moneyList.findUnique({
        where: {
          id,
        },
      });
      if (!money) {
        return {
          ok: false,
          error: "編集する対象がありません。",
        };
      }
      await client.moneyList.update({
        where: { id },
        data: {
          title,
          amount,
          date,
          year,
          month,
        },
      });
      return {
        ok: true,
      };
    },
  },
};
