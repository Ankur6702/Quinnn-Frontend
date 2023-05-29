import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { useMediaQuery, useTheme } from "@mui/material";

import PostsService from "../../service/PostsService";
import useUserContext from "@/src/profile/context/useUserContext";
import { Blues, neutral } from "@/src/common/config/colors";

const postsService = new PostsService();
const CommentActions = ({
  commentID,
  likes,
  dislikes,
  updateLikes,
  updateDislikes,
  link,
}) => {
  const { user } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isLiked, setIsLiked] = useState();
  const [isDisliked, setIsDisliked] = useState();
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (likes.includes(user?._id)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
    if (dislikes.includes(user?._id)) {
      setIsDisliked(true);
    } else {
      setIsDisliked(false);
    }
  }, [dislikes, likes, user?._id]);

  const handleLike = async () => {
    setIsLoading(true);
    if (isLiked) {
      postsService
        .unlikeComment(commentID)
        .then((response) => {
          updateLikes(commentID, false, isDisliked, user?._id);
          setIsLiked(false); // Update isLiked state to false
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          console.log(error);
          enqueueSnackbar("Something went wrong,Please try again", {
            variant: "error",
            autoHideDuration: 2000,
            anchorOrigin: { horizontal: "right", vertical: "top" },
          });
        });
    } else {
      postsService
        .likeComment(commentID)
        .then((response) => {
          updateLikes(commentID, true, isDisliked, user?._id);
          setIsLiked(true); // Update isLiked state to true
          if (isDisliked) {
            setIsDisliked(false);
            postsService.undislikeComment(commentID).catch((error) => {
              setIsLoading(false);
              console.log(error);
              enqueueSnackbar("Something went wrong,Please try again", {
                variant: "error",
                autoHideDuration: 2000,
                anchorOrigin: { horizontal: "right", vertical: "top" },
              });
            });
          }
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          console.log(error);
          enqueueSnackbar("Something went wrong,Please try again", {
            variant: "error",
            autoHideDuration: 2000,
            anchorOrigin: { horizontal: "right", vertical: "top" },
          });
        });
    }
  };

  const handleDislike = async () => {
    setIsLoading(true);
    if (isDisliked) {
      postsService
        .undislikeComment(commentID)
        .then((response) => {
          updateDislikes(commentID, isLiked, false, user?._id);
          setIsDisliked(false); // Update isDisliked state to false
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          console.log(error);
          enqueueSnackbar("Something went wrong,Please try again", {
            variant: "error",
            autoHideDuration: 2000,
            anchorOrigin: { horizontal: "right", vertical: "top" },
          });
        });
    } else {
      postsService
        .dislikeComment(commentID)
        .then((response) => {
          updateDislikes(commentID, isLiked, true, user?._id);
          setIsDisliked(true); // Update isDisliked state to true
          if (isLiked) {
            setIsLiked(false);
          }
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          console.log(error);
          enqueueSnackbar("Something went wrong,Please try again", {
            variant: "error",
            autoHideDuration: 2000,
            anchorOrigin: { horizontal: "right", vertical: "top" },
          });
        });
    }
  };

  return (
    <Box display="flex" columnGap={4}>
      <Box display="flex" alignItems="center" columnGap={1}>
        <IconButton
          aria-label="Like"
          disabled={isLoading}
          size="medium"
          sx={{ p: 0 }}
          onClick={handleLike}
        >
          <ThumbUpIcon
            sx={{
              color: isLiked ? Blues["A100"] : neutral["A200"],
              fontSize: 16,
            }}
          />
        </IconButton>
        <Typography
          variant="h6"
          sx={{
            fontSize: 12,
            color: neutral["700"],
            fontWeight: 400,
            opacity: 0.8,
          }}
        >
          {likes.length}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" columnGap={1}>
        <IconButton
          aria-label="Like"
          disabled={isLoading}
          size="medium"
          sx={{ p: 0 }}
          onClick={handleDislike}
        >
          <ThumbDownIcon
            sx={{
              color: isDisliked ? Blues["A100"] : neutral["A200"],
              fontSize: 16,
            }}
          />
        </IconButton>
        <Typography
          variant="h6"
          sx={{
            fontSize: 12,
            color: neutral["700"],
            fontWeight: 400,
            opacity: 0.8,
          }}
        >
          {dislikes.length}
        </Typography>
      </Box>
    </Box>
  );
};

export default CommentActions;
