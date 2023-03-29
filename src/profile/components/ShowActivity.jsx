import React, { useEffect } from "react";
import Box from "@mui/material/Box";

import GenericResponseHandler from "@/src/common/components/skeletons/GenericResponseHandler";
import useAsync from "@/src/common/components/custom-hooks/useAsync";
import useUserContext from "../context/useUserContext";
import PostItem from "@/src/home/components/Posts/PostItem";
import ProfileService from "../service/ProfileService";
import GenericListSkeleton from "@/src/common/components/skeletons/GenericListSkeleton";

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

  const updatePosts = (id) => {
    const indexToRemove = posts?.data.findIndex((post) => {
      return post?._id === id;
    });
    console.log(indexToRemove);
    const temp = posts;
    temp?.data.splice(indexToRemove, 1);
    setData(temp);
  };

  return (
    <GenericResponseHandler
      status={status}
      error={error}
      skeleton={
        <GenericListSkeleton
          items={3}
          gridProps={{ sx: { my: 4 } }}
          gridItemProps={{
            rowGap: 1,
            sx: {
              borderRadius: 2,
            },
          }}
          boxProps={{
            height: 100,

            sx: {
              "& .MuiSkeleton-root": {
                borderRadius: 1.5,
              },
            },
          }}
        />
      }
    >
      <Box display="flex" flexDirection="column" rowGap={4} my={4}>
        {posts?.data.map((post, index) => {
          return (
            <PostItem
              key={index}
              userId={user?._id}
              postId={post?._id}
              boxprops={{ sx: { maxWidth: "auto" } }}
              text={post?.text}
              updatePosts={updatePosts}
              imageUrl={post?.imageURL}
              time={post?.creationDate}
              name={user?.name}
              avatar={user?.profileImageURL}
              gender={user?.gender}
              likes={post?.numberOfLikes}
              comments={post?.comments.length}
              link={`${process.env.BASE_FRONTEND_URL}/post/${post?.postID}`}
            />
          );
        })}
      </Box>
    </GenericResponseHandler>
  );
};

export default ShowActivity;
