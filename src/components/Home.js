import React from "react";
import './Home.css';
import icon from './skillprobeicon.jpg'
function Home(){
    return(
        <div className="home-container">
            <div className="d-flex">
            <div className="head"> 
            <h1>SKILL PROBE</h1>
            <h3>Self-Assess Your Soft Skills</h3>
            </div>
            <div className=" my-auto">
                <img  className="icon" src={icon}/>
            </div>
            </div>
        </div>
    )
}
export default Home;