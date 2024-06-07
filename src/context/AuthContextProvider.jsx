import React, { createContext,useState } from "react";



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

  return <AuthContext.Provider value={{logIn ,auth}}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
