import React from "react";
import { createContext } from "react";
import { auth } from "../auth/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const createUser = async () => {
    try{

   
    let userCredential = createUserWithEmailAndPassword(auth, email, password); }catch(error){
      console.log(error);
    } ;
  
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
