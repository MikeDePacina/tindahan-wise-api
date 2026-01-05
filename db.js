import { Pool } from "pg"

const pool = new Pool({
  host: process.env.POSTGRES_HOST || "db",
  user: process.env.POSTGRES_USER || "postgres",
  password: process.env.POSTGRES_PASSWORD || "postgres",
  database: process.env.POSTGRES_DB || "salesdb",
  port: process.env.POSTGRES_PORT || "5432",
  idleTimeoutMillis: 30000,
});

export const query = (text, params = []) => {
  return pool.query(text, params)
}

// export default pool;