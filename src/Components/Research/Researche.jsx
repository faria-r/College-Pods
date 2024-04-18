import React, { useEffect, useState } from 'react';
import ResearchCard from './ResearchCard';

const Researche = () => {
    const [research,setResearch] = useState([]);
    useEffect(()=>{
        fetch("research.json")
        .then(res => res.json())
        .then(data => setResearch(data))
    },[])
    return (
        <div>
            <div className="flex w-3/4 mx-auto mt-36">
                <div className='w-1/2'>
                    <h2 className='text-gray-400'>Recommended Researchs</h2>
                    <p className='text-2xl font-serif font-semibold'>Research for a Better Tomorrow</p>
                </div>
                <div className='border border-r-4 border-blue-600 mr-2'></div>
                <div className='w-1/2'>
                    <p className='text-gray-400'>Research papers serve as building blocks for future advancements by documenting current knowledge, laying foundations for new ideas, and inspiring further investigation. Through rigorous analysis and dissemination of findings, they provide a roadmap for innovation, shaping the trajectory of progress across various fields.</p>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 w-[90vw] mx-auto mt-12 mb-16'> 
{
    research.map(i=> <ResearchCard key={i._id} i={i}></ResearchCard>)
}
            </div>
        </div>
    );
};

export default Researche;