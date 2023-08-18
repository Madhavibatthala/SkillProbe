import React from "react";
import { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
// import './LeaderBoard.css';
import "bootstrap/dist/css/bootstrap.min.css"
function LeaderBoard() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
       axios.get('http://localhost:5000/user/getuserdata')
            
          .then((res) => {
             
             let arr = res.data.payload;
             console.log("data : ",arr);
             arr.sort((a, b) => a.score - b.score);
             arr.reverse();
            setUsers(arr);
        })
        // .then(response => {
        //     const decoder = new TextDecoder();
        //     const text = decoder.decode(response.data);
        //     return JSON.parse(text);
        // })
        // .then(array => console.log("arr = ",array))
          .catch((err) => console.log(err));
    },[] );
    return (
        <div className="container table-responsive  ">
            <table   className="table text-center bg-light table-striped  table-bordered table-hover">
                <thead className="thead-dark">
            <tr  className="row">
                <th className=" col-4 p-3  ">S No.</th>
                <th className=" col-4 p-3 ">ID</th>
                <th className=" col-4 p-3 ">Score</th>
            </tr>
            </thead> 
             <tbody>
            {users.map((b,index) => (
            // <div key={b._id}>
                
               <tr  key ={b._id} className=" row">
                    <td className=" col-4 p-3  ">{index+1}</td>
                    <td className=" col-4 p-3 ">{b.name}</td>
                    <td className=" col-4 p-3 ">{b.score}</td>
                </tr>
               
            // </div>
           
            
         ))}
           </tbody> 
         </table>
        </div>
    );
}
export default LeaderBoard;