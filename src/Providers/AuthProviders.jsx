

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/Firebase';
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
export const authContext = createContext(null)


const AuthProviders = ({ children }) => {
  const googProvider = new GoogleAuthProvider()
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
  }//updateProfile


  const profileUpdate = (name, imageUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: imageUrl
    })
  }


  const signInWithGoogle = () => {
    return signInWithPopup(auth, googProvider)
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
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)

      if (currentUser) {
        axios.post('http://localhost:5000/jwt', { email: currentUser.email })
          .then(data => {
            console.log(data.data.token)
            localStorage.setItem('access-token', data.data.token)
          })
      }
      else {
        localStorage.removeItem('access-token')
      }

      setLoading(false)
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
    logOut,
    profileUpdate,
    signInWithGoogle
  }
  return (
    <authContext.Provider value={authInfo}>
      {children}
    </authContext.Provider >
  );
};

export default AuthProviders;