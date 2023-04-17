import React, { useEffect } from "react";
import Box from "@mui/material/Box";

import GenericResponseHandler from "@/src/common/components/skeletons/GenericResponseHandler";
import useAsync from "@/src/common/components/custom-hooks/useAsync";
import useUserContext from "../context/useUserContext";
import PostItem from "@/src/home/components/Posts/PostItem";
import ProfileService from "../service/ProfileService";
import PostSkeleton from "@/src/common/components/skeletons/PostSkeleton";

const profileService = new ProfileService();
const ListPosts = () => {
  const { data: posts, run, status, error, setData } = useAsync();
  const { user } = useUserContext();

  useEffect(() => {
    const fetchPosts = async () => {
      run(profileService.fetchUserPosts())
        .then((response) => {})
        .catch((error) => console.error(error));
    };
    fetchPosts();
  }, [run]);

  const removePost = (id) => {
    const indexToRemove = posts?.data.findIndex((post) => {
      return post?._id === id;
    });
    const temp = posts;
    temp?.data.splice(indexToRemove, 1);
    setData(temp);
  };

  function updateLikes(id, isLiked, userId) {
    const objIndex = posts?.data.findIndex((obj) => obj._id === id);
    if (objIndex === -1) {
      console.log("Post not found");
      return;
    }
    const obj = posts?.data[objIndex];

    if (isLiked) {
      obj.likes.push(userId);
    } else {
      const likeIndex = obj?.likes.findIndex((like) => like === userId);
      if (likeIndex === -1) {
        console.log("user not found");
        return;
      }
      obj.likes.splice(likeIndex, 1);
    }
    // remove the like from the array
    const newObjects = [...posts?.data];
    newObjects[objIndex] = obj; // replace the modified object in the copy
    setData(() => ({
      data: newObjects,
    }));
  }

  return (
    <GenericResponseHandler
      status={status}
      error={error}
      skeleton={
        <PostSkeleton
          items={2}
          gridProps={{ sx: { my: 4, rowGap: 4 } }}
          gridItemProps={{
            sx: {
              borderRadius: 2,
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
              removePost={removePost}
              updateLikes={updateLikes}
              imageUrl={post?.imageURL}
              time={post?.creationDate}
              name={user?.name}
              avatar={user?.profileImageURL}
              gender={user?.gender}
              likes={post?.likes}
              comments={post?.comments}
              username={user?.username}
              link={`${process.env.BASE_FRONTEND_URL}/post/${post?._id}`}
            />
          );
        })}
      </Box>
    </GenericResponseHandler>
  );
};

export default ListPosts;
