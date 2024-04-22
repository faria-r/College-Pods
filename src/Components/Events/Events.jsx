import React from 'react';
import { FcAlarmClock } from 'react-icons/fc';

const Events = ({date}) => {
    return (
        <div className='bg-white w-[250px] shadow-xl p-6  border-b-8 border-blue-600'>
            <h2 className='text-2xl '>August</h2>
            <p className='text-blue-700 '> {date}</p>
            <p className='my-2'>Annual Spring Fling": A festive event celebrating the .....</p>
            <p className=' flex items-center justify-start my-2'><FcAlarmClock /> 2:30-3:30 PM</p>
            <p>United Kingdom</p>
        </div>
    );
};

export default Events;