import React, { useMemo, useState } from "react";
import Box from "@mui/material/Box";

import Navbar from "../Navbar";
import useUserContext from "../../context/useUserContext";
import PostItem from "@/src/home/components/Posts/PostItem";

const PublicProfileActivity = ({ profile, isFollowing }) => {
  const [tabIndex, setTabIndex] = useState(0);

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
  console.log(profile?.posts);

  function updateLikes(id, isLiked, userId) {
    const objIndex = profile?.posts.findIndex((obj) => obj.postID === id);
    if (objIndex === -1) {
      console.log("Post not found");
      return;
    }
    const obj = profile?.posts[objIndex];

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
    console.log(newObjects);
    // setData(newObjects); // update the state variable with the new array
  }

  return (
    <Box width="100%" boxSizing="border-box">
      <Navbar tabs={tabs} tabIndex={tabIndex} />
      <Box display="flex" flexDirection="column" rowGap={4} my={4}>
        {profile?.posts?.map((post, index) => {
          console.log(post);
          return (
            <PostItem
              key={index}
              userId={profile?._id}
              postId={post?.postID}
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
              link={`${process.env.BASE_FRONTEND_URL}/${post?.postID}`}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default PublicProfileActivity;
