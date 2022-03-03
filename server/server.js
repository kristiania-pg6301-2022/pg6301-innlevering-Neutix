import express from "express";
import {isCorrectAnswer, Questions, randomQuestion} from "./questions.js";
import path from "path";
import bodyParser from "body-parser";


const app = express();

app.use(bodyParser.json());

app.get("/api/question/random", (req, res) => {
    const question = randomQuestion();
    res.json(question)
    /*
    console.log({id, question, answers, category})
    res.json({id, question, answers, category})

     */
})
/*
app.post("/quiz/answer", (req, res) => {
    const {id, answer} = req.body;
    const question = Questions.find((q) => q.id === id);
    if (!question) {
        return res.sendStatus(404)
    }
    if (isCorrectAnswer(question, answer)) {
        return res.json({result: "correct"})
    }else {
        return res.json({ result: "incorrect"})
    }
})

 */

app.post("/api/question", (req, res) => {

})

app.use(express.static(path.resolve("../client/dist")));
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    return res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`server started on http://localhost:${server.address().port}`),
    console.log(`questions on http://localhost:${server.address().port}/api/question`)
});
