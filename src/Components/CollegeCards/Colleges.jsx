import React, { useEffect, useState } from 'react';
import CollegeCard from './CollegeCard';

const Colleges = (props) => {
    const [colleges,setColleges] = useState([]);
    useEffect(()=>{
        fetch('Colleges.json')
        .then(res => res.json())
        .then(data =>{
            setColleges(data)
        })
    },[]);
    const filteredData = colleges.filter((el) => {
        if (props.input === '') {
            // return el;
        }  
        else {
            return el.name.toLowerCase().includes(props.input)
        }
    })
    return (
        <div>
            <div className='grid grid-cols-2 gap-2 w-[90vw] mx-auto my-16 py-6'>
            {
                filteredData.map(college => <CollegeCard key={college._id} college={college}></CollegeCard>)
            }
            </div>
           
        </div>
    );
};

export default Colleges;