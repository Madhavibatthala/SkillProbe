import React from "react";
import { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import './LeaderBoard.css';
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
        <div className="container ">
            <table style={{width : "100%"}} >
            <tr style={{width : "100%"}} className="row">
                <th className="col-4">S No.</th>
                <th className="col-4">ID</th>
                <th className="col-4">Score</th>
            </tr>

            {users.map((b,index) => (
            <div key={b._id}>
                
               <tr style={{width : "100%"}} className=" row text-dark bg-transparent bg-opacity-50 mx-auto my-3">
                    <td className="col-4">{index+1}</td>
                    <td className="col-4">{b.name}</td>
                    <td className="col-4">{b.score}</td>
                </tr>
                
            </div>
            
         ))}
         </table>
        </div>
    );
}
export default LeaderBoard;