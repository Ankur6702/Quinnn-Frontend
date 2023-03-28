import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import authService from "../service/config/AuthService";
import { isTokenExpired } from "../utils/utils";

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    if (authService.isAuthenticated && authService.getToken) {
      if (isTokenExpired(authService.getToken)) {
        setIsAuthenticated(false);
        authService.removeToken();
      } else {
        setIsAuthenticated(authService.isAuthenticated);
      }
    } else {
      setIsAuthenticated(authService.isAuthenticated);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
