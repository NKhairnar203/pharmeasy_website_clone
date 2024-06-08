import React, { createContext,useState } from "react";

import AlertBox from "../components/Alert";

export const AuthContext = createContext(null);
const AuthContextProvider = ({ children }) => {

  const [auth, setAuth] = useState({
    isLoggedIn:false,
    token:null,
  })


  const logIn = (token) => {
      setAuth({
        isLoggedIn:true,
        token:token,
      })
  }
   const logOut = () => {
     setAuth({
       isLoggedIn: false,
       token: false,
     });
    
   };

  return <AuthContext.Provider value={{logIn ,auth ,logOut}}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
