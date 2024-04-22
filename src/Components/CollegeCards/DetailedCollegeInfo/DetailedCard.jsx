import React from "react";
import AdmissionHere from "../../AdmissionHere/AdmissionHere";
import Events from "../../Events/Events";

const DetailedCard = ({ detailedCollege }) => {
  const { _id, name, picture, details, research, events, Sports,registered } =
    detailedCollege;
  console.log(name);
  return (
    <div>
      <div className="">
        <h1 className="text-4xl text-center font-serif my-8 text-blue-500 font-bold">
          {name}
        </h1>
        <div className="">
          <img
            src={picture}
            className=" w-[50vw] mx-auto h-[60vh]  shadow-2xl"
          />
          <div className="w-[90vw] mx-auto grid grid-cols-2 gap-3 my-16">
            <div className=" px-8 py-6 text-justify rouned shadow-xl">
              <h2 className="text-3xl text-start font-serif my-4 font-bold">
                About Us
              </h2>
              <div>
                <p>
                  Welcome to{" "}
                  <span className="text-blue-500 text-xl font-mono">
                    {name}
                  </span>{" "}
                  where innovation and excellence converge. Our campus offers
                  top-tier facilities, including advanced laboratories, a vast
                  digital library, and modern recreational centers, ensuring an
                  enriching academic experience. With a dedicated faculty
                  committed to nurturing critical thinking and creativity,
                  students thrive in a supportive environment. At{" "}
                  <span className="text-blue-500  font-mono">{name}</span> , we
                  prioritize hands-on learning and research, providing
                  opportunities for practical exploration in students' chosen
                  fields. Through diverse extracurricular activities and
                  community engagement, students broaden their horizons and make
                  meaningful contributions to society. Join us at and embark on
                  a journey of discovery and success.
                </p>
              </div>
            </div>
            <div>
              <div className=" w-3/4 mx-auto gap-3">
                <div className=" mx-auto">
                  <h2 className="text-gray-400">Enriched Researchs</h2>
                  <p className="text-2xl font-serif font-semibold">
                    Exploring Boundaries, Advancing Frontiers: Research
                    Unleashed
                  </p>
                </div>
                <div className="border border-r-4 border-blue-600 mr-2"></div>
                <div className="mt-6">
                  <p className="text-gray-500">
                    Research papers serve as building blocks for future
                    advancements by documenting current knowledge, laying
                    foundations for new ideas, and inspiring further
                    investigation. Through rigorous analysis and dissemination
                    of findings, they provide a roadmap for innovation, shaping
                    the trajectory of progress across various fields.
                  </p>
                  <p className="text-gray-500">
                    Our slogan embodies our commitment to pushing the boundaries
                    of knowledge through relentless exploration and inquiry.
                    here, we believe in unleashing the power of research to
                    drive innovation and shape the future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-36">
        <AdmissionHere></AdmissionHere>
      </div>
      <h2 className="text-3xl font-extralight text-blue-600 text-center mb-12">
          Upcoming Events
        </h2>
      <div className="grid grid-cols-3 gap-2 w-3/4 mx-auto mb-24">
       
      {
        events.map(e => <Events date={registered}></Events>)
      }
      </div>
      
    </div>
  );
};

export default DetailedCard;
