import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LoginForm = () => {
 
  const { register, handleSubmit } = useForm("");
  const handleLogin = (data) =>{
    console.log(data)
  }
  return (
    <div>
      <div className="h-[800px] flex justify-center items-center">
        <div className="w-96 p-6">
          <h2 className="text-4xl text-center">Login</h2>
          <form
            onSubmit={handleSubmit(handleLogin)}
          >
            <div className="form-control w-full max-w-xs">
              <label className="label"><span className="label-text">Email</span></label>
              <input type="email" className="input input-bordered w-full max-w-xs" {...register("email")}/>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label"><span className="label-text">Password</span></label>
              <input type="password" className="input input-bordered w-full max-w-xs" {...register("password")}/>
              <label className="label"><span className="label-text">Forget Password?</span></label>
            </div>

           
        
            <input className="btn btn-primary w-full " value="Login" type="submit" />
          </form>
          <p className="my-2">New To CollegePods? <Link to="/signup" className="text-blue-600" >Create New Account</Link></p>

          <div className="divider">OR</div>
          <div className="flex justify-between items-center gap-1">
          <button className="btn btn-outline border border-blue-600">Continue with Google</button>
          <button className="btn btn-outline border border-blue-600">Continue with Facebook</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
