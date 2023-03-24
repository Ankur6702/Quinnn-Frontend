import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import authService from "../service/config/AuthService";

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState({});

  useEffect(() => {
    setIsAuthenticated(authService.isAuthenticated);
  }, []);
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
