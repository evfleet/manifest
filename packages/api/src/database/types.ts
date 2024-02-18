import { Generated, Insertable } from "kysely";

export interface Database {
  user: UserTable;
  session: SessionTable;
}

interface UserTable {
  id: Generated<string>;
  email: string;
  hashed_password: string;
}

interface SessionTable {
  id: Generated<string>;
  user_id: string;
  expires_at: number;
}

export type CreateUser = Insertable<UserTable>;
