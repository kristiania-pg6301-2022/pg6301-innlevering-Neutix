import React, {useEffect, useState} from "react";

function AnswerQuestion({question, onReload}) {
    async function handleConfirm(answer) {
        const {id} = question;
        const res = await fetch("/api/question/answer", {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({id, answer}),
        });
        onReload();
    }

    return (
        <div>
            <h1>{question.question}</h1>
            {Object.keys(question.answers)
                .filter((a) => question.answers[a])
                .map((a) => (
                    <div key={a}>
                        <button style={{margin: "1rem", fontSize: "1.5rem"}} onClick={(q) => handleConfirm(a)}>
                            {question.answers[a]}
                        </button>
                    </div>
                ))}
        </div>
    );
}

function QuestionComponent({reload}) {
    const [question, setQuestion] = useState();

    async function handleLoadQuestion() {
        const res = await fetch("/api/question/random")
        setQuestion(await res.json());
    }

    function handleReload() {
        setQuestion(undefined)
        reload();
    }

    if (!question) {
        return (
            <div>
                <button style={{margin: "1rem", fontSize: "1.5rem"}} onClick={handleLoadQuestion}>New question</button>
            </div>
        )
    }

    return <AnswerQuestion question={question} onReload={handleReload}/>;
}

export function QuizApp() {
    const [score, setScore] = useState();
    useEffect(reload, []);

    async function reload() {
        const res = await fetch("/api/question/score");
        setScore(await res.json());
    }
    console.log(score)
    return (

        <>
            <h1>Code Quiz</h1>
            {score && (
                <div style={{fontSize: "1.5rem"}}>
                    Correct answers: {score.correct} Total answers: {score.answered}
                </div>
            )}
            <QuestionComponent reload={reload}/>
        </>
    );
}