import client from "../../client";

export default {
  Mutation: {
    deleteMoney: async (_, { id }, { loggedInUser }) => {
      if (!loggedInUser) {
        return {
          ok: false,
          error: "ログインしてください。",
        };
      }

      const money = await client.moneyList.findUnique({
        where: { id },
      });
      if (!money) {
        return {
          ok: false,
          error: "削除する対象がありません。",
        };
      } else {
        await client.moneyList.delete({
          where: {
            id,
          },
        });
        return {
          ok: true,
        };
      }
    },
  },
};
