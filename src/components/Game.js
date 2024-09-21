import React, { useContext, useEffect, useState } from "react";
import "../css/Game.css";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";
import Countdown from "./Countdown";

function Game({ questions }) {
  const { levelCounter, setLevelCounter, setCelebrate } = useContext(Context);

  const navigate = useNavigate();

  const [countdown, setCountdown] = useState(3);
  const [timer, setTimer] = useState(20);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionAnswered, setQuestionAnswered] = useState({
    status: false,
    answerIndex: null,
  });
  const [correctAnswerCounter, setCorrectAnswerCounter] = useState(0);

  useEffect(() => {
    if (countdown === 0) {
      const interval = setInterval(() => {
        setTimer((timer) => {
          if (timer === 0 || questionAnswered.status) {
            clearInterval(interval);
            return timer;
          } else {
            return timer - 1;
          }
        });
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [countdown, questionAnswered]);

  useEffect(() => {
    if (
      (questionAnswered.status || timer === 0) &&
      questionIndex + 1 === questions.length
    ) {
      if (correctAnswerCounter === questions.length) {
        levelUp();
      } else {
        restartLevel();
      }
    }
  }, [questionAnswered, timer]);

  const answerQuestion = (correct, index) => {
    setQuestionAnswered({ status: true, answerIndex: index });
    if (correct) {
      setCorrectAnswerCounter(correctAnswerCounter + 1);
    }
  };

  const nextQuestion = () => {
    setTimer(20);
    setQuestionAnswered({ status: false, answerIndex: null });
    setQuestionIndex(questionIndex + 1);
  };

  const levelUp = () => {
    setTimeout(() => {
      setLevelCounter(levelCounter + 1);
      navigate("/");
      setCelebrate(true);
    }, 1500);
  };

  const restartLevel = () => {
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="game">
      {countdown > 0 ? (
        <Countdown countdown={countdown} setCountdown={setCountdown} />
      ) : (
        <>
          <div className="game-header">
            <div className="timer">
              <span>{timer}</span>
            </div>
            <h1>Quiz Game</h1>
            <div className="correct-answer-counter-container">
              <p>
                Correct: {correctAnswerCounter}/
                {questionAnswered.status || timer === 0
                  ? questionIndex + 1
                  : questionIndex}
              </p>
            </div>
          </div>
          <p lang="es" className="question">
            {questions[questionIndex].question}
          </p>
          <div lang="es" className="answers-container">
            {questions[questionIndex].answers.map((answer, index) => (
              <button
                key={index}
                className={
                  answer.correct && questionAnswered.status
                    ? "answer correct"
                    : answer.correct && timer === 0
                    ? "answer correct-not-answered"
                    : !answer.correct && index === questionAnswered.answerIndex
                    ? "answer incorrect"
                    : "answer"
                }
                onClick={() => answerQuestion(answer.correct, index)}
                disabled={questionAnswered.status || timer === 0}
              >
                {answer.answer}
              </button>
            ))}
          </div>
          {(questionAnswered.status || timer === 0) &&
          questionIndex + 1 < questions.length ? (
            <div className="next-question-button-container">
              <button
                className="next-question-button"
                onClick={() => {
                  nextQuestion();
                }}
              >
                Next question
              </button>
            </div>
          ) : (
            <div className="question-counter-container">
              <p className="question-counter">
                Question {questionIndex + 1}/{questions.length}
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Game;
