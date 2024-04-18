import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {
    const {register,handleSubmit} = useForm();
    const {createUser} = useContext(AuthContext)
    const handleSignIn = (data) => {
        console.log(data)
createUser(data.email,data.password)
.then(result => {
    const user = result.user;
    console.log(user)
})
.catch(error => console.log(error));
    }
    return (
        <div>
        <div className="h-[800px] flex justify-center items-center">
          <div className="w-96 p-6">
            <h2 className="text-4xl text-center">SignUp</h2>
            <form
              onSubmit={handleSubmit(handleSignIn)}
            >
              <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Name</span></label>
                <input type="name" className="input input-bordered w-full max-w-xs"{...register("name")} />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Email</span></label>
                <input type="email" className="input input-bordered w-full max-w-xs" {...register("email")} />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Password</span></label>
                <input type="password" className="input input-bordered w-full max-w-xs mb-4" {...register("password")} />
              
              </div>
  
             
          
              <input className="btn btn-primary w-full " value="SignUp" type="submit" />
            </form>
            <p className="my-2">Already Registered? <Link className="text-blue-600" to='/login'>Please Login</Link></p>
  
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

export default SignUp;