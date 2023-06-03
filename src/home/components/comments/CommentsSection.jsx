import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import GenericResponseHandler from "@/src/common/components/skeletons/GenericResponseHandler";
import CircularLoaderSkeleton from "@/src/common/components/skeletons/CircularLoaderSkeleton";
import useAsync from "@/src/common/components/custom-hooks/useAsync";
import PostsService from "../../service/PostsService";
import ShowComments from "./ShowComments";
import CreateComment from "./CreateComment";
import { neutral } from "@/src/common/config/colors";

const postsService = new PostsService();
const CommentsSection = ({ postId, updateComments }) => {
  const { data: comments, run, status, error, setData } = useAsync();

  useEffect(() => {
    const fetchComments = async () => {
      run(postsService.fetchcommments(postId)).catch((error) =>
        console.error(error)
      );
    };
    fetchComments();
  }, [postId, run]);

  const handleCreateComment = (newComment) => {
    setData((prev) => {
      return { comments: [newComment, ...prev?.comments] };
    });
  };

  const handleRemoveComment = (id) => {
    const indexToRemove = comments?.comments.findIndex((comment) => {
      return comment?._id === id;
    });
    const temp = comments;
    temp?.comments.splice(indexToRemove, 1);
    setData(temp);
  };

  return (
    <Box>
      <GenericResponseHandler
        status={status}
        error={error}
        skeleton={<CircularLoaderSkeleton sx={{ height: 100 }} />}
      >
        <CreateComment
          handleCreateComment={handleCreateComment}
          postId={postId}
          updateComments={updateComments}
        />

        <Box my={4} display="flex" flexDirection="column" rowGap={1.5}>
          {comments?.comments?.length != 0 ? (
            comments?.comments?.map((comment, index) => (
              <ShowComments
                comment={comment}
                key={index}
                handleRemoveComment={handleRemoveComment}
              />
            ))
          ) : (
            <Box display="flex" justifyContent="center" my={3}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: 12, lg: 14 },
                  color: neutral["A200"],
                  fontWeight: 500,
                  opacity: 0.8,
                }}
              >
                No commments yet
              </Typography>
            </Box>
          )}
        </Box>
      </GenericResponseHandler>
    </Box>
  );
};

export default CommentsSection;
