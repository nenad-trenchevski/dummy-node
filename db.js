import pg from "pg";

const dbClient = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "postgres123",
  port: "5432",
});

dbClient
  .connect()
  .then(() => console.log("Database connected sucessfully"))
  .catch((err) => console.error("Database connection error", err));

const query = (text, params) => dbClient.query(text, params);

export { query };
