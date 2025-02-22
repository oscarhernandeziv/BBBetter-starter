import { type ResultSet, createClient } from "@libsql/client";
import type { ExtractTablesWithRelations } from "drizzle-orm";
import { drizzle } from "drizzle-orm/libsql";
import type { SQLiteTransaction } from "drizzle-orm/sqlite-core";

import { sessions, users } from "./schema";

// Setup sqlite database connection
const client = createClient({
	url: process.env.DATABASE_URL ?? "file:sqlite.db",
	authToken: process.env.DATABASE_AUTH_TOKEN,
});
export const db = drizzle(client, { schema: { users, sessions } });

// Export Transaction type to be used in repositories
type Schema = {
	users: typeof users;
	sessions: typeof sessions;
};
export type Transaction = SQLiteTransaction<
	"async",
	ResultSet,
	Schema,
	ExtractTablesWithRelations<Schema>
>;
