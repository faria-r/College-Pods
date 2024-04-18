import React from 'react';

const AdmissionFormDetails = ({item,handleAddAdmission}) => {
    const{name, _id} = item;
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
   <div className="hero-content flex-col">
     <div className="text-center lg:text-left">
       <h1 className="text-3xl text-blue-600 font-bold">
        Welcome TO the Admission Journey!
       </h1>
       <p className="py-6">
         Please Fill The Form Below To Get Yourself Admitted At <br />
         <span className="text-xl text-blue-600 font-bold">
         {name}
         </span>
       </p>
     </div>
     <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
       <form onSubmit={handleAddAdmission}>
         <div className="card-body ">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
             <div className="form-control">
               <label className="label">
                 <span className="label-text">Name</span>
               </label>
               <input
                 type="text"
                 name="name"
                 placeholder="Your Name"
                 className="input input-bordered"
               />
             </div>
             <div className="form-control">
               <label className="label">
                 <span className="label-text">Email</span>
               </label>
               <input
                 type="email"
                 name="email"
                //  defaultValue={user?.email}
                 placeholder="email"
                 className="input input-bordered"
               
               />
             </div>
             <div className="form-control">
               <label className="label">
                 <span className="label-text">Subject</span>
               </label>
               <input
                 type="text"
                 name="subject"
                //  defaultValue={user?.email}
                 placeholder="Subject"
                 className="input input-bordered"
                 
               />
             </div>
             <div className="form-control">
               <label className="label">
                 <span className="label-text">Phone</span>
               </label>
               <input
                 type="text"
                 name="phone"
                //  defaultValue={user?.email}
                 placeholder="Phone No:"
                 className="input input-bordered"
                 
               />
             </div>
             <div className="form-control">
               <label className="label">
                 <span className="label-text">Address</span>
               </label>
               <input
                 type="text"
                 name="address"
               
                 placeholder="Current Address"
                 className="input input-bordered"
                
               />
             </div>
             <div className="form-control">
               <label className="label">
                 <span className="label-text">Date-Of-Birth</span>
               </label>
               <input
                 type='date'
                 name="dob"
               
                 placeholder="Date Of Birth"
                 className="input input-bordered"
                
               />
             </div>
             <div className="form-control">
               <label className="label">
                 <span className="label-text">PhotoURL</span>
               </label>
               <input
                 type="text"
                 name="photo"
                 placeholder="Your Photo URL"
                 className="input input-bordered"
               />
             </div>
             <div className="form-control">
               <label className="label">
                 <span className="label-text">College</span>
               </label>
               <input
                 type="text"
                 name="collegeName"
                 placeholder=""
                 defaultValue={name}
                 className="input input-bordered"
               />
             </div>
             <div className="form-control">
               <label className="label">
                 <span className="label-text">College ID</span>
               </label>
               <input
                 type="text"
                 name="id"
                 placeholder=""
                 defaultValue={_id}
                readOnly
                 className="input input-bordered"
               />
             </div>
             <textarea
               className="textarea textarea-primary w-full text-center"
               name="research"
               placeholder="Please Tell Us Your Research Interest Feild"
             ></textarea>
                
           </div>
           <div className="form-control mt-6">
             <button className="btn bg-blue-700 px-12 mx-auto text-white">Submit</button>
           </div>
         </div>
       </form>
     </div>
   </div>
       </div>
   </div>
    );
};

export default AdmissionFormDetails;