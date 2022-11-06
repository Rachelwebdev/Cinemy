import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  setLoggedIn: () => {},
});

export default AuthContext;
