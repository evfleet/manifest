import { sql } from "drizzle-orm";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";

import client from "@/database";
import { boards } from "@/database/schema";
import nanoid from "@/lib/nanoid";

const create = async (params: any, transaction?: any) => {
  const database: PostgresJsDatabase = transaction || client;
  const result = await database
    .insert(boards)
    .values({
      name: "test",
      public_id: nanoid(),
    })
    .returning();

  return result;
};

const getById = async (id: string) => {
  const result = await client.execute(sql`SELECT NOW()`);

  return result;
};

export default {
  create,
  getById,
};
