import React from "react";
import { useState, useEffect } from 'react';
import axios from "axios";
function AdminDashboard() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
       axios.get('http://localhost:3000/user/getuserdata') 
          .then((res) => {    
             let arr = res.data.payload;
             console.log("data : ",arr);
             arr.reverse();
            setUsers(arr);
        })
          .catch((err) => console.log(err));
    },[] );
    return (
        <div className="container ">

<table style={{width : "100%"}} >
            <tr style={{width : "100%"}} className="row">
                <th className="col-2">S No.</th>
                <th className="col-2">ID</th>
                <th className="col-3">Email</th>
                <th className="col-2">Score</th>
                <th className="col-3">Time Taken for Level</th>
            </tr>

            {users.map((b,ind) => (
            <div key={b._id}>
               <tr className="row">
               <td className="col-2">{ind+1}</td>
                    <td className="col-2">{b.name}</td>
                    <td className="col-3">{b.email}</td>
                    <td className="col-2">{b.score}</td>
                    <td className="col-3">
                        {
                            (b.timeArr).map((t, index) => (
                                <div >
                                    {
                                        t!==0 &&
                                        <div className="d-flex"><div className="text-dark">{index + 1} : </div><div className="text-dark">{t} sec</div></div>
                                    }
                                </div>
                            ))
                        }

                    </td>
                </tr>
            </div>
         ))}
         </table>
        </div>
    );
}
export default AdminDashboard;