import React from 'react';

interface Props{
    score: number
}

const ScoreCard : React.FC<Props> = (props) => {
    return (
        <div className="score-card">
          <h2 className="score-header">Your score is:</h2>
          <h3 className="score">{props.score}</h3>
        </div>
    );
};

export default ScoreCard;