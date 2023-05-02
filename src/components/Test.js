import React, { useState } from "react";
import LevelList from '../data/levels.json'
 import Result from "./Result.js";
import { useForm } from "react-hook-form";
// import { useEffect } from "react";
// import {useRef} from 'react';


// import './Test.css'
function Test({user}){
    const {register, handleSubmit, formState: { errors }} = useForm();
   let [currLevelIndex,setCurrLevelIndex] = useState(0);
//    const ref = useRef(null);
   let [isCorrectClue,setCorrectClue] = useState(true);
   let [score , setScore] = useState(0);
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
    const onFormSubmit =(data) => {
        //console.log(data.clue);
        if(data.clue === LevelList[currLevelIndex].clue){
            //current time;
            let endTime = new Date();
            const timeDiff = (endTime.getTime() - startTime.getTime()) / 1000;
            setTimeArr(timeArr => {
                const newArray = [...timeArr];
                newArray[currLevelIndex] = timeDiff;
                return newArray;
              });
            setCorrectClue(true);
            setScore(currLevelIndex+1);
        }
        // else if(data.clue !== LevelList[currLevelIndex].clue){
        //     setCorrectClue(false);
        // }
        else {
            setCorrectClue(false);
        }
        // else if(currLevelIndex + 1 === LevelList.length)
        // setFinish(true);
        // ref.current.value = '';
        console.log("bef begin : " + isBegin);
        //setClueData('');

        setBegin(false);
        console.log("aft begin : " + isBegin);
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
                    <><h1>Hurrah!!</h1><Result user={user} score={score} timeArr={timeArr} /></>
                    // <p>xbnmbsxz</h1>
                ) : (
                    <div className="content mx-auto">
                        {isCorrectClue? 
                            <>
                            <p><b>Question : </b>{LevelList[currLevelIndex].title}</p>

                            {  LevelList[currLevelIndex].image != '/' && 
                            <img src={LevelList[currLevelIndex].image} className="w-50 h-50" alt="" />
                            }         
                            <p><b>Options : </b></p>               
                            {(LevelList[currLevelIndex].options).map((t ,index)=>(
                                <p>{index+1}) {t}</p>
                            ))}
                            <p><b>Description : </b></p>
                            <p>{LevelList[currLevelIndex].description}</p>
                            <form onSubmit={handleSubmit(onFormSubmit)} className="">
                            <label htmlFor="clue" ><b>Enter Clue Found : </b></label>
                            <input type="text" style={{ borderRadius: '15px',width:'100px'}}  id="clue" name="clue" className="form-control" {...register("clue", { required: true })}/>
                            {errors.clue?.type === 'required' && <p className='text-danger'>*Clue is required to proceed further</p>}
                            {isBegin && <button type="submit" className="m-3" >Submit clue</button>}
                            </form>
                            {
                                !isBegin && currLevelIndex !== LevelList.length-1 &&
                                <><p>Succes!</p><button type="button"  className="m-3" style={{background : "green"}}onClick={myFunction}> Next </button></>
                            }
                            {
                                !isBegin && currLevelIndex === LevelList.length-1 &&
                                <button type="button"  className="m-3" onClick={myFunction}> Finish </button>
                            }
                            </>
                            :
                                <div className="m-auto justify-content-center"> 
                                <p>Sorry, You cannot make it to the end.</p>
                                <p>Your Result</p>
                                <Result user={user} score={score} timeArr={timeArr}/>
                                </div>
                        }
                    </div>
                )
            }
        </div>
    )
}
export default Test;