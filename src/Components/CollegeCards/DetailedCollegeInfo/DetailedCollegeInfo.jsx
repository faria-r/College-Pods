import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailedCard from './DetailedCard';

const DetailedCollegeInfo = () => {
    const collegeInfo= useLoaderData();
    return (
        <div>
           <div>
           {
                collegeInfo.map(detailedCollege => <DetailedCard key={detailedCollege._id} detailedCollege={detailedCollege}></DetailedCard>)
            }
           </div>
        </div>
    );
};

export default DetailedCollegeInfo;