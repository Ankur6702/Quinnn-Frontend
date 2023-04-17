import React from "react";

import ListPosts from "./ListPosts";
import ListEvents from "./ListEvents";

const ShowActivity = ({ tabIndex }) => {
  switch (tabIndex) {
    case 0:
      return <ListPosts />;
    case 1:
      return <ListEvents />;
    default:
      return <></>;
  }
};

export default ShowActivity;
