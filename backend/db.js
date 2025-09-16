// db.js
import sqlite3 from "sqlite3";
import { open } from "sqlite";

const db = await open({
  filename: "./database.db",
  driver: sqlite3.Database,
});

// Create tables if they don't exist
await db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    role TEXT
  );
`);

await db.exec(`
  CREATE TABLE IF NOT EXISTS screenings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    score INTEGER,
    type TEXT,
    date TEXT
  );
`);

await db.exec(`
  CREATE TABLE IF NOT EXISTS appointments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    counsellor TEXT,
    date TEXT,
    status TEXT
  );
`);

export default db;
