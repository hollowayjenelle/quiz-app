import React from 'react';
import { Props } from './interfaces';

const AnswerButtons : React.FC<Props>= (props) => {
    return (
        <>
          <input 
          type="radio" 
          value={props.answer} 
          name="answer"
          checked={props.answerState === props.answer}
          onChange={props.changeFunc}/>{props.answer}
        </>
    );
};

export default AnswerButtons;