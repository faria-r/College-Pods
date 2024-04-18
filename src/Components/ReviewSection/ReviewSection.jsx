import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard/ReviewCard';

const ReviewSection = () => {
    const [review,setReview] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])
    return (
        <div>
          <div className='lg:flex  gap-3 justify-evenly items-center p-4 m-8 w-3/4 mx-auto'>
            {
                review.map(item => <ReviewCard key={item._id} item={item}></ReviewCard>)
            }
          </div>
        </div>
    );
};

export default ReviewSection;