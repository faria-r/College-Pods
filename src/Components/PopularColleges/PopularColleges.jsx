import React, { useEffect, useState } from "react";
import CollegeCard from "../CollegeCards/CollegeCard";

const PopularColleges = () => {
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/collegeList")
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
      });
  }, []);
  const popular = colleges.filter((populerClg) => populerClg.age == 5);
  return (
    <div>
      <div className="text-center">
        {" "}
        <h2 className="text-4xl w-3/4 mx-auto">Discover popular Colleges</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2  gap-2 w-[90vw] mx-auto my-16 py-6">
        {popular.map((college) => (
          <CollegeCard key={college._id} college={college}></CollegeCard>
        ))}
      </div>
    </div>
  );
};

export default PopularColleges;
