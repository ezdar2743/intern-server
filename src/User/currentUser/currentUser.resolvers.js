import client from "../../client";

export default {
  Query: {
    currentUser: (_, __, { loggedInUser }) =>
      client.user.findUnique({
        where: {
          id: loggedInUser.id,
        },
      }),
  },
};
