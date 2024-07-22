import React, { useState } from "react";
import styles from './Quiz.css'
function QuizTwo() {
    return(
        <div className="quiz">
            <span className="question-label">What is the Capital of Germany?</span>
            <div className="radio">
                <div className="singular">
                <input type="radio" id="One" name="selectanswer"/>
                <label for='One'>Option 1</label> <br />
                </div>
                <div className="singular">
                <input type="radio" id="Two"  name="selectanswer"/>
                <label for='Two'>Option 2</label> <br />
                </div>
                <div className="singular">
                <input type="radio" id="Three" name="selectanswer"/>
                <label for='Three'>Option 3</label> <br />
                </div>
                <div className="singular">
                <input type="radio" id="Four" name="selectanswer"/>
                <label for='Four'>Option 4</label> <br />
                </div>
                <div className="singular">
                <input type="radio" id="Five" name="selectanswer"/>
                <label for='Five'>Option 5</label> <br />
                </div>
            </div>
            <button>Submit Answer</button>
        </div>
    )
}


export default QuizTwo

