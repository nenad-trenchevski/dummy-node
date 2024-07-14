import {
  createPost,
  deleteProductById,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../models/productModel.js";

const validateProduct = (data) => {
  const { name, description, price } = data;
  if (!name || !description || price === undefined) {
    return "Name, description, and price are required.";
  }

  if (typeof price !== "number" || price < 0) {
    return "Price must be a non-negative number.";
  }
  return null;
};

export const getProducts = async (req, res) => {
  try {
    const result = await getAllProducts();

    res.status(200).json(result);
  } catch (e) {
    res.status(500).send("Server error");
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await getProductById(id);
    console.log("the result", result);

    if (!result) {
      res.status(400).send(`No product with id of ${id}`);
    }
    res.status(200).json(result);
  } catch (e) {
    res.status(500).send("Server error");
  }
};

export const postProduct = async (req, res) => {
  const validationError = validateProduct(req.body);

  if (validationError) {
    return res.status(400).send(validationError);
  }

  try {
    // add product to the database
    const result = await createPost(req.body);

    res.status(201).json(result);
  } catch (e) {
    res.status(500).send("Server error");
  }
};

export const putProduct = async (req, res) => {
  // get the dynamic id from the route's parameters
  const { id } = req.params;
  const validationError = validateProduct(req.body);

  if (validationError) {
    res.status(500).send(validationError);
  }

  try {
    const result = await updateProduct(id, req.body);

    if (!result) {
      res.status(400).send(`No product with id of ${id}`);
    }
    res.status(200).json(result);
  } catch (e) {
    res.status(500).send("Server error");
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await deleteProductById(id);

    res.status(200).json(result);
  } catch (e) {
    res.status(500).send("Server error");
  }
};
