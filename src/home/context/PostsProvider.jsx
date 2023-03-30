import React, { useState } from "react";
import PostsContext from "./PostsContext";

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState(null);
  const [page, setPage] = useState(1);
  const [refresh, setRefresh] = useState(false);

  return (
    <PostsContext.Provider
      value={{ posts, setPosts, setPage, page, refresh, setRefresh }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
