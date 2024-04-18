import React from 'react';
import { FaBookOpen, FaResearchgate } from 'react-icons/fa';
import { FcGraduationCap, FcInvite, FcPhone } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const MyCollegeCard = ({clg}) => {
    const {name,email ,collegeName,photo ,subject ,phone,address ,dob,id ,research} = clg;
    return (
//         <div>
//              <div>
//             <div className="card  bg-base-100 p-4 shadow-xl">
//               <div className='w-[40vw] mx-auto'>
//               <figure><img className=' h-[200px] pt-4' src={photo} alt="Album"/></figure>
//               </div>
  
//   <div className="card-body ">
//     <div className='w-[70%] mx-auto border  text-center'> 
//      <h2 className="card-title w-[90%] text-sm mb-4 text-center mx-auto font-mono">Student Name: {name}</h2>
//     <h2 className="card-title w-[90%] text-sm mb-4  font-mono">College Name: {collegeName}</h2>
  
//     <h2 className="card-title w-[90%] text-sm mb-4  font-mono">{email}</h2>
//     </div>
    
//     <div className='flex justify-around w-auto'>
//     <li className='list-disc marker:text-red-600  '>Sports</li>
//     <li className='list-disc marker:text-yellow-400 '>Events</li>
//     </div>
//     <div>
//     <li className='list-disc marker:text-blue-400 text-center'><a className='underline  underline-offset-4 '>Researches</a></li>
//     </div>
//     {/* <p className='text-center my-4'>Admission Date:{registered}</p> */}
//     <div className="card-actions justify-end">
//     {/* <Link to={`/details/${_id}`}>
//               <button className="btn bg-transparent border border-blue-500 rounded-none py-1 px-4 text-black">Veiw Details</button>
//             </Link> */}
//     </div>
  
//   </div>
  
// </div>

//         </div>
//         </div>
<div className="card w-[30vw] mx-auto mt-16 bg-base-100 mb-16 shadow-xl">
  <figure className="">
    <img src={photo} alt="Shoes" className="w-3/4 py-6" />
  </figure>
  <h2 className="text-xl mb-2 text-center">{name}</h2>
  <div className="text-start items-start border p-4">
   
    <h2 className='flex justify-center items-center'><FcPhone className='text-xl mr-2' />+88-{phone}</h2>
    <p className='font-mono font-semibold flex justify-center items-center text-xl'><FcGraduationCap className='text-xl mr-2' />
  {collegeName}</p>
    <p className='flex justify-center items-center'><FcInvite className='text-xl mr-2'/> {email}</p>
    <div className='flex justify-center items-center'>
    <div className='mr-2'><li className=' flex justify-around items-center '><FaBookOpen className='text-xl mr-2' />  {subject}</li></div>
  <div><li className='flex justify-around items-center'><FaResearchgate className='text-xl mr-2' /> {research}</li></div>
    </div>
    
  </div>
  <div className="card-actions">
      <button className="btn w-36 my-4 mx-auto border-blue-600 bg-transparent text-blue-600">Add Review</button>
    </div>
</div>
    );
};

export default MyCollegeCard;