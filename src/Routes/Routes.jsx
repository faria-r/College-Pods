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
import Error from "../Pages/ErrorPage/Error";
import { Root } from "postcss";
import PrivateRoute from "./PrivateRoute";

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
        path: "/login",
        element: <LoginForm></LoginForm>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/college",
        element: <AllColleges></AllColleges>,
      },
      {
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(
            `https://college-pods-server.vercel.app/details/${params.id}`
          ),
        element: <DetailedCollegeInfo></DetailedCollegeInfo>,
      },
      {
        path: "/admission",
        loader: () =>
          fetch(
            "https://college-pods-server.vercel.app/admission"
          ),
        element: <Admission></Admission>,
      },
      {
        path: "/admission/:id",
        loader: ({ params }) =>
          fetch(
            `https://college-pods-server.vercel.app/admission/${params.id}`
          ),
        element: <AdmissionForm></AdmissionForm>,
      },
      {
        path: "/myCollege",
        loader: () =>
          fetch(
            "https://college-pods-server.vercel.app/myCollege"
          ),
        element:<PrivateRoute><MyCollege></MyCollege></PrivateRoute> ,
      },
      {
        path: "/myCollege/:id",
        loader: ({ params }) =>
          fetch(
            `https://college-pods-server.vercel.app/myCollege/${params.id}`
          ),
        element: <ReviewForm></ReviewForm>,
      },
    ],
  },
  {
    path: "*",
    element: <p>Not Found</p>,
  },
]);
