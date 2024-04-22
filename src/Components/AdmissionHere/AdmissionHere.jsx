import React from "react";
import img from '../../assets/ads.jpg'
const AdmissionHere = () => {
  return (
    <div>
      <div className="bg-white rounded shadow-lg px-8 border  flex justify-center items-center my-16 w-3/4 mx-auto">
       <div className="w-auto"> <h2 className="text-gray-400 text-xl">Admission Process</h2>
        <p className="text-2xl font-serif font-semibold">
          Planning to start college in this year?
        </p>
        <ul className="list-disc p-6 marker:text-blue-600">
          <li>Completed Application Form: Fill out all sections accurately.</li>
          <li>
            Academic Transcripts: Submit official transcripts from previous
            institutions.
          </li>
          <li>Standardized Test Scores: Provide SAT/ACT scores as required.</li>
          <li>
            Letters of Recommendation: Request letters from teachers or mentors.
          </li>
          <li>
            personal Statement or Essay: Write a compelling essay addressing
            prompts.
          </li>
          <li>
            Extracurricular Activities: Highlight involvement and achievements.
          </li>
          <li>Application Fee: Pay the required fee for submit</li>
        </ul></div>
        <div><img className="bg-transparent w-[350px] p-8  mx-auto" src={img}/></div>
      </div>
    </div>
  );
};

export default AdmissionHere;
