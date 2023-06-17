import React, { createContext, useState } from 'react';

import { getAuth } from "firebase/auth";
import app from '../firebase/Firebase';
export const authContext = createContext(null)

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const auth = getAuth(app)
  const authInfo = {
    user,
    loading,
    getAuth
  }
  return (
    <authContext.Provider value={authInfo}>
      {children}
    </authContext.Provider >
  );
};

export default AuthProviders;