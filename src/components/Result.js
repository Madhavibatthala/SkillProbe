import React from "react";
import './Result.css'
// import { Button } from "bootstrap";
import axios from "axios";
import { BASE_URL } from "../config";
import { useNavigate } from "react-router-dom";

function Result({user,score,timeArr}){
    const navigate = useNavigate();

    let userObj = { ...user};
    userObj.score = score;
    userObj.timeArr = timeArr;
    const myFunction = () =>{
        axios.post(`${BASE_URL}/user/postuser`,userObj)
        .then(response=>{})
        .catch(error=>{alert("something went wrong")})
        navigate("/home");
        console.log("user added is " + userObj);
    }
    return(
        <div className="result-screen">
            <div className="result-screen-title">
                <h1>{score}</h1>
                <button type="button" onClick={myFunction}>Back to Home</button>
            </div>
        </div>
    )
}
export default Result;