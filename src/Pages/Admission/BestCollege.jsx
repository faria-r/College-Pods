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
    <p className='text-center my-4'>Admission Date:{registered}</p>
  </div>
  
</div>

        </div>
    );
};

export default BestCollege;