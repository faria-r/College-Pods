import React from "react";
import { Link } from "react-router-dom";
import { FcRight } from "react-icons/fc";
const CollegeCard = ({ college }) => {
  return (
   
      <div className="sm:w-3/4 lg:w-auto lg:flex justify-center gap-2 rounded items-center bg-blue-100 px-4 py-6 shadow-xl">
      <div>
  <img
    className="w-auto lg:w-[250px] mx-auto h-[200px]"
    src={college.picture}
    alt="Album"
  />
</div>

<div className="flex-col justify-center items-center w-auto lg:w-[250px]  mx-auto p-6 border lg:bg-white">
<div className="text-center  ">
  <h2 className=" text-sm mb-4 text-center font-mono">
    {college.name}
  </h2>
</div>

<div className="flex justify-around w-auto">
  <li className="list-disc marker:text-red-600  ">Sports</li>
  <li className="list-disc marker:text-yellow-400 ">Events</li>
</div>

<div className="my-4">
  <li className="list-disc marker:text-blue-400 text-center">
    <a className="underline  underline-offset-4">Researches</a>
  </li>
</div>

<p className="text-center text-blue-500 my-4">
  Admission Date:{college.registered}
</p>
<div className="card-actions justify-end">
  <Link to={`/details/${college._id}`}>
    <button className="btn bg-transparent hover:bg-blue-200 border border-blue-500 mt-2 rounded-none py-1 px-4 text-black">
      Veiw Details
    </button>
  </Link>
</div>

</div>
       





      </div>
  
  );
};

export default CollegeCard;


{/* 

 */}
