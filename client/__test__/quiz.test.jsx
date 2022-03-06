import ReactDOM from "react-dom";
import React from "react";
import {QuizApp} from "../quiz.jsx";

describe("Quiz test", () => {

    it("DummyTest", () =>{
        const element = document.createElement("div");
        ReactDOM.render(<QuizApp />, element);
        expect(element.innerHTML).toMatchSnapshot()
    })

    }


    )