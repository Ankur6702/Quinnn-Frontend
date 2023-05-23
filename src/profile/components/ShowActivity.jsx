import React from "react";

import ListPosts from "./ListPosts";
import ListEvents from "./ListEvents";
import ListBlogs from "./ListBlogs";

const ShowActivity = ({ tabIndex }) => {
  switch (tabIndex) {
    case 0:
      return <ListPosts />;
    case 1:
      return <ListEvents />;
    case 2:
      return <ListBlogs />;
    default:
      return <></>;
  }
};

export default ShowActivity;
