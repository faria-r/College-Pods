import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MyCollegeCard from './MyCollegeCard';

const MyCollege = () => {
    const myColleges = useLoaderData();
    return (
        <div>
            {
                myColleges.map(clg =><MyCollegeCard key={clg._id} clg={clg}></MyCollegeCard> )
            }
        </div>
    );
};

export default MyCollege;