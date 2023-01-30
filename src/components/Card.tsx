/**
 * TODO
 * Create 'start quiz' card in App.tsx to cover the quiz card
 * Create show score card
 * Create array with both correct and incorrect answers ans shuffle them
 */
import {FC, useState, useEffect} from 'react';
import {Question} from './interfaces'

const Card : FC = () => {
    const [questions, setQuestions] = useState<Question[]>([])
    const [currentQuestion, setCurrentQuestion] = useState<Question>()
    const [questionCount, setQuestionCount] = useState(1)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)
    let questionIndex = questionCount - 1

    useEffect(() =>{
        fetch('https://the-trivia-api.com/api/questions?categories=music&limit=20&difficulty=easy')
        .then(response => response.json())
        .then(res => setQuestions(res))
    }, [])

    console.log(questions)
    
    return (
        <div className='quiz-card'>
            <h3>Question {questionCount} out of {questions.length}</h3>
            <p>{questions[questionIndex]?.question}</p>
        </div>
    );
};

export default Card;