import express, { Application } from "express";

import "dotenv/config";

const app: Application = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// listen
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
