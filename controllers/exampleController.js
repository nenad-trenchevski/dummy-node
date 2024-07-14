import { createExample, getAllExamples } from "../models/exampleModel.js";

export const getExamples = async (req, res) => {
  try {
    const result = await getAllExamples();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

export const postExample = async (req, res) => {
  const { data } = req.body;

  try {
    // result from the database
    const result = await createExample(data);

    res.status(201).json(result);
  } catch (e) {
    res.status(500).send("Server error");
  }
};
