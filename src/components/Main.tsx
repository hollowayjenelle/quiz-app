/**
 * TODO
 * Add CSS
 *
 */
import React, { FC, useState, useEffect, useMemo } from "react";
import { Question } from "./interfaces";
import AnswerButtons from "./AnswerButtons";
import ScoreCard from "./ScoreCard";
import QuizCard from "./QuizCard";
import axios from "axios";

const Main: FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [currentAnswer, setCurrentAnswer] = useState<string>("");
  const [showScore, setShowScore] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const incorrectAnswers = questions[currentQuestionIndex]?.incorrectAnswers;
  const correctAnswer = questions[currentQuestionIndex]?.correctAnswer;

  const allAnswers = incorrectAnswers?.concat(correctAnswer);

  useEffect(() => {
    const getQuestions = async () => {
      const result = await axios(
        "https://the-trivia-api.com/api/questions?categories=music&limit=10&difficulty=easy"
      );
      setQuestions(result.data);
      setIsLoading(false);
    };
    getQuestions();
  }, []);

  const shuffle = (arr: string[]) => {
    arr?.sort(() => 0.5 - Math.random());
    return arr;
  };

  // eslint-disable-next-line
  const shuffledAnswers = useMemo(
    () => shuffle(allAnswers),
    [questions[currentQuestionIndex]]
  );

  const answersBtns = shuffledAnswers?.map((ans) => {
    return (
      <AnswerButtons
        key={ans}
        answer={ans}
        answerState={currentAnswer}
        changeFunc={getAnswer}
      />
    );
  });

  function assignPoint() {
    if (currentAnswer === questions[currentQuestionIndex].correctAnswer) {
      console.log("Score increased");
      setScore((prevScore) => prevScore + 1);
    }
  }

  function changeQuestion() {
    assignPoint();
    if (currentQuestionIndex < questions.length) {
      setCurrentQuestionIndex((prevCount) => prevCount + 1);
      resetAnswer();
    }
  }

  function displayScore() {
    assignPoint();
    setShowScore((prevVal) => !prevVal);
  }

  function getAnswer(event: React.SyntheticEvent) {
    const target = event.target as HTMLInputElement;
    setCurrentAnswer((prevValue) => target.value);
  }

  function resetAnswer() {
    setCurrentAnswer("");
  }

  console.log(questions[currentQuestionIndex]?.correctAnswer);

  let currentCardDisplay;
  if (showScore) {
    currentCardDisplay = <ScoreCard score={score} />;
  } else {
    currentCardDisplay = (
      <QuizCard
        questions={questions}
        currentQuestionIndex={currentQuestionIndex}
        changeQuestion={changeQuestion}
        displayScore={displayScore}
        answersBtns={answersBtns}
        isLoading={isLoading}
      />
    );
  }

  return <div className="card-section">{currentCardDisplay}</div>;
};

export default Main;
