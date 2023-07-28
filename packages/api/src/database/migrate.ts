import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const databaseUrl = process.env.DATABASE_URL as string;
const migrationClient = postgres(databaseUrl, {
  ssl: true,
});

const database = drizzle(migrationClient);

migrate(database, { migrationsFolder: "./src/database/migrations" });
