import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Avatar from "@mui/material/Avatar";

import GenericResponseHandler from "@/src/common/components/skeletons/GenericResponseHandler";
import useAsync from "@/src/common/components/custom-hooks/useAsync";
import BlogService from "../../services/BlogService";
import CircularLoaderSkeleton from "@/src/common/components/skeletons/CircularLoaderSkeleton";
import BlogItem from "./BlogItem";

const blogService = new BlogService();
const BlogList = () => {
  const { data: blogs, run, status, error, setData } = useAsync();

  useEffect(() => {
    const fetchPosts = async () => {
      run(blogService.fetchBlogs()).catch((error) => console.error(error));
    };
    fetchPosts();
  }, [run]);
  console.log(blogs);
  const removePost = (id) => {
    const indexToRemove = blogs?.blogs.findIndex((blog) => {
      return blog?._id === id;
    });
    const temp = blogs;
    temp?.data.splice(indexToRemove, 1);
    setData(temp);
  };

  return (
    <GenericResponseHandler
      status={status}
      error={error}
      skeleton={<CircularLoaderSkeleton />}
    >
      <Box
        display="flex"
        flexDirection="column"
        rowGap={{ xs: 3, md: 12 }}
        my={6}
      >
        {blogs?.blogs.map((blog, index) => {
          return (
            <BlogItem
              key={index}
              userId={blog?.author}
              blogId={blog?._id}
              text={blog?.content}
              title={blog?.title}
              removePost={removePost}
              imageUrl={blog?.imageURL}
              time={blog?.creationDate}
              upvotes={blog?.upvotes}
              downvotes={blog?.downvotes}
              link={`${process.env.BASE_FRONTEND_URL}/blogs/${blog?._id}`}
            />
          );
        })}
      </Box>
    </GenericResponseHandler>
  );
};

export default BlogList;
