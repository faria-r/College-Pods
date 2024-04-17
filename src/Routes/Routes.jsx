import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import AllColleges from "../Components/AllColleges/AllColleges";
import DetailedCollegeInfo from "../Components/CollegeCards/DetailedCollegeInfo/DetailedCollegeInfo";

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
    ],
  },
]);
