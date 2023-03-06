import React from "react";

import HomePageLayout from "./common/HomePageLayout";
import PostsProvider from "./context/PostsProvider";

const HomePage = ({ children }) => {
  return (
    <PostsProvider>
      <HomePageLayout>{children}</HomePageLayout>
    </PostsProvider>
  );
};

export default HomePage;
