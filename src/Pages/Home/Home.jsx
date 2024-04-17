import React, { useState } from "react";
import Colleges from "../../Components/CollegeCards/Colleges";
import Banner from "../../Components/Banner/Banner";
import PopularColleges from "../../Components/PopularColleges/PopularColleges";
import ImageGallery from "../../Components/ImageGallery/ImageGallery";
import Researche from "../../Components/Research/Researche";



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

     <div>
     <PopularColleges></PopularColleges>
     </div>
      <div className="text-center">
        <h2 className="text-4xl w-3/4 mx-auto">Proud Graduates</h2>
        <ImageGallery></ImageGallery>
      </div>
      <div>
        <Researche></Researche>
      </div>
   
    </div>
  );
};

export default Home;
