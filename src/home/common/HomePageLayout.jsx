import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";

import usePosts from "../context/usePosts";
import useAsync from "@/src/common/components/custom-hooks/useAsync";
import GenericResponseHandler from "@/src/common/components/skeletons/GenericResponseHandler";

const HomePageLayout = ({ children }) => {
  const { data: posts, run, status, error } = useAsync();
  const { postDetail, setPostDetail } = usePosts();

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const postService = new (
  //       await import("../service/PostsService")
  //     ).default();
  //     run(postService.getPosts())
  //       .then((response) => {
  //         console.log(response);
  //         setPostDetail(response?.data?.products);
  //         console.log(postDetail);
  //       })
  //       .catch((error) => console.error(error));
  //   };
  //   fetchPosts();
  // }, [postDetail, run, setPostDetail]);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      columnGap={12}
      sx={{ maxWidth: 1024, width: "100%", position: "relative" }}
    >
      {children}
    </Box>
  );
};

export default HomePageLayout;
