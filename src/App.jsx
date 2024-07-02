/* eslint-disable no-unused-vars */
import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import Home from "./ui/Home";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Dairy from "./features/Dairy";

import Login from "./ui/Login";
import AboutUs from "./ui/AboutUs";
import SignUp from "./ui/SignUp";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/map",
        element: <Dairy />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },

      {
        path: "/Signup",
        element: <SignUp />,
      },

      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  // const location = useLocation();
  // console.log(location);
  return (
    <RouterProvider router={router}>
      <AppLayout />
    </RouterProvider>
  );
}

export default App;
