import { Insertable } from "kysely";

export interface Database {
  user: UserTable;
  session: SessionTable;
}

interface UserTable {
  id: string;
  email: string;
  hashed_password: string;
}

interface SessionTable {
  id: string;
  user_id: string;
  email: string;
  expires_at: number;
}

export type CreateUser = Insertable<UserTable>;
