import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const defaultContext = {
  user: {},
  createUserHandler() {},
  updateUserHandler() {},
  signInUserHandler() {},
  passwordResetHandler() {},
  signOutHandler() {},
};
export const AuthContext = createContext(defaultContext);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const createUserHandler = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserHandler = (displayName) => {
    setIsLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: displayName,
    });
  };

  const passwordResetHandler = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const signInUserHandler = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutHandler = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
      setIsLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    isLoading,
    createUserHandler,
    updateUserHandler,
    signInUserHandler,
    passwordResetHandler,
    signOutHandler,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
