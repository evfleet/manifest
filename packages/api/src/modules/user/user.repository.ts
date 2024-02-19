import { db } from "../../database/database.js";
import { CreateUser } from "../../database/types.js";

async function create({ id, email, hashed_password }: CreateUser) {
  const result = await db
    .insertInto("user")
    .values({
      id,
      email,
      hashed_password,
    })
    .executeTakeFirst();

  return result;
}

async function findByEmail(email: string) {
  const result = await db
    .selectFrom("user")
    .selectAll()
    .where("email", "=", email)
    .executeTakeFirst();

  return result;
}

export const userRepository = {
  create,
  findByEmail,
};
