import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UpdateProfile from "../pages/Home/UpdateProfile";
import UserProfile from "../pages/Home/UserProfile";
import About from "../pages/Home/About";
import PropertyDetails from "../pages/Home/PropertyDetails";
import PrivateRoutes from "./PrivateRoutes";


  const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage> ,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path:'/properties/:id',
                element: <PrivateRoutes><PropertyDetails></PropertyDetails></PrivateRoutes>,
                loader: () => fetch('/data.json')
            },
            {
                path:'/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/updateProfile',
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: '/userProfile',
                element: <UserProfile>  </UserProfile>
            },
        ]
    }
  ])


  export default router;