import React from "react";
import { useState, useEffect } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
// import './AdminDashboard.css'
function AdminDashboard() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
       axios.get('http://localhost:5000/user/getuserdata') 
          .then((res) => {    
             let arr = res.data.payload;
             console.log("data : ",arr);
             arr.reverse();
            setUsers(arr);
        })
          .catch((err) => console.log(err));
    },[] );
    return (
        <div className="container table-responsive">

<table className="table text-center bg-dark table-striped  table-bordered table-hover">
    <thead className="thead-dark">
            <tr className="row">
                <th className="col-1">S No.</th>
                <th className="col-2">Username</th>
                <th className="col-3">Email</th>
                <th className="col-1">Score</th>
                <th className="col-1">[1]</th>
                <th className="col-1">[2]</th>
                <th className="col-1">[3]</th>
                <th className="col-1">[4]</th>
                <th className="col-1">[5]</th>
            </tr>
            </thead>
            <tbody>
            {users.map((b,ind) => (
            <div key={b._id}>
               <tr className="row">
               <td className="col-1">{ind+1}</td>
                    <td className="col-2">{b.name}</td>
                    <td className="col-3">{b.email}</td>
                    <td className="col-1">{b.score}</td>
                    
                        {
                            (b.timeArr).map((t, index) => (
                                <td className="col-1 text-dark">{t}</td>
                            ))
                        }

                </tr>
            </div>
         ))}
         </tbody>
         </table>
        </div>
    );
}
export default AdminDashboard;