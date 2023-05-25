import React, { useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";

import GenericResponseHandler from "@/src/common/components/skeletons/GenericResponseHandler";
import BlogsItemsSkeleton from "@/src/common/components/skeletons/BlogsItemsSkeleton";
import BouncingDotsLoader from "@/src/common/components/skeletons/BouncingDotsLoader";
import useAsync from "@/src/common/components/custom-hooks/useAsync";
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
      .fetchAllBlogs(3, page, "popular")
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

  // function updateLikes(id, isLiked, userId) {
  //   const objIndex = posts?.findIndex((obj) => obj._id === id);
  //   if (objIndex === -1) {
  //     console.log("Post not found");
  //     return;
  //   }
  //   const obj = posts?.[objIndex];

  //   if (isLiked) {
  //     obj.likes.push(userId);
  //   } else {
  //     const likeIndex = obj?.likes.findIndex((like) => like === userId);
  //     if (likeIndex === -1) {
  //       console.log("user not found");
  //       return;
  //     }
  //     obj.likes.splice(likeIndex, 1);
  //   }
  // }

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
