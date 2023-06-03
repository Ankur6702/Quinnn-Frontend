import React, { useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";

import BouncingDotsLoader from "@/src/common/components/skeletons/BouncingDotsLoader";
import BlogService from "../../services/BlogService";
import BlogItem from "./BlogItem";

const blogService = new BlogService();
const BlogList = () => {
  const [blogs, setBlogs] = useState();
  const [page, setPage] = useState(1);
  const [fetchedBlogs, setFetchedBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [blogsAreEmpty, setBlogsAreEmpty] = useState(false);

  const fetchBlogs = useCallback(async () => {
    blogService
      .fetchAllBlogs(3, page, "recent")
      .then((response) => {
        const newBlogs = response?.data?.data.filter((blog) => {
          return !blogs?.some((p) => p._id === blog._id);
        });
        setFetchedBlogs(response?.data?.data);
        setBlogs((prev) => (prev ? [...prev, ...newBlogs] : newBlogs));
        setLoading(false);
        setBlogsAreEmpty(response?.data?.data.length === 0); // Set postsAreEmpty based on whether the fetched data is empty
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [blogs, page]);

  useEffect(() => {
    setLoading(true);
    if (fetchedBlogs) {
      fetchBlogs();
    } else if (!fetchedBlogs) {
      fetchBlogs();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchBlogs, page]);

  const handelInfiniteScroll = useCallback(async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 100 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  }, [setPage]);

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, [handelInfiniteScroll]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      rowGap={{ xs: 3, md: 12 }}
      my={6}
      width={{ xs: "100%", md: "90%" }}
    >
      {blogs?.map((blog, index) => {
        return (
          <BlogItem
            key={index}
            userId={blog?.author}
            blogId={blog?._id}
            text={blog?.content}
            title={blog?.title}
            imageUrl={blog?.imageURL}
            time={blog?.creationDate}
            upvotes={blog?.upvotes}
            downvotes={blog?.downvotes}
            link={`${process.env.BASE_FRONTEND_URL}/blogs/${blog?._id}`}
          />
        );
      })}
      <Box my={2}>
        {loading && !blogsAreEmpty > 0 && <BouncingDotsLoader />}
      </Box>
    </Box>
  );
};

export default BlogList;
