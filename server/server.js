import express from "express";
import {randomQuestion} from "./questions.js";
import path from "path";
import bodyParser from "body-parser";


const app = express();

app.use(bodyParser.json());

app.get("/api/question", (req, res) => {
    const { id, question, answers, category } = randomQuestion();
    console.log({id, question, answers, category})
    res.json({id, question, answers, category})
})


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

const server = app.listen(process.env.PORT , () => {
  console.log(`server started on http://localhost:${server.address().port}`),
    console.log(`questions on http://localhost:${server.address().port}/api/question`)
});
