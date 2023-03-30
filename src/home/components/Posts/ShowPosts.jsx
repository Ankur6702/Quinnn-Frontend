import React, { useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";

import PostItem from "./PostItem";
import usePosts from "../../context/usePosts";
import PostsService from "../../service/PostsService";
import BouncingDotsLoader from "@/src/common/components/skeletons/BouncingDotsLoader";

const postsService = new PostsService();
const ShowPosts = () => {
  const { posts, setPosts } = usePosts();
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("recent");
  const [loading, setLoading] = useState(true);

  const fetchPosts = useCallback(async () => {
    postsService
      .getPosts(2, page, sort)
      .then((response) => {
        console.log("new posts fetched");
        console.log(response);
        setPosts((prev) =>
          prev ? [...prev, ...response?.data?.data] : response?.data?.data
        );
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [page, setPosts, sort]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts, page]);

  console.log(posts);

  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <Box display="flex" flexDirection="column" rowGap={4}>
      {posts?.map((post, index) => {
        return (
          <PostItem
            key={index}
            userId={post?.user?.userID}
            username={post?.user?.username}
            postId={post?._id}
            boxprops={{ sx: { maxWidth: "auto" } }}
            text={post?.text}
            updateLikes={() => {}}
            imageUrl={post?.imageURL}
            time={post?.creationDate}
            name={post?.user?.name}
            avatar={null}
            gender={post?.user?.gender}
            likes={post?.likes}
            comments={post?.comments}
            link={`${process.env.BASE_FRONTEND_URL}/post/${post?._id}`}
          />
        );
      })}
      <Box my={2}>{loading && <BouncingDotsLoader />}</Box>
    </Box>
  );
};

export default ShowPosts;
