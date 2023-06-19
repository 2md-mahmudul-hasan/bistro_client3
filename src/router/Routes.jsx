import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import SignUp1 from "../pages/SignUp/SignUp1";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: 'menu',
        element: <Menu></Menu>
      },
      // {
      //   path: 'order',
      //   element: <Order></Order>
      // },
      {
        path: 'order/:category',
        element: <Order></Order>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signUp',
        // element: <SignUp></SignUp>
        element:<SignUp1></SignUp1>
      }
    ]
  },
]);
