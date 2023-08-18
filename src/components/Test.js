import React, { useState } from "react";
import LevelList from '../data/levels.json'
 import Result from "./Result.js";
import { useForm } from "react-hook-form";
// import { useEffect } from "react";
// import {useRef} from 'react';
// import './Test.css'
function Test({user}){
    const {register, handleSubmit} = useForm();
   let [currLevelIndex,setCurrLevelIndex] = useState(0);
//    const ref = useRef(null);
   let [score , setScore] = useState(0);
   const [selectedOption, setSelectedOption] = useState(null);
   let [isBegin , setBegin] = useState(true);
   const initDate = new Date();
   
   let [startTime,setStartTime] = useState(initDate);
//    const [clueData, setClueData] = useState('');

    const [timeArr,setTimeArr] = useState([0,0,0,0,0]);
//     const [clue, setClue] = useState('');

//   const handleChange = event => {
//     setClue(event.target.value);
//   };
    // useEffect(() => {
    //     console.log("effect begin : " + isBegin);

    //   }, [isBegin]);
    // const handleChange = event => {
    //     setClueData(event.target.value);
    //   };
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
      };
    const onFormSubmit =() => {
        //console.log(data.clue);
        if(selectedOption == null){
            // setCorrectClue(false);
            alert("choose an option to proceed further")
        }else{
        let endTime = new Date();
            const timeDiff = (endTime.getTime() - startTime.getTime()) / 1000;
            setTimeArr(timeArr => {
                const newArray = [...timeArr];
                newArray[currLevelIndex] = timeDiff;
                return newArray;
              });
        if( selectedOption==LevelList[currLevelIndex].answer){
            //current time;
            // setCorrectClue(true);
            console.log(selectedOption);
            setScore(score+1);
        }
        // else if(data.clue !== LevelList[currLevelIndex].clue){
        //     setCorrectClue(false);
        // }
        else {
            // setCorrectClue(false);
        }
        // else if(currLevelIndex + 1 === LevelList.length)
        // setFinish(true);
        // ref.current.value = '';
        console.log("bef begin : " + isBegin);
        //setClueData('');

        setBegin(false);
        setSelectedOption(null);
        console.log("aft begin : " + isBegin);
    }
        // console.log("isCorrectclue : " + isCorrectClue);
        // console.log("score : " + score);


    }
    const myFunction = () => {
        //current time;

        setCurrLevelIndex(currLevelIndex+1);
        // if(currLevelIndex === LevelList.length)
        // setFinish(true);
        setStartTime(new Date());
        setBegin(true);
        // setClue('');

        // console.log("begin : " + isBegin);
        // console.log("isFinish : " + isFinish);
        //console.log("score : " + score);
    }
    return(
        <div className="test-screen">
            {
                (currLevelIndex === LevelList.length) ? (
                    <>
                    <h1>Hurrah!!</h1>
                    <Result user={user} score={score} timeArr={timeArr} />
                    </>
        
                ) : (
                    <div className="content mx-auto">
                            <>
                            <p><b>Question : </b>{LevelList[currLevelIndex].title}</p>  
                            <p>Choose the correct option!</p>    
                            <h4><b>Options : </b></h4>    
                            <form onSubmit={handleSubmit(onFormSubmit)} className="">  
                            {(LevelList[currLevelIndex].options).map((option ,index)=>(
                                <div className="border border-dark rounded-3 m-2 view overlay zoom">
                                    <label key={index} className="p-2">
                                    <input
                                        type="radio"
                                        value={option}
                                        checked={selectedOption === option}
                                        onChange={handleOptionChange}
                                        />
                                    {option}
                                    </label>
                                </div>
                                
                            ))}
                            <p className="error"></p>
                            <div className="d-flex">
                            <button type="submit" className="mr-auto rounded" >Submit</button>
                         
                            
                            {/* <form onSubmit={handleSubmit(onFormSubmit)} className="">
                            <label htmlFor="clue" ><b>Enter Clue Found : </b></label>
                            <input type="text" style={{ borderRadius: '15px',width:'100px'}}  id="clue" name="clue" className="form-control" {...register("clue", { required: true })}/>
                            {errors.clue?.type === 'required' && <p className='text-danger'>*Clue is required to proceed further</p>}
                            {isBegin && <button type="submit" className="m-3" >Submit clue</button>}
                            </form> */}
                            {
                                !isBegin && currLevelIndex !== LevelList.length-1 &&
                                <><button type="button"  className="text-dark rounded " style={{background : "bisque", marginLeft : "80px"}} onClick={myFunction}> Next </button></>
                            }
                            {
                                !isBegin && currLevelIndex === LevelList.length-1 &&
                                <button type="button"  className="text-dark rounded " style={{background : "bisque", marginLeft : "80px"}} onClick={myFunction}> Finish </button>
                            }
                            </div>
                            </form>
                            </>
                           
                    </div>
                )
            }
        </div>
    )
}
export default Test;