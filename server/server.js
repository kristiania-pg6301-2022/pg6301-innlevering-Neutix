import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { isCorrectAnswer, Questions, randomQuestion } from "./questions.js";
import { set } from "husky";

const app = express();
app.use(bodyParser.json());

let userAnswer;

app.get("/api/question", (req, res) => {
  const { question, id, answers } = randomQuestion();
  console.log("Question:", question, "ID:", id, "answers:", answers);
  res.json({ question, id, answers });
});

app.post("/api/question/answer", (req, res) => {
  res.json("ok");
  const { id, answer } = req.body;
  const question = findQuestion(id);
  console.log("id:", id, "answer:", answer);
  function findQuestion(id) {
    return Questions.find((q) => {
      return q.id === id;
    });
  }
  console.log("Find question:", findQuestion(id));

  if (isCorrectAnswer(question, answer)) {
    userAnswer = "correct";
  } else {
    userAnswer = "wrong";
  }
  console.log("outside:", userAnswer);
});

app.get("/api/question/result", (req, res) => {
  res.json(userAnswer);
});

app.use(express.static(path.resolve("../client/dist")));

app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    return res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`server started on http://localhost:${server.address().port}`);
});
