import React, {useState, useEffect} from "react";
import styles from './LandingPage.css'
import { Link } from "react-router-dom";
function LandingPage() {

    return(
    <div>
        <div class="center">
            <h1>
            <span>Quiz</span>
    
            <span>Quiz</span>
            <span>Quiz</span>
    
            </h1>
        </div>
        <div className="LinkContainer">
            <Link className='Link' to ='/GeographyQuiz'>Geography Quiz</Link>
            <Link className='Link' to ='/HistoryQuiz'>History Quiz</Link>
            <Link className='Link' to ='/SportsQuiz'>Sports Quiz</Link>
            <Link className='Link' to ='/MovieQuiz'>Movie Quiz</Link>

        </div>
    </div>
    )
}

export default LandingPage