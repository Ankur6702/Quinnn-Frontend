import { useContext } from "react";
import UserContext from "./UserContext";

const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("error in using context");
  }
  return context;
};

export default useUserContext;
