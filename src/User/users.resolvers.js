import client from "../client";

export default {
  User: {
    moneyLists: ({ id }) =>
      client.user
        .findUnique({
          where: {
            id,
          },
        })
        .moneyLists(),
  },
};
