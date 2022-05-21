import express from "express";
import cors from "cors";
import { newResponse, newNewResponse } from "./books.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/knjige", (req, res) => {
  res.send(newResponse);
});

app.get("/knjige/:id", (req, res) => {
  const id = Number(req.params.id);
  const book = newNewResponse.find((book) => book.id === id);
  res.send(book);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
