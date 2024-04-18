import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import AllColleges from "../Components/AllColleges/AllColleges";
import DetailedCollegeInfo from "../Components/CollegeCards/DetailedCollegeInfo/DetailedCollegeInfo";
import Admission from "../Pages/Admission/Admission";
import AdmissionForm from "../Pages/Admission/AdmissionForm";
import MyCollege from "../Pages/MyCollege/MyCollege";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/college",
        element: <AllColleges></AllColleges>,
      },
      {
        path:'/details/:id',
        loader:({params})=> fetch(`http://localhost:5000/details/${params.id}`),
        element:<DetailedCollegeInfo></DetailedCollegeInfo>
    },
    {
        path:'/admission',
        loader:()=> fetch('http://localhost:5000/admission'),
        element:<Admission></Admission>
    },
    {
        path:'/admission/:id',
        loader:({params}) => fetch(`http://localhost:5000/admission/${params.id}`),
        element:<AdmissionForm></AdmissionForm>
    },{
        path: "/myCollege",
        loader:()=>fetch('http://localhost:5000/myCollege'),
        element: <MyCollege></MyCollege>,
      },
    ],
  },
]);
