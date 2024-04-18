import React from 'react';
import { Link } from 'react-router-dom';

const BestCollege = ({clg}) => {
    const {name,_id,picture,registered} = clg
    return (
        <div>
            <div className="card lg:card-side bg-base-100 p-4 shadow-xl">
              <div className='w-1/2'>
              <figure><img className='w-full h-[200px] pt-4' src={picture} alt="Album"/></figure>
              </div>
  
  <div className="card-body ">
    <div className='w-[100%] mx-auto '>  <Link to={`/admission/${_id}`}>
    <h2 className="card-title w-[90%] text-sm mb-4  font-mono">{name}</h2> </Link>
    </div>
    
    {/* <div className='flex justify-around w-auto'>
    <li className='list-disc marker:text-red-600  '>Sports</li>
    <li className='list-disc marker:text-yellow-400 '>Events</li><span><FcRight/></span>
    </div> */}
    {/* <div>
    <li className='list-disc marker:text-blue-400 text-center'><a className='underline  underline-offset-4 '>Researches</a></li>
    </div> */}
    <p className='text-center my-4'>Admission Date:{registered}</p>
    {/* <div className="card-actions justify-end">
    <Link to={`/details/${college._id}`}>
              <button className="btn bg-transparent border border-blue-500 rounded-none py-1 px-4 text-black">Veiw Details</button>
            </Link>
    </div> */}
  
  </div>
  
</div>

        </div>
    );
};

export default BestCollege;