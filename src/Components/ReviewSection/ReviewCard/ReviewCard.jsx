import React from 'react';

const ReviewCard = ({item}) => {
    const{ name,
        email ,
        photo ,
        clgPhoto,
        review,
        id ,
        collegeName} = item;
    return (
        <div>
            
            <div className="card w-[350px] mb-6 bg-base-100 shadow-xl">
            <h2 className='text-center text-xl font-mono font-extralight'>{collegeName}</h2>
  {/* <figure><img src={clgPhoto} alt="college"/></figure> */}
  <div className="card-body">
    <h2 className="card-title text-center"><img src={photo} alt="student" className='rounded-full border border-blue-600 h-24 w-24 mx-auto'/></h2>
    <p>{name}'s<span className='font-semibold'> Says:</span></p>
    <p>About <span  className='font-semibold text-blue-600'>{collegeName}</span></p>
    <p className='text-xl'>{review}</p>
    
  </div>
</div>
        </div>
    );
};

export default ReviewCard;