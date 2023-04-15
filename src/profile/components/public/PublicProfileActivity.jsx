import React, { useEffect, useMemo, useState } from "react";
import Box from "@mui/material/Box";

import GenericResponseHandler from "@/src/common/components/skeletons/GenericResponseHandler";
import useAsync from "@/src/common/components/custom-hooks/useAsync";
import useUserContext from "../../context/useUserContext";
import PostItem from "@/src/home/components/Posts/PostItem";
import PostsService from "@/src/home/service/PostsService";
import PostSkeleton from "@/src/common/components/skeletons/PostSkeleton";
import Navbar from "../Navbar";

const postsService = new PostsService();
const PublicProfileActivity = ({ profile }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const { data: posts, run, status, error, setData } = useAsync();
  const { user } = useUserContext();

  useEffect(() => {
    const fetchPosts = async () => {
      run(postsService.getUserPosts(profile?._id))
        .then((response) => {})
        .catch((error) => console.error(error));
    };
    fetchPosts();
  }, [profile?._id, run]);

  const tabs = useMemo(() => {
    const tabsList = [
      {
        route: `/profile`,
        label: "Posts",
        onClick: () => setTabIndex(0),
      },
      // {
      //   route: `/profile`,
      //   label: "Blogs",
      //   onClick: () => setTabIndex(1),
      // },
    ];
    return tabsList;
  }, []);

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
  }

  return (
    <Box width="100%" boxSizing="border-box">
      <Navbar tabs={tabs} tabIndex={tabIndex} />
      <Box display="flex" flexDirection="column" rowGap={4} my={4}>
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
          {posts?.data.map((post, index) => {
            return (
              <PostItem
                key={index}
                userId={post?.userID}
                postId={post?._id}
                boxprops={{ sx: { maxWidth: "auto" } }}
                updateLikes={updateLikes}
                text={post?.text}
                imageUrl={post?.imageURL}
                time={post?.creationDate}
                name={profile?.name}
                avatar={profile?.profileImageURL}
                gender={profile?.gender}
                likes={post?.likes}
                comments={post?.comments}
                username={profile?.username}
                link={`${process.env.BASE_FRONTEND_URL}/${post?._id}`}
              />
            );
          })}
        </GenericResponseHandler>
      </Box>
    </Box>
  );
};

export default PublicProfileActivity;
