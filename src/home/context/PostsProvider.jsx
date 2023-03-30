import React, { useState } from "react";
import PostsContext from "./PostsContext";

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState(null);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
