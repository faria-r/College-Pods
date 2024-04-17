import React, { useEffect, useState } from 'react';
import CollegeCard from '../CollegeCards/CollegeCard';

const PopularColleges = () => {
    const [colleges,setColleges] = useState([]);
    useEffect(()=>{
        fetch('Colleges.json')
        .then(res => res.json())
        .then(data =>{
            setColleges(data)
        })
    },[]);
    const popular = colleges.filter( populerClg => populerClg.age == 5)
    return (
        <div> 
            <h2 className='text-3xl text-black mx-auto w-[50%]'>Discover popular Colleges</h2>
             <div className='grid grid-cols-2 gap-2 w-[90vw] mx-auto my-16 py-6'>
            {
                popular.map(college => 
                     <CollegeCard key={college._id} college={college}></CollegeCard>)
            }
            </div>
        </div>
    );
};

export default PopularColleges;