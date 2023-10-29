import Main from "../Layout/Main";
import Checkout from "../pages/Home/CheckOut/Checkout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Sign Up/SignUp";

const { createBrowserRouter } = require("react-router-dom");

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/checkout/:id',
          element:<Checkout></Checkout>,
          loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        }
      ]
    },
  ]);