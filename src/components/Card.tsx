/**
 * TODO
 * Create 'start quiz' card in App.tsx to cover the quiz card
 * Create show score card - DONE
 * Create array with both correct and incorrect answers and shuffle them
 */
import {FC, useState, useEffect} from 'react';
import {Question} from './interfaces'
import AnswerButtons from './AnswerButtons';

const Card : FC = () => {
    const [questions, setQuestions] = useState<Question[]>([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
    const [score, setScore] = useState<number>(0)
    const [showScore, setShowScore] = useState<boolean>(false)
    const answers = (questions[currentQuestionIndex]?.incorrectAnswers + ',' + questions[currentQuestionIndex]?.correctAnswer)?.split(',')
    answers?.sort(() => 0.5 - Math.random())

    useEffect(() =>{
        fetch('https://the-trivia-api.com/api/questions?categories=music&limit=10&difficulty=easy')
        .then(response => response.json())
        .then(res => setQuestions(res))
    }, [])
    
    const answersBtns = answers.map( ans => {
        return <AnswerButtons key={ans} answer={ans}/>
    })

    function changeQuestion(){
        if(currentQuestionIndex < questions.length){
            setCurrentQuestionIndex(prevCount => prevCount + 1)
        }
    }

    function displayScore(){
        setShowScore(prevVal => !prevVal)
    }

    console.log(answers)

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
                        {answersBtns}
                    </div>
                    {currentQuestionIndex < questions.length-1 ? <button onClick={changeQuestion}>Next Question</button> : <button onClick={displayScore}>Show Score</button>}
                </div>
            }
        </div>
    );
};

export default Card;