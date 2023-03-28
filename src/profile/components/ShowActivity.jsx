import React, { useEffect } from "react";
import Box from "@mui/material/Box";

import GenericResponseHandler from "@/src/common/components/skeletons/GenericResponseHandler";
import CircularLoaderSkeleton from "@/src/common/components/skeletons/CircularLoaderSkeleton";
import useAsync from "@/src/common/components/custom-hooks/useAsync";
import PostItem from "@/src/home/components/Posts/PostItem";
import ProfileService from "../service/ProfileService";

const profileService = new ProfileService();
const ShowActivity = () => {
  const { data: posts, run, status, error, setData } = useAsync();

  useEffect(() => {
    const fetchPosts = async () => {
      run(profileService.fetchUserPosts())
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.error(error));
    };
    fetchPosts();
  }, [run]);

  return (
    <Box display="flex" flexDirection="column" rowGap={4} my={4}>
      <PostItem
        boxprops={{ sx: { maxWidth: "auto" } }}
        text="<p>Hi what is</p>\\n<p>going on</p>\\n<p>here</p>"
      />
    </Box>
  );
};

export default ShowActivity;
