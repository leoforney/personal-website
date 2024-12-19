import pg from "pg";
const { Pool } = pg;

export const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "password",
    database: "exampledb",
    port: 5432,
});