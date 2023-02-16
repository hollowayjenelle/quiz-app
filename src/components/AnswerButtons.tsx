import React from "react";
import { Props } from "./interfaces";

const AnswerButtons: React.FC<Props> = (props) => {
  return (
    <div className="radio-btn">
      <input
        type="radio"
        name="answer"
        value={props.answer}
        id={props.answer}
        checked={props.answerState === props.answer}
        onChange={props.changeFunc}
        className="radio-input"
      />
      <label className="radio-btn-label" htmlFor={props.answer}>
        {props.answer}
      </label>
    </div>
  );
};

export default AnswerButtons;
