import React, { useEffect } from "react";
import Box from "@mui/material/Box";

import GenericResponseHandler from "@/src/common/components/skeletons/GenericResponseHandler";
import CircularLoaderSkeleton from "@/src/common/components/skeletons/CircularLoaderSkeleton";
import useAsync from "@/src/common/components/custom-hooks/useAsync";
import useUserContext from "../context/useUserContext";
import PostItem from "@/src/home/components/Posts/PostItem";
import ProfileService from "../service/ProfileService";

const profileService = new ProfileService();
const ShowActivity = () => {
  const { data: posts, run, status, error, setData } = useAsync();
  const { user } = useUserContext();

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
      {posts?.data.map((post, index) => (
        <PostItem
          key={index}
          boxprops={{ sx: { maxWidth: "auto" } }}
          text={post?.text}
          imageUrl={post?.imageURL}
          time={post?.creationDate}
          name={user?.name}
          avatar={user?.profileImageURL}
          gender={user?.gender}
          likes={post?.likes.length}
          comments={post?.comments.length}
          link={`${process.env.BASE_FRONTEND_URL}${post?._id}`}
        />
      ))}
    </Box>
  );
};

export default ShowActivity;
