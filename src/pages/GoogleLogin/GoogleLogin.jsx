import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { authContext } from '../../Providers/AuthProviders';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"
  const { signInWithGoogle } = useContext(authContext)
  const handleGooglesignIn = () => {
    signInWithGoogle()
      .then(result => {
        const loggedInUser = result.user;


        const savedUser = { name: loggedInUser.displayName, email: loggedInUser.email }

        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(savedUser)
        }
        )
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
              navigate(from, { replace: true })
            }

          })








      })
  }
  return (
    <div className="flex flex-col w-full">

      <div className="divider"></div>
      <div onClick={handleGooglesignIn} className="grid h-10 card  rounded-box place-items-center"><FaGoogle style={{ 'fontSize': '30px' }}></FaGoogle></div>
      <div className="divider"></div>
    </div>
  );
};

export default GoogleLogin;