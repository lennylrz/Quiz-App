import React, { useState } from "react";
import styles from './Quiz.css'
function QuizOne() {
    const [questions, setQuestions] = useState([
        {
            question: 'What is the least visited Country in the World?',
            options: ['Tuvalu', 'San Marino', 'Luxembourg', 'Micronesia', 'China'],
            correct: 'Tuvalu'
        },
        {
            question: 'In which state can you find the Grand Canyon?',
            options: ['Nevada', 'California', 'New Mexico', 'Arizona', 'Oregon'],
            correct: 'Arizona'
        },
        {
            question: 'To the nearest million, how many people live in New Zealand?',
            options: ['15 million', '25 million', '5 million', '50 million', '40 million'],
            correct: '5 million'
        },
        {
            question: 'Which country is made up of the most islands?',
            options: ['Phillipines', 'Indonesia', 'Greece', 'Finland', 'Norway'],
            correct: 'Norway'
        },{
            question: 'Which country has the most pyramids?',
            options: ['Egypt', 'Sudan', 'Mexico', 'Nigeria', 'Honduras'],
            correct: 'Sudan'
        },
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


export default QuizOne

