import React, { useEffect } from "react";
import Box from "@mui/material/Box";

import GenericResponseHandler from "@/src/common/components/skeletons/GenericResponseHandler";
import useAsync from "@/src/common/components/custom-hooks/useAsync";
import BlogService from "../../services/BlogService";
import BlogsItemsSkeleton from "@/src/common/components/skeletons/BlogsItemsSkeleton";
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
      skeleton={
        <BlogsItemsSkeleton
          items={2}
          gridProps={{ sx: { my: 6, rowGap: { xs: 8, md: 12 } } }}
          gridItemProps={{
            sx: {
              borderRadius: 2,
            },
          }}
        />
      }
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
