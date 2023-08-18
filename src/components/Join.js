import React from "react";
import './Join.css'
function Join({start}){
    return(
        <div className="Join-Screen">
            <h2>Note</h2>
            <p>
                1. The assessment consists of <b>5 Questions </b>
            </p>
            <p>
                2. Each question is associated with 4 options out of which one is the correct answer.
            </p>
            <p>
                3. +1 score is awarded for each correct answer.
            </p>
            <p>
                4. No negative score for the questions wrongly answered. 
            </p>
            <p>Clik here to start the test</p>
        <button onClick={start}>Start Test</button>
        </div>
    )
}
export default Join;