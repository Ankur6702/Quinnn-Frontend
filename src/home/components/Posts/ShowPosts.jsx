import React, { useState } from "react";
import Box from "@mui/material/Box";

import PostItem from "./PostItem";

const ShowPosts = () => {
  return (
    <Box display="flex" flexDirection="column" rowGap={4}>
      <PostItem />
      <PostItem />
    </Box>
  );
};

export default ShowPosts;
