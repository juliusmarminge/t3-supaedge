import { drizzle } from "drizzle-orm/vercel-postgres";
import * as schema from "./schema";

/**
 * The following produces the following error:
 * VercelPostgresError: VercelPostgresError - 'invalid_connection_string': This connection string is meant to be used with a direct connection. Make sure to use a pooled connection string or try `createClient()` instead.
 */
import { sql } from "@vercel/postgres";
export const db = drizzle(sql, { schema });

/**
 * Meanwhile, using this makes the query infinitely hang:
 */
// import { createClient } from "@vercel/postgres";
// import { env } from "~/env";
// export const db = drizzle(
//   createClient({ connectionString: env.POSTGRES_URL }),
//   { schema },
// );
