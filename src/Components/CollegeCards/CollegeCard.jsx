import React from 'react';
import { Link } from 'react-router-dom';
import { FcRight } from "react-icons/fc";
const CollegeCard = ({college}) => {

    return (
        <div>
            <div className="card lg:card-side bg-base-100 p-4 shadow-xl">
              <div className='w-1/2'>
              <figure><img className='w-full h-[200px] pt-4' src={college.picture} alt="Album"/></figure>
              </div>
  
  <div className="card-body ">
    <div className='w-[100%] mx-auto '>
    <h2 className="card-title w-[90%] text-sm mb-4  font-mono">{college.name}</h2>
    </div>
    
    <div className='flex justify-around w-auto'>
    <li className='list-disc marker:text-red-600  '>Sports</li>
    <li className='list-disc marker:text-yellow-400 '>Events</li>
    </div>
    <div>
    <li className='list-disc marker:text-blue-400 text-center'><a className='underline  underline-offset-4 '>Researches</a></li>
    </div>
    <p className='text-center my-4'>Admission Date:{college.registered}</p>
    <div className="card-actions justify-end">
    <Link to={`/details/${college._id}`}>
              <button className="btn bg-transparent border border-blue-500 rounded-none py-1 px-4 text-black">Veiw Details</button>
            </Link>
    </div>
  
  </div>
  
</div>

        </div>
    );
};

export default CollegeCard;


 {/* style={{ backgroundImage:`linear-gradient(transparent,black), url(${college.pcture})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize:'cover'
          }} */}