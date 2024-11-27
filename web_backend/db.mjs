import pg from "pg";


export const pool = new pg.Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "7000",
  database: "cat",
});