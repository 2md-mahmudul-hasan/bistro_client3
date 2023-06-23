import { useContext } from "react";
import { authContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRout = ({ children }) => {
  const location = useLocation()
  console.log(location)
  const { user } = useContext(authContext)
  if (user) {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRout;