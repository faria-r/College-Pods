import React from "react";
import { FaBookOpen, FaResearchgate } from "react-icons/fa";
import { FcGraduationCap, FcInvite, FcPhone } from "react-icons/fc";
import { Link } from "react-router-dom";

const MyCollegeCard = ({ clg }) => {
  const {
    name,
    email,
    collegeName,
    photo,
    subject,
    phone,
    _id,
    research,
  } = clg;
  return (
    <div className="card w-[30vw] mx-auto mt-16 bg-base-100 mb-16 shadow-xl">
      <figure className="">
        <img src={photo} alt="Shoes" className="w-3/4 py-6" />
      </figure>
      <h2 className="text-xl mb-2 text-center">{name}</h2>
      <div className="text-start items-start border p-4">
        <h2 className="flex justify-center items-center">
          <FcPhone className="text-xl mr-2" />
          +88-{phone}
        </h2>
        <p className="font-mono font-semibold flex justify-center items-center text-xl">
          <FcGraduationCap className="text-xl mr-2" />
          {collegeName}
        </p>
        <p className="flex justify-center items-center">
          <FcInvite className="text-xl mr-2" /> {email}
        </p>
        <div className="flex justify-center items-center">
          <div className="mr-2">
            <li className=" flex justify-around items-center ">
              <FaBookOpen className="text-xl mr-2" /> {subject}
            </li>
          </div>
          <div>
            <li className="flex justify-around items-center">
              <FaResearchgate className="text-xl mr-2" /> {research}
            </li>
          </div>
        </div>
      </div>
      <div className="card-actions w-36 mx-auto">
        <Link to={`/myCollege/${_id}`}>
          <button className="btn w-36 my-4 mx-auto border-blue-600 bg-transparent text-blue-600">
            Add Review
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyCollegeCard;
