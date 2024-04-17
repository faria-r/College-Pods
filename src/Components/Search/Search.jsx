import React, { useState } from 'react';
import Colleges from '../CollegeCards/Colleges';

const Search = () => {
    const [inputText,setInputText] = useState("");
      let inputHandler = (e) => {
        let lowarCase = e.target.value.toLowerCase();
        setInputText(lowarCase)
      }
    return (
        <div>
               <div className="form-control">
      <input    onChange={inputHandler} type="text" placeholder="Search Colleges" className="input input-bordered w-24 md:w-[30%] mx-auto" />
    </div>
    <Colleges input={inputText}></Colleges>
        </div>
    );
};

export default Search;