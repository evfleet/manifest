import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const databaseUrl = process.env.DATABASE_URL as string;
const queryClient = postgres(databaseUrl, {
  ssl: true,
});
const database: PostgresJsDatabase = drizzle(queryClient);

export default database;
