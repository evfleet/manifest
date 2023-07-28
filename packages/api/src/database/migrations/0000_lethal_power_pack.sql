CREATE TABLE IF NOT EXISTS "boards" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"public_id" text NOT NULL,
	CONSTRAINT "boards_public_id_unique" UNIQUE("public_id")
);
