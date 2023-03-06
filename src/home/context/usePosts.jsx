import { useContext } from "react";
import PostsContext from "./PostsContext";

const usePosts = () => {
  const context = useContext(PostsContext);
  if (context === undefined) {
    throw new Error("error in using context");
  }
  return context;
};

export default usePosts;
