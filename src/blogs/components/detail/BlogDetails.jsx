import React from "react";
import Box from "@mui/material/Box";

import BlogDetailsItem from "./BlogDetailsItem";

const BlogDetails = ({ blogData }) => {
  const updateUpvotes = (id, isUpvoted, isDownvoted, userId) => {
    const obj = blogData;
    if (isUpvoted) {
      if (isDownvoted) {
        const downvotedIndex = obj?.downvotes.findIndex(
          (downvote) => downvote === userId
        );
        if (downvotedIndex === -1) {
          console.log("user not found");
          return;
        }
        obj.downvotes.splice(downvotedIndex, 1);
      }
      obj.upvotes.push(userId);
    } else {
      const upvotedIndex = obj?.upvotes.findIndex(
        (upvote) => upvote === userId
      );
      if (upvotedIndex === -1) {
        console.log("user not found");
        return;
      }
      obj.upvotes.splice(upvotedIndex, 1);
    }
  };
  const updateDownvotes = (id, isUpvoted, isDownvoted, userId) => {
    const obj = blogData;
    if (isDownvoted) {
      if (isUpvoted) {
        const upvotedIndex = obj?.upvotes.findIndex(
          (upvote) => upvote === userId
        );
        if (upvotedIndex === -1) {
          console.log("user not found");
          return;
        }
        obj.upvotes.splice(upvotedIndex, 1);
      }
      obj.downvotes.push(userId);
    } else {
      const downvotedIndex = obj?.downvotes.findIndex(
        (downvote) => downvote === userId
      );
      if (downvotedIndex === -1) {
        console.log("user not found");
        return;
      }
      obj.downvotes.splice(downvotedIndex, 1);
    }
  };

  return (
    <Box width="100%">
      <BlogDetailsItem
        userId={blogData?.author}
        blogId={blogData?._id}
        title={blogData?.title}
        text={blogData?.content}
        updateUpvotes={updateUpvotes}
        updateDownvotes={updateDownvotes}
        imageUrl={blogData?.imageURL}
        time={blogData?.creationDate}
        upvotes={blogData?.upvotes}
        downvotes={blogData?.downvotes}
        link={`${process.env.BASE_FRONTEND_URL}/blog/${blogData?._id}`}
      />
    </Box>
  );
};

export default BlogDetails;
