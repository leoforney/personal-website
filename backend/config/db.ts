import pg from "pg";
import dotenv from "dotenv";

// Load environment variables from .env file (if not already loaded)
dotenv.config();

const { Pool } = pg;

// Configure the connection pool using environment variables
export const pool = new Pool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_DATABASE || "exampledb",
    port: parseInt(process.env.DB_PORT || "5432", 10),
});