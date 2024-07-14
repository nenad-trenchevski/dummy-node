import { query } from "../db.js";

export const getAllProducts = async () => {
  const result = await query("SELECT * FROM products");

  return result.rows;
};

export const getProductById = async (id) => {
  const result = await query("SELECT * FROM products WHERE id = $1", [id]);

  return result.rows[0];
};

export const createPost = async (data) => {
  const result = await query(
    "INSERT INTO products (name, description, price) VALUES ($1, $2, $3) RETURNING *",
    [data.name, data.description, data.price]
  );

  return result.rows[0];
};

export const updateProduct = async (id, data) => {
  const result = await query(
    "UPDATE products SET name = $1, description = $2, price = $3 WHERE id = $4 RETURNING *",
    [data.name, data.description, data.price, id]
  );

  return result.rows[0];
};

export const deleteProductById = async (id) => {
  await query("DELETE FROM products WHERE id = $1", [id]);
  return { massage: "Product deleted successfully" };
};
