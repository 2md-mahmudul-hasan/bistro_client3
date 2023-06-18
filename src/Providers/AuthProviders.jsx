

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/Firebase';
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
export const authContext = createContext(null)

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  //createUser
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  //signinuser
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  //logout
  const logOut = () => {
    setLoading(true)
    return signOut(auth).then().catch(err => {
      console.log(err)
    })
  }
  //manage users
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        setLoading(false)
      }
    });
    return () => {
      unsubscribe()
    }
  })

  const auth = getAuth(app)
  const authInfo = {
    user,
    loading,
    getAuth,
    createUser,
    login,
    logOut
  }
  return (
    <authContext.Provider value={authInfo}>
      {children}
    </authContext.Provider >
  );
};

export default AuthProviders;