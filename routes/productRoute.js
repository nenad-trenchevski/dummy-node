import { Router } from "express";
import {
  deleteProduct,
  getProduct,
  getProducts,
  postProduct,
  putProduct,
} from "../controllers/productController.js";

const productRouter = Router();

productRouter.get("/products", getProducts);
productRouter.get("/products/:id", getProduct);
productRouter.post("/products", postProduct);
productRouter.put("/products/:id", putProduct);
productRouter.delete("/products/:id", deleteProduct);

export default productRouter;
