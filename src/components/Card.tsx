/**
 * TODO
 * Fix shuffle answer array and bug that shuffles on click
 * Radio button is not being selected -fix
 * 
 */
import React, {FC, useState, useEffect, useMemo} from 'react';
import {Question} from './interfaces'
import AnswerButtons from './AnswerButtons';

const Card : FC = () => {
    const [questions, setQuestions] = useState<Question[]>([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
    const [score, setScore] = useState<number>(0)
    const [currentAnswer, setCurrentAnswer] = useState<string>('')
    const [showScore, setShowScore] = useState<boolean>(false)
    const [allAnswers, setAllAnswers] = useState<string[]>([])
    // eslint-disable-next-line

    useEffect(() =>{
        fetch('https://the-trivia-api.com/api/questions?categories=music&limit=10&difficulty=easy')
        .then(response => response.json())
        .then(res => setQuestions(res))
    }, [])

    useEffect(() => {
        const answers = (questions[currentQuestionIndex]?.incorrectAnswers + ',' + questions[currentQuestionIndex]?.correctAnswer)?.split(/,(?! )/)
        answers.sort(() => 0.5 - Math.random() )
        setAllAnswers(answers)
    }, [currentQuestionIndex])
    
    //answerArr?.sort(() => 0.5 - Math.random() )
    const answersBtns = allAnswers.map( ans => {
        return <AnswerButtons 
        key={allAnswers.indexOf(ans)} 
        answer={ans} 
        answerState={currentAnswer}
        changeFunc={getAnswer}/>
    })

    function assignPoint(){
        if(currentAnswer === questions[currentQuestionIndex].correctAnswer){
            setScore(prevScore => prevScore + 1)
        }
    }

    function changeQuestion(){
        assignPoint()
        if(currentQuestionIndex < questions.length){
            setCurrentQuestionIndex(prevCount => prevCount + 1)
            resetAnswer()
        }
    }

    function displayScore(){
        setShowScore(prevVal => !prevVal)
    }

    function getAnswer(event: React.SyntheticEvent){
        event.preventDefault()
        const target = event.target as HTMLInputElement
        setCurrentAnswer(target.value)
    }

    function resetAnswer(){
        setCurrentAnswer('')
    }

    console.log(allAnswers)
    console.log(currentAnswer)
    console.log(questions[currentQuestionIndex]?.correctAnswer)

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
                    <div onChange={getAnswer}>
                        {answersBtns}
                    </div>
                    {currentQuestionIndex < questions.length-1 ? <button onClick={changeQuestion}>Next Question</button> : <button onClick={displayScore}>Show Score</button>}
                </div>
            }
        </div>
    );
};

export default Card;