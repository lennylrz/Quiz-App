import React, { useState } from "react";
import styles from './Quiz.css'
function QuizThree() {
    const [questions, setQuestions] = useState([
        {
            question: 'Which player won the UEFA Champions League Player of the Season award in 2019-2020?',
            options: ['Virgil van Dijk', 'Robert Lewandowski', 'Kevin De Bruyne', 'Sadio Mané', 'Lionel Messi'],
            correct: 'Robert Lewandowski'
        },
        {
            question: 'Which football club was the first to reach the final of the UEFA Champions League three times in a row?',
            options: ['Real Madrid', 'AC Milan', 'Liverpool', 'Barcelona', 'Bayern Munich'],
            correct: 'Real Madrid'
        },
        {
            question: 'Which country’s national football team is known as the “Lions of Teranga”?',
            options: ['Nigeria', 'Ghana', 'Senegal', 'Cameroon', 'Ivory Coast'],
            correct: 'Senegal'
        },
        {
            question: 'Which player holds the record for the most assists in a single World Cup tournament?',
            options: ['Diego Maradona', 'Pele', 'Xavi Hernandez', 'Garrincha', 'Lionel Messi'],
            correct: 'Xavi Hernandez'
        },
        {
            question: 'Which football club won the 2012-2013 Bundesliga with a record 91 points?',
            options: ['Borussia Dortmund', 'Bayern Munich', 'RB Leipzig', 'Schalke 04', 'Werder Bremen'],
            correct: 'Bayern Munich'
        },
        {
            question: 'Which team won the NBA Finals in 1970, featuring the famous buzzer-beater by Willis Reed?',
            options: ['New York Knicks', 'Los Angeles Lakers', 'Boston Celtics', 'Chicago Bulls', 'Philadelphia 76ers'],
            correct: 'New York Knicks'
        },
        {
            question: 'Which player holds the NBA record for most steals in a single season?',
            options: ['Gary Payton', 'Alvin Robertson', 'Chris Paul', 'Michael Jordan', 'Hakeem Olajuwon'],
            correct: 'Alvin Robertson'
        },
        {
            question: 'Who was the first African-American to be inducted into the Naismith Memorial Basketball Hall of Fame?',
            options: ['Bill Russell', 'Wilt Chamberlain', 'Elgin Baylor', 'Kareem Abdul-Jabbar', 'Julius Erving'],
            correct: 'Bill Russell'
        },
        {
            question: 'Which footballer has the record for the most appearances in the UEFA Champions League group stage?',
            options: ['Cristiano Ronaldo', 'Lionel Messi', 'Xavi Hernandez', 'Iker Casillas', 'Paolo Maldini'],
            correct: 'Cristiano Ronaldo'
        },
        {
            question: 'Which football team was the first to win the treble of domestic league, domestic cup, and European Cup in a single season?',
            options: ['Manchester United', 'Barcelona', 'Inter Milan', 'Celtic', 'Bayern Munich'],
            correct: 'Celtic'
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


export default QuizThree

