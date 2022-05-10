import client from "../../client";
import bcrypt from "bcrypt";
export default {
  Mutation: {
    createAccount: async (_, { userName, email, name, password }) => {
      try {
        //exist already？
        const isUserExist = await client.user.findFirst({
          where: {
            OR: [{ userName }, { email }],
          },
        });
        if (isUserExist) {
          throw Error("存在しているid/emailです。");
        }
        //hash password
        const hashPassword = await bcrypt.hash(password, 10);

        //create
        await client.user.create({
          data: {
            userName,
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
