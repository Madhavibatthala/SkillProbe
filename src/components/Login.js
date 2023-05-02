import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import GetStarted from "./GetStarted";
// import './Login.css';
//import { useNavigate } from "react-router-dom";
function Login(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    let [isLogin,setLogin] = useState(false);
    let [userData,setUserData] = useState();
    //const navigate = useNavigate();
    const onFormSubmit = (user)=>{
      console.log(user);
      setUserData(user)
      setLogin(true);
      //navigate('/get-started');
    }
    return(
        <div className="login">
          { 
            !isLogin ? (
            <div className='Login m-3'>
              <div className='container'>
                <div className='row'>
                  <div className="col-4 m-auto" >
                    <form className=' bg-transparent bg-opacity-50 shadow rounded-3' onSubmit={handleSubmit(onFormSubmit)}>
                      <div>
                       <div className='m-3'>
                        <h3 className='text-center m-3 p-2'>Login</h3>
                        <hr  />
                        </div>
                        <p className="m-3">(<b>Note :</b> abc will be your unique id for the email abc@gmail.com)</p>
                        {/* Unique Id */}
                        <div className="m-3">
                        <label htmlFor="name" >Unique Id</label>
                        <input type="text" style={{ borderRadius: '15px' }} id="name" className="form-control" {...register("name", { required: true })}/>
                        {errors.name?.type === 'required' && <p className='text-danger'>*Id is required</p>}
                        </div>
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
                        <button className="btn w-50 m-3 bg-dark text-white" type="submit" >Create</button>
                        </div>    
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>)
          :(
            <GetStarted userData={userData}/>
          )}
        </div>
    )
}
export default Login;