import React from "react";
import Box from "@mui/material/Box";

import ProfileService from "@/src/profile/service/ProfileService";
import HomePostItem from "../HomePostItem";

const PostDetails = ({ postData, setData }) => {
  function updateLikes(id, isLiked, userId) {
    const obj = postData;
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
    <Box sx={{ maxWidth: 820, width: "100%" }}>
      <HomePostItem
        userId={postData?.userID}
        showmore={true}
        postId={postData?._id}
        boxprops={{ sx: { maxWidth: "auto" } }}
        text={postData?.text}
        updateLikes={updateLikes}
        imageUrl={postData?.imageURL}
        time={postData?.creationDate}
        likes={postData?.likes}
        comments={postData?.comments}
        link={`${process.env.BASE_FRONTEND_URL}/post/${postData?._id}`}
      />
    </Box>
  );
};

export default PostDetails;
