/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { useMediaQuery, useTheme } from "@mui/material";

import BlogService from "../../services/BlogService";
import useUserContext from "@/src/profile/context/useUserContext";
import { Blues, neutral } from "@/src/common/config/colors";

const blogService = new BlogService();
const BlogOptions = ({
  blogId,
  upvotes,
  downvotes,
  updateUpvotes,
  updateDownvotes,
  link,
}) => {
  const { user } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isDownvoted, SetIsDownvoted] = useState();
  const [isUpvoted, SetIsUpvoted] = useState();
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (upvotes.includes(user?._id)) {
      SetIsUpvoted(true);
    } else {
      SetIsUpvoted(false);
    }
    if (downvotes.includes(user?._id)) {
      SetIsDownvoted(true);
    } else {
      SetIsDownvoted(false);
    }
  }, [downvotes, upvotes, user?._id]);

  const handleUpvote = async () => {
    setIsLoading(true);
    if (isUpvoted) {
      SetIsUpvoted(!isUpvoted);
      blogService
        .upvoteBlog(blogId)
        .then((response) => {
          updateUpvotes(blogId, false, isDownvoted, user?._id);
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
      blogService
        .upvoteBlog(blogId)
        .then((response) => {
          SetIsUpvoted(!isUpvoted);
          updateUpvotes(blogId, true, isDownvoted, user?._id);
          if (isDownvoted) {
            SetIsDownvoted(false);
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
    setIsLoading(false);
  };
  const handleDownvote = async () => {
    setIsLoading(true);
    if (isDownvoted) {
      SetIsDownvoted(!isDownvoted);
      blogService
        .downvoteBlog(blogId)
        .then((response) => {
          updateDownvotes(blogId, false, isUpvoted, user?._id);
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
      blogService
        .downvoteBlog(blogId)
        .then((response) => {
          SetIsDownvoted(!isDownvoted);
          updateDownvotes(blogId, true, isUpvoted, user?._id);
          if (isUpvoted) {
            SetIsUpvoted(false);
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
    setIsLoading(false);
  };

  return (
    <Box display="flex" columnGap={4}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        rowGap={0.5}
      >
        <IconButton
          aria-label="Like"
          disabled={isLoading || isUpvoted}
          size="medium"
          sx={{ p: 0 }}
          onClick={handleUpvote}
        >
          <ThumbUpIcon
            sx={{
              color: isUpvoted ? Blues["A100"] : neutral["A200"],
              fontSize: 22,
            }}
          />
        </IconButton>
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: 12, lg: 14 },
            color: neutral["700"],
            fontWeight: 400,
            opacity: 0.8,
            display: "flex",
            alignItems: "center",
            columnGap: 1,
            pt: 0.25,
          }}
        >
          {upvotes.length}
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        rowGap={0.5}
      >
        <IconButton
          aria-label="Like"
          disabled={isLoading || isDownvoted}
          size="medium"
          sx={{ p: 0 }}
          onClick={handleDownvote}
        >
          <ThumbDownIcon
            sx={{
              color: isDownvoted ? Blues["A100"] : neutral["A200"],
              fontSize: 22,
            }}
          />
        </IconButton>
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: 12, lg: 14 },
            color: neutral["700"],
            fontWeight: 400,
            opacity: 0.8,
            display: "flex",
            alignItems: "center",
            columnGap: 1,
            pt: 0.25,
          }}
        >
          {downvotes.length}
        </Typography>
      </Box>
    </Box>
  );
};

export default BlogOptions;
