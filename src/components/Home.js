import React from "react";
import './Home.css';
import icon from './skillprobeicon.jpg'
function Home(){
    return(
        <div className="home-container d-flex">
            <div className="d-flex">
                <div className="head mr-auto"> 
                    <h1>SKILL PROBE</h1>
                    <h3>Self Assess Your Skills</h3>
                </div>
                <div className="ml-auto">
                    <img  className="icon" src={icon}/>
                </div>
            </div>
        </div>
    )
}
export default Home;