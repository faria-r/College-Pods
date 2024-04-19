import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import AllColleges from "../Components/AllColleges/AllColleges";
import DetailedCollegeInfo from "../Components/CollegeCards/DetailedCollegeInfo/DetailedCollegeInfo";
import Admission from "../Pages/Admission/Admission";
import AdmissionForm from "../Pages/Admission/AdmissionForm";
import MyCollege from "../Pages/MyCollege/MyCollege";
import ReviewForm from "../Components/Review/ReviewForm/ReviewForm";
import LoginForm from "../Pages/Login/LoginForm";
import SignUp from "../Pages/SignUp/SignUp";

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
        path:'/login',
        element:<LoginForm></LoginForm>
    },
    {
        path:'/signup',
        element:<SignUp></SignUp>
    },
      {
        path: "/college",
        element: <AllColleges></AllColleges>,
      },
      {
        path:'/details/:id',
        loader:({params})=> fetch(`https://college-pods-server-bxw8ogyva-fariars-projects.vercel.app/details/${params.id}`),
        element:<DetailedCollegeInfo></DetailedCollegeInfo>
    },
    {
        path:'/admission',
        loader:()=> fetch('https://college-pods-server-bxw8ogyva-fariars-projects.vercel.app/admission'),
        element:<Admission></Admission>
    },
    {
        path:'/admission/:id',
        loader:({params}) => fetch(`https://college-pods-server-bxw8ogyva-fariars-projects.vercel.app/admission/${params.id}`),
        element:<AdmissionForm></AdmissionForm>
    },
    {
        path: "/myCollege",
        loader:()=>fetch('https://college-pods-server-bxw8ogyva-fariars-projects.vercel.app/myCollege'),
        element: <MyCollege></MyCollege>,
      },
    {
        path: "/myCollege/:id",
        loader:({params})=>fetch(`https://college-pods-server-bxw8ogyva-fariars-projects.vercel.app/myCollege/${params.id}`),
        element: <ReviewForm></ReviewForm>,
      },
    ],
  },
]);
