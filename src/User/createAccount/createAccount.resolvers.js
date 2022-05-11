import client from "../../client";
import bcrypt from "bcrypt";

export default {
  Mutation: {
    createAccount: async (_, { loginId, email, name, password }) => {
      try {
        const isUserExist = await client.user.findFirst({
          where: {
            OR: [{ loginId }, { email }],
          },
        });
        if (isUserExist) {
          throw Error("存在しているuserName/emailです。");
        }
        const hashPassword = await bcrypt.hash(password, 10);

        await client.user.create({
          data: {
            loginId,
            email,
            name,
            password: hashPassword,
          },
        });
        return {
          ok: true,
        };
      } catch (error) {
        return error;
      }
    },
  },
};
