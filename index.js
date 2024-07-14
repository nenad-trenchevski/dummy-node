import express from "express";
import router from "./routes/exampleRoute.js";
import productRouter from "./routes/productRoute.js";
import cors from "cors";

const app = express();
const PORT = 3300;
app.use(cors());

app.use(express.json());

// app.get("/api", (req, res) => {
//   res.send({ name: "jane", email: "john@example.com" });
// });

app.use("/api", router);
app.use("/api", productRouter);

app.listen(PORT, () => {
  console.log(`Server is lisening on http://localhost:${PORT}`);
});
