import express from "express";
import { isCorrectAnswer, Questions, randomQuestion } from "./questions.js";
import path from "path";
import bodyParser from "body-parser";

const app = express();

app.get("/api/question/random", (req, res) => {
  const question = randomQuestion();
  res.json(question);
});

app.use(express.static(path.resolve("../client/dist")));
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    return res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

const server = app.listen(process.env.PORT || 5000, () => {
  console.log(`server started on http://localhost:${server.address().port}`);
});
