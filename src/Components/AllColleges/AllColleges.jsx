import React, { useEffect, useState } from 'react';
import CollegeCard from '../CollegeCards/CollegeCard';

const AllColleges = () => {
    const [colleges,setColleges] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/collegeList')
        .then(res => res.json())
        .then(data =>{
            setColleges(data)
        })
    },[]);
    return (
        <div>
            <div className='grid grid-cols-2 gap-2 w-[90vw] mx-auto my-16 py-6'>
            {
                colleges.map(college => <CollegeCard key={college._id} college={college}></CollegeCard>)
            }
            </div>
        </div>
    );
};

export default AllColleges;