/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";

import usePosts from "../../context/usePosts";
import PostsService from "../../service/PostsService";
import HomePostItem from "./HomePostItem";
import BouncingDotsLoader from "@/src/common/components/skeletons/BouncingDotsLoader";

const postsService = new PostsService();
const ShowPosts = ({ sort }) => {
  const { posts, setPosts, page, setPage, refresh } = usePosts();
  const [fetchedPosts, setFetchedPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [postsAreEmpty, setPostsAreEmpty] = useState(false);

  const fetchPosts = useCallback(async () => {
    postsService
      .getPosts(3, page, sort)
      .then((response) => {
        const newPosts = response?.data?.data.filter((post) => {
          return !posts?.some((p) => p._id === post._id);
        });
        setFetchedPosts(response?.data?.data);
        setPosts((prev) => (prev ? [...prev, ...newPosts] : newPosts));
        setLoading(false);
        setPostsAreEmpty(response?.data?.data.length === 0); // Set postsAreEmpty based on whether the fetched data is empty
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [page, setPosts, sort]);

  function updateLikes(id, isLiked, userId) {
    const objIndex = posts?.findIndex((obj) => obj._id === id);
    if (objIndex === -1) {
      console.log("Post not found");
      return;
    }
    const obj = posts?.[objIndex];

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

  useEffect(() => {
    setLoading(true);
    if (fetchedPosts) {
      fetchPosts();
    } else if (!fetchedPosts) {
      fetchPosts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchPosts, sort, page, refresh]);

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
    <Box display="flex" flexDirection="column" rowGap={4}>
      {posts?.map((post, index) => {
        return (
          <HomePostItem
            key={index}
            userId={post?.userID}
            postId={post?._id}
            boxprops={{ sx: { maxWidth: "auto" } }}
            text={post?.text}
            updateLikes={updateLikes}
            imageUrl={post?.imageURL}
            time={post?.creationDate}
            likes={post?.likes}
            comments={post?.comments}
            link={`${process.env.BASE_FRONTEND_URL}/post/${post?._id}`}
          />
        );
      })}
      <Box my={2}>
        {loading && !postsAreEmpty > 0 && <BouncingDotsLoader />}
      </Box>
    </Box>
  );
};

export default ShowPosts;
