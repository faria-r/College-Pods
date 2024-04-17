import React, { useState } from "react";
import Colleges from "../../Components/CollegeCards/Colleges";
import Banner from "../../Components/Banner/Banner";
import PopularColleges from "../../Components/PopularColleges/PopularColleges";



const Home = () => {
    const [inputText,setInputText] = useState("");
      let inputHandler = (e) => {
        let lowarCase = e.target.value.toLowerCase();
        setInputText(lowarCase)
      }
  return (
    <div>
        <div>
               <div className="form-control">
      <input    onChange={inputHandler} type="text" placeholder="Search Colleges" className="input input-bordered w-24 md:w-[30%] mx-auto" />
    </div>
        </div>
        {/* <Banner></Banner> */}
      <Colleges input={inputText}></Colleges>

      <PopularColleges></PopularColleges>
    </div>
  );
};

export default Home;
