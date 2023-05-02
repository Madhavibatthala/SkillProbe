import React from "react";
import './Join.css'
function Join({start}){
    return(
        <div className="Join-Screen">
            <h2>Note</h2>
            <p>
                1. The assessment consists of <b>5 Levels. </b>Each Level has a single question.
            </p>
            <p>
                2. Each question is associated with options and clue description.
            </p>
            <p>
                3. Each clue is important to proceed to further levels and it is advised to be noted.
            </p>
            <p>
                4. For each question, the clue must be generated from the given descriptions and submitted.
            </p>
            <p>
                5. Successful Submission of clue at each round advances to next level.
            </p>
            <p>
                6. unsuccessful Submission of clue at any level leads to dead end.
            </p>
            <p>
                7. The assessment is completed when the user has completed all the questions thus reaches to end point.
            </p>
            <p>Clik here to start the test</p>
        <button onClick={start}>Start Test</button>
        </div>
    )
}
export default Join;