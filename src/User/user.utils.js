import jsonwebtoken from "jsonwebtoken";
import jwt from "jsonwebtoken";
import client from "../client";

export const getUser = async (Authorization) => {
  try {
    if (!Authorization) {
      return null;
    }
    const { id } = await jwt.verify(Authorization, process.env.SECRET_KEY);
    const user = await client.user.findUnique({
      where: { id },
    });
    if (user) {
      return user;
    } else {
      return null;
    }
  } catch {
    return null;
  }
};
