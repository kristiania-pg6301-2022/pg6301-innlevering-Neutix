import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

function FrontPage() {
  return (
    <div>
      <h1>Welcome to Code Quiz!</h1>
      <Link to={"/question"}>
        <button type="button">Start Quiz</button>
      </Link>
    </div>
  );
}

function FindQuestion() {
  const navigate = useNavigate();

  async function handleConfirm(answer) {
    const { id } = question;
    const res = await fetch(`/api/question/answer`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ answer, id }),
    });
    if (res.ok) {
      navigate("/question/result");
    }
  }

  const [question, setQuestion] = useState();
  useEffect(async () => {
    const res = await fetch("/api/question");
    setQuestion(await res.json());
  }, []);

  if (!question) return <div>Loading...</div>;

  return (
    <div>
      <h1>{question.question}</h1>
      {Object.keys(question.answers)
        .filter((a) => question.answers[a])
        .map((answer) => (
          <div key={answer}>
            <button onClick={(q) => handleConfirm(answer)}>
              {question.answers[answer]}
            </button>
          </div>
        ))}
    </div>
  );
}

function AnswerResponse() {
  const [answer, setAnswer] = useState("No answers yet");
  useEffect(async () => {
    const res = await fetch("/api/question/result");
    setAnswer(await res.json());
  }, []);
  return (
    <div>
      <h1>You answered: {answer}</h1>
      <Link to={"/question"}>
        <button type="button">New Question</button>
      </Link>
    </div>
  );
}

export function QuizApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<FrontPage />} />
        <Route path={"/question"} element={<FindQuestion />} />
        <Route path={"/question/result"} element={<AnswerResponse />} />
      </Routes>
    </BrowserRouter>
  );
}
