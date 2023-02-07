/**
 * TODO
 * Create 'start quiz' card in App.tsx to cover the quiz card
 * Fix the bug that makes the answers change onclick
 */
import React, {FC, useState, useEffect} from 'react';
import {Question} from './interfaces'
import AnswerButtons from './AnswerButtons';

const Card : FC = () => {
    const [questions, setQuestions] = useState<Question[]>([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
    const [score, setScore] = useState<number>(0)
    const [currentAnswer, setCurrentAnswer] = useState<string>('')
    const [showScore, setShowScore] = useState<boolean>(false)
    

    useEffect(() =>{
        fetch('https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple')
        .then(response => response.json())
        .then(res => setQuestions(res))
    }, [])
    

    function changeQuestion(){
        if(currentQuestionIndex < questions.length){
            setCurrentQuestionIndex(prevCount => prevCount + 1)
        }
    }

    function displayScore(){
        setShowScore(prevVal => !prevVal)
    }


   
    console.log(questions)
    return (
        <div className='card-section'>
            {(showScore) ? 
                <div className='score-card'>
                    <h2>Your score is {score}</h2>
                    <h3>{score}</h3>
                </div> 
            :   
                <div className='quiz-card'>
                    <h3>Question {currentQuestionIndex + 1} out of {questions.length}</h3>
                    <p>{questions[currentQuestionIndex]?.question}</p>
                    <div>
                    </div>
                    {currentQuestionIndex < questions.length-1 ? <button onClick={changeQuestion}>Next Question</button> : <button onClick={displayScore}>Show Score</button>}
                </div>
            }
        </div>
    );
};

export default Card;