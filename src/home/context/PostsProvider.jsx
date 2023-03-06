import React, { useState } from "react";
import PostsContext from "./PostsContext";

const PostsProvider = ({ children }) => {
  const [postDetail, setPostDetail] = useState(null);

  return (
    <PostsContext.Provider value={{ postDetail, setPostDetail }}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
