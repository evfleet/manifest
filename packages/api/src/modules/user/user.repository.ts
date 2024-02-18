import { db } from "../../database/database.js";
import { CreateUser } from "../../database/types.js";

async function create({ email, hashed_password }: CreateUser) {
  const result = await db
    .insertInto("user")
    .values({
      email,
      hashed_password,
    })
    .executeTakeFirst();

  return result;
}

export const userRepository = {
  create,
};
