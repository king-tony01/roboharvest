import "dotenv/config";
import { createConnection } from "mysql2/promise";
import { readFileSync } from "fs";
async function db() {
  try {
    const database = await createConnection({
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE,
      port: 19655,
      ssl: {
        ca: readFileSync("./ca.pem"),
      },
    });

    console.log("Connected to database");
    return { database, stat: true };
  } catch (err) {
    console.log(`Error occured while trying to connect to database: ${err}`);
  }
}

export const { database, stat: isConnected } = await db();
