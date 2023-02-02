import React from 'react';
import { Props } from './interfaces';

const AnswerButtons : React.FC<Props>= (props) => {
    return (
        <>
            <input type="radio" value={props.answer} name="answer"/>{props.answer} 
        </>
    );
};

export default AnswerButtons;