import jsonwebtoken from "jsonwebtoken";
import jwt from "jsonwebtoken";
import client from "../client";

export const getUser = async (authorization) => {
  try {
    if (!authorization) {
      return null;
    }
    const { id } = await jwt.verify(authorization, process.env.SECRET_KEY);
    const user = await client.user.findUnique({
      where: { id },
    });
    return user || null;
  } catch {
    return null;
  }
};
