import React from "react";
import { useState } from "react";
// import { useForm } from "react-hook-form";
import Join from "./Join";
import Test from "./Test";
import './GetStarted.css'
function GetStarted({userData}){

    const [isTestStarted,setIsTestStarted] = useState(false);

    return(
        <div className="getStarted">
            <div className="test-container">
                {
                    isTestStarted ? (
                        <Test end={()=>setIsTestStarted(false)} user={userData}/>
                    ):(
                        <Join start={()=>setIsTestStarted(true)} />
                    )
                }
            </div>
        </div>
    )
}
export default GetStarted;