import { useContext } from "react";
import AuthContext from "./AuthContext";

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("error in using context");
  }
  return context;
};

export default useAuth;
