import React, { useState } from "react";
import Box from "@mui/material/Box";

import PostItem from "./PostItem";

const ShowPosts = () => {
  const postText =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae et possimus cumque ipsum quas! Suscipit incidunt quo porro nesciunt autem doloribus aspernatur in error possimus qui placeat, beatae sint voluptas ad saepe reprehenderit illum quas, reiciendis odio eveniet quos voluptatem explicabo ab neque? Neque eum enim, ipsam qui ratione tempora, magnam rerum totam corporis deleniti autem nostrum incidunt deserunt praesentium.";
  return (
    <Box display="flex" flexDirection="column" rowGap={4}>
      <PostItem />
      <PostItem />
    </Box>
  );
};

export default ShowPosts;
