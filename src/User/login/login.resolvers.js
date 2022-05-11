import client from "../../client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export default {
  Mutation: {
    login: async (_, { loginId, password }) => {
      const user = await client.user.findFirst({
        where: {
          loginId,
        },
      });
      if (!user) {
        return {
          ok: false,
          error: "存在していないIDです。",
        };
      }
      const passwordOk = await bcrypt.compare(password, user.password);
      if (!passwordOk) {
        return {
          ok: false,
          error: "passwordを確認してください。",
        };
      }

      const token = await jwt.sign({ id: user.id }, process.env.SECRET_KEY);
      return {
        ok: true,
        token,
      };
    },
  },
};
