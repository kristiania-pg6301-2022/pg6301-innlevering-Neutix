import React from "react";
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
      <h1>Quiz</h1>
      <Link to="/question">
        <button type="button">Start quiz</button>
      </Link>
    </div>
  );
}

function App() {
  return (
                                 <BrowserRouter>
             <Routes>
            <Route path={"/"} element={<FrontPage />} />
                         </Routes>

                        </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
