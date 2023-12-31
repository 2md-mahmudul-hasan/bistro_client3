import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp1 from "../pages/SignUp/SignUp1";
import PrivateRout from "./PrivateRout";
import SecretRout from "../pages/SecretRout/SecretRout";
import DashBoard from "../layout/DashBoard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import Allusers from "../pages/Dashboard/MyCart/AllUsers/Allusers";

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
        element: <SignUp1></SignUp1>
      },
      {
        path: 'secret',
        element: <PrivateRout><SecretRout></SecretRout></PrivateRout>
      }
    ],
  },
  {
    path: 'dashboard',
    element: <PrivateRout><DashBoard></DashBoard></PrivateRout>,
    children: [
      {
        path: 'myCart',
        element: <MyCart></MyCart>
      },
      {
        path: 'allUsers',
        element: <Allusers></Allusers>
      }
    ]
  }
]);
