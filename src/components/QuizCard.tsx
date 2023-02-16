import React from "react";
import { Question } from "./interfaces";
import Loading from "./Loading";

interface Props {
  questions: Question[];
  currentQuestionIndex: number;
  changeQuestion: () => void;
  displayScore: () => void;
  answersBtns: JSX.Element[];
  isLoading: boolean;
}

const QuizCard: React.FC<Props> = (props) => {
  return props.isLoading ? (
    <Loading />
  ) : (
    <div className="quiz-card">
      <h3 className="question-header">
        Question {props.currentQuestionIndex + 1} out of{" "}
        {props.questions.length}
      </h3>
      <p className="question">
        {props.questions[props.currentQuestionIndex]?.question}
      </p>
      <div className="answer-section">{props.answersBtns}</div>
      {props.currentQuestionIndex < props.questions.length - 1 ? (
        <button className="quiz-btn" onClick={props.changeQuestion}>
          Next Question
        </button>
      ) : (
        <button className="quiz-btn" onClick={props.displayScore}>
          Show Score
        </button>
      )}
    </div>
  );
};

export default QuizCard;
