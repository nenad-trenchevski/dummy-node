import { query } from "../db.js";

export const getAllExamples = async () => {
  const result = await query(`SELECT * FROM users`);

  return result.rows;
};

export const createExample = async (data) => {
  console.log("data from request", data);
  const result = await query(
    "INSERT INTO users (name) VALUES ($1) RETURNING *",
    [data]
  );
  return result.rows[0];
};
