import React from 'react';

const ResearchCard = ({i}) => {
    const {name,picture,_id,links,about} = i;
    return (
        <div>
            <div className="card w-[300px] mx-auto bg-base-100 shadow-xl">
                <div className='bg-blue-600 text-white p-2 '>
                <h2 className=" text-center text-xl">{name}</h2>
                </div>
  <figure className="">
    <img  src={picture} alt="Shoes" className=" w-full h-[150px]" />
  </figure>
  <div className="card-body text-start">
    <p className='text-gray-400 text-justify'>{about.slice(0,80)+'...'}</p>
    <div className="card-actions">
      <button className="btn bg-blue-600 mt-4 mb-0 text-white rounded-none"><a href={links} target='_blank'>Read Now</a></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ResearchCard;