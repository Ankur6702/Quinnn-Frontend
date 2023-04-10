import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";
import useAuth from "@/src/common/context/useAuth";
import authService from "@/src/common/service/config/AuthService";

const UserProvider = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [user, setUser] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      const fetchUser = async () => {
        if (isAuthenticated === true) {
          authService
            .user()
            .then((response) => {
              setUser(!!response.data.data ? response.data.data : null);
              setIsLoaded(true);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      };
      fetchUser();
    }
  }, [isAuthenticated, isLoaded]);

  return (
    <UserContext.Provider value={{ user, setUser, isLoaded, setIsLoaded }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
