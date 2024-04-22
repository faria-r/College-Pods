import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";

const LoginForm = () => {
 const provider = new GoogleAuthProvider();
 const Fbprovider = new FacebookAuthProvider();
  const { register, handleSubmit } = useForm("");
const {signIn,logInWithGoogle,logInWithFaceBook} = useContext(AuthContext);
//Navigating user to their desird path after login
const location = useLocation();
const navigate = useNavigate();

const from = location?.from?.pathname ||  '/'

//handle login
  const handleLogin = (data) =>{
   signIn(data.email,data.password)
   .then(result =>{
    const user = result.user;
    console.log(user)
   });
   navigate(from,{replace:true})
   .catch(error => console.log(error));
  };
//handle login with Google
  const handleLoginWithGoogle = () =>{
  logInWithGoogle(provider)
   .then(result =>{
    const user = result.user;
    console.log(user,'google')
   });
   navigate(from,{replace:true})
   .catch(error => console.log(error));
  }
//handle login with Facebook
  const handleLoginWithFaceBook = () =>{
    logInWithFaceBook(Fbprovider)
   .then(result =>{
    const user = result.user;
    console.log(user,'facebook')
   });
   navigate(from,{replace:true})
   .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });
  }
  return (
    <div>
      <div className="h-[780px] flex justify-center items-center">
        <div className="w-96 p-6 border border-blue-600 bg-blue-100">
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
          <div className="text-center ">
          <button onClick={handleLoginWithGoogle} className="btn btn-outline border border-blue-600">Continue with Google</button>
          <button onClick={handleLoginWithFaceBook} className="btn mt-4 btn-outline border border-blue-600">Continue with Facebook</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
