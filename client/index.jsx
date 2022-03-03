import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {
  Routes,
  Route,
  Link,
  BrowserRouter,
  useNavigate,
} from "react-router-dom";

function FrontPage() {
  return (
    <div>
      <h1>Quizzz</h1>
      <Link to="/question">
        <button type="button">Start quiz</button>
      </Link>
    </div>
  );
}

function ShowQuestion({quizApi}) {
    const [questions, setQuestions] = useState();
    useEffect(async () => {
        console.log("enter useeffect")
        setQuestions(undefined);
        setQuestions(await quizApi.showQuestion());
    }, []);

    if (!questions) {
        return <div>Loading...</div>
    }

    return <div>{questions}</div>
}

function App() {

    const quizApi = {
        showQuestion: async () => {
            const res = await fetch("/api/question");
            return res.json();
        },
        onAnswer: async (a) => {
            await fetch("/api/question", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(a)
                })
        }
    }

  return (
    <BrowserRouter>
      <Routes>
          <Route path={"/"} element={<FrontPage />} />
          <Route path={"/question"} element={<ShowQuestion quizApi={quizApi}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
