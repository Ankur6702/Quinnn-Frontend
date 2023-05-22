import React from "react";
import Box from "@mui/material/Box";

import BlogDetailsItem from "./BlogDetailsItem";

const BlogDetails = ({ blogData }) => {
  console.log(blogData);
  return (
    <Box>
      <BlogDetailsItem
        userId={blogData?.author}
        blogId={blogData?._id}
        title={blogData?.title}
        text={blogData?.content}
        // updateLikes={updateLikes}
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
