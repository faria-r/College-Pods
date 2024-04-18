import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BestCollege from './BestCollege';

const Admission = () => {
    const BestClg = useLoaderData();
    return (
        <div>
            {
                BestClg.map(clg => <BestCollege key={clg._id} clg={clg}></BestCollege>)
            }
        </div>
    );
};

export default Admission;