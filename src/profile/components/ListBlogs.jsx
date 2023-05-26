import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { useMediaQuery, useTheme } from "@mui/material";

import GenericResponseHandler from "@/src/common/components/skeletons/GenericResponseHandler";
import useAsync from "@/src/common/components/custom-hooks/useAsync";
import BlogService from "@/src/blogs/services/BlogService";
import EventCard from "@/src/events/common/EventCard";
import EventCardSmall from "@/src/events/common/EventCardSmall";
import BlogsItemsSkeleton from "@/src/common/components/skeletons/BlogsItemsSkeleton";
import BlogItem from "@/src/blogs/components/list/BlogItem";

const blogService = new BlogService();
const ListBlogs = () => {
  const { data: myBlogs, run, status, error, setData } = useAsync();
  const theme = useTheme();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const fetchEvents = async () => {
      run(blogService.fetchUsersBlogs()).catch((error) => console.error(error));
    };
    fetchEvents();
  }, [run]);

  const removeBlog = (id) => {
    const indexToRemove = myBlogs?.blogs.findIndex((blog) => {
      return blog?._id === id;
    });
    const temp = myBlogs;
    temp?.blogs.splice(indexToRemove, 1);
    setData({ blogs: myBlogs.blogs });
  };

  return (
    <GenericResponseHandler
      status={status}
      error={error}
      skeleton={
        <BlogsItemsSkeleton
          items={1}
          gridProps={{ sx: { my: 6, rowGap: 4 } }}
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
        rowGap={4}
        my={4}
        alignItems={{ xs: "center", md: "flex-start" }}
      >
        {myBlogs?.blogs.map((blog, index) => (
          <BlogItem
            key={index}
            userId={blog?.author}
            blogId={blog?._id}
            text={blog?.content}
            title={blog?.title}
            removeBlog={removeBlog}
            imageUrl={blog?.imageURL}
            time={blog?.creationDate}
            upvotes={blog?.upvotes}
            downvotes={blog?.downvotes}
            link={`${process.env.BASE_FRONTEND_URL}/blogs/${blog?._id}`}
            boxProps={{ sx: { width: "100%" } }}
          />
        ))}
      </Box>
    </GenericResponseHandler>
  );
};

export default ListBlogs;
