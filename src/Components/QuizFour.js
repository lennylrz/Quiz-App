import React, { useState } from "react";
import styles from './Quiz.css'
function QuizFour() {
    const [questions, setQuestions] = useState([
        {
            question: 'Which film, directed by Christopher Nolan, is known for the concept of "dream within a dream"?',
            options: ['Inception', 'Interstellar', 'The Dark Knight', 'Dunkirk', 'Memento'],
            correct: 'Inception'
        },
        {
            question: 'Which film features the iconic quote, "You can’t handle the truth!"?',
            options: ['A Few Good Men', 'The Godfather', 'Goodfellas', 'The Usual Suspects', 'L.A. Confidential'],
            correct: 'A Few Good Men'
        },
        {
            question: 'Which movie won the Academy Award for Best Picture in 1994, beating "The Shawshank Redemption" and "Pulp Fiction"?',
            options: ['Forrest Gump', 'The Lion King', 'Four Weddings and a Funeral', 'Quiz Show', 'The Remains of the Day'],
            correct: 'Forrest Gump'
        },
        {
            question: 'Which film features a famous scene where a character says, "I am your father"?',
            options: ['Star Wars: Episode V', 'Star Wars: Episode IV', 'Star Wars: Episode VI', 'Star Wars: Episode III', 'Star Wars: Episode II'],
            correct: 'Star Wars: Episode V'
        },
        {
            question: 'Which film, directed by Quentin Tarantino, is known for its nonlinear narrative and features the characters Vincent Vega and Jules Winnfield?',
            options: ['Pulp Fiction', 'Reservoir Dogs', 'Kill Bill: Vol. 1', 'Inglourious Basterds', 'Django Unchained'],
            correct: 'Pulp Fiction'
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

export default QuizFour

