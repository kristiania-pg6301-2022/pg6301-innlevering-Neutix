import ReactDOM from "react-dom";
import React from "react";
import {QuizApp, AnswerQuestion} from "../quiz.jsx";


const getQuestion = () => ({
    id:1,
    question:
        "What is 4 + 4",
    answers: {
        answer_a: "140",
        answer_b: "20",
        answer_c: "56",
        answer_d: "8",
        answer_e: "10",
        answer_f: "1000",
    },
})


describe("Quiz application", () => {
  it("DummyTest", () => {
    const element = document.createElement("div");
    ReactDOM.render(<QuizApp />, element);
    expect(element.innerHTML).toMatchSnapshot();
  });


    it ("submit answer", () => {
        const onSubmitAnswer = jest.fn();

        const element = document.createElement("div");
        ReactDOM.render(<AnswerQuestion onSubmitAnswer={onSubmitAnswer} question={getQuestion()}/>, element);

        expect(onSubmitAnswer).toHaveBeenCalled()

    });

});
