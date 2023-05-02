import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { ADMIN_EMAIL, ADMIN_PASSWORD } from '../config';
// Use the configuration variables in your code...

// import dotenv from 'dotenv';
import AdminDashboard from "./AdminDashboard";

function AdminLogin(){
  // dotenv.config();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoginSuccess,setLoginSuccess] = useState(true);
  const [isLoggedIn,setLoggedIn] = useState(false);

  const onFormSubmit = (user)=>{
    //console.log(user);
    // setUserData(user)
    // const ad_mail = process.env.ADMIN_EMAIL;
    // const ad_pass = process.env.ADMIN_PASSWORD;
    
    if(ADMIN_EMAIL == user.email && ADMIN_PASSWORD == user.pass){
      setLoginSuccess(true);
      setLoggedIn(true);
    }else{
      setLoginSuccess(false);
    }
console.log(ADMIN_EMAIL);
console.log(ADMIN_PASSWORD);
    // setLogin(true);
    //navigate('/get-started');
  }
    return(
        <div>
          { 
            !isLoggedIn ? (
            <div className='Login m-5'>
              <div className='container'>
                <div className='row'>
                  <div className="col-4 m-auto" >
                  <h1>Admin Login</h1>
                    <form className=' bg-transparent bg-opacity-50 shadow rounded-3' onSubmit={handleSubmit(onFormSubmit)}>
                      <div>
                        {/* email */}
                        <div className="m-3">
                        <label htmlFor="email" >Email Id</label>
                        <input type="email" style={{ borderRadius: '15px' }} id="email" className="form-control"{...register("email", { required: true })} />
                        {errors.email?.type === 'required' && <p className='text-danger'>*Email is required</p>}

                        </div>
                        {/* password */}
                        <div className="m-4">
                        <label htmlFor="pass">Password</label>
                        <input type="password" style={{ borderRadius: '15px' }} id="pass" className="form-control" {...register("pass", { required: true })} />
                        {errors.password?.type === 'required' && <p className='text-danger'>*Password is required</p>}
                        </div>
                    
                      {/* submit button */}
                        <div className='mb-0 text-center'>
                        <button className="btn w-50 m-3 bg-dark text-white" type="submit" >Login</button>
                        </div>    
                        {
                          !isLoginSuccess? (
                              <div>Incorrect Email Id or password. Try Again..</div>
                          ) : (
                              <div></div>
                          )
                        }
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>)
          :(
            <AdminDashboard/>
          )}
        </div>
    )
}
export default AdminLogin;