import React, { useState } from "react";
import styles from './Quiz.css'
function QuizTwo() {
    const [questions, setQuestions] = useState([
        {
            question: 'Who was the British Prime Minister before Winston Churchill?',
            options: ['Neville Chamberlain', 'Clement Attlee', 'Anthony Eden', 'Harold Macmillan', 'Lloyd George'],
            correct: 'Neville Chamberlain'
        },
        {
            question: 'What was the name of the ship that brought the Pilgrims to America in 1620?',
            options: ['Mayflower', 'Nina', 'Santa Maria', 'Pinta', 'Endeavour'],
            correct: 'Mayflower'
        },
        {
            question: 'Which U.S. President issued the Emancipation Proclamation?',
            options: ['Abraham Lincoln', 'George Washington', 'Thomas Jefferson', 'Andrew Johnson', 'Ulysses S. Grant'],
            correct: 'Abraham Lincoln'
        },
        {
            question: 'Which city was the capital of the Ottoman Empire?',
            options: ['Cairo', 'Baghdad', 'Istanbul', 'Damascus', 'Mecca'],
            correct: 'Istanbul'
        },
        {
            question: 'What is the name of the famous wall built to protect ancient China from invasions?',
            options: ['Hadrian\'s Wall', 'Berlin Wall', 'Great Wall', 'Antonine Wall', 'Wall of China'],
            correct: 'Great Wall'
        }
    ])

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState(0)

    const currentQuestion = questions[currentIndex];

    function handleSubmit() {
        if(selectedAnswer === currentQuestion.correct) {
            setCorrectAnswer(correctAnswer + 1)
        }
        if(selectedAnswer) {
            setIsSubmitted(true)
        } else {
            alert('At least guess Dawg.')
        }
    }

    function handleRadioChange(event) {
        setSelectedAnswer(event.target.value)
    }

    function nextQuestion() {
        setIsSubmitted(false);
        setSelectedAnswer('')
        if (currentIndex < questions.length - 1){
        setCurrentIndex((prevIndex) => prevIndex + 1)
    } else {
        alert('Im Sorry thats It!')
    }
    } 

    return(
        <div className="quiz">
            <span className="question-label">{currentQuestion.question}</span>
            <span className="count-label">{correctAnswer}</span>
            <div className="radio">
           {currentQuestion.options.map((option, index) => {
             return (<div className="singular" key={index}>
                <input type="radio" 
                index={index}
                onChange={handleRadioChange}
                value={option}
                id={option}
                name="selectanswer"
                disabled={isSubmitted}
                checked={selectedAnswer === option}
                />
                <label for={option} className={isSubmitted ? option === currentQuestion.correct ? 'correct-answer' : option === selectedAnswer ? 'wrong-answer' : '' : ''}>
                    {option}
                </label>
            </div>)
           })}
            </div>
            <button onClick={isSubmitted ? nextQuestion : handleSubmit}>{isSubmitted ? 'Next Question' : 'Submit Answer'}</button>
        </div>
    )
}


export default QuizTwo

