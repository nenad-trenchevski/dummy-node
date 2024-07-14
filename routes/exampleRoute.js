import { Router } from "express";
import { getExamples, postExample } from "../controllers/exampleController.js";

const router = Router();

router.get("/example", getExamples);
router.post("/example", postExample);
export default router;
