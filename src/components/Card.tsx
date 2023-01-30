import {FC, useState, useEffect} from 'react';

const Card : FC = () => {
    const [questions, setQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState({})
    const [questionCount, setQuestionCount] = useState(1)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)
    let questionIndex = questionCount - 1

    useEffect(() =>{
        fetch('https://the-trivia-api.com/api/questions?categories=music&limit=5&difficulty=easy')
        .then(response => response.json())
        .then(res => setQuestions(res))
    }, [])



    console.log(questions)
    return (
        <div className='quiz-card'>
            <h3>Question {questionCount} out of {questions.length}</h3>
        </div>
    );
};

export default Card;