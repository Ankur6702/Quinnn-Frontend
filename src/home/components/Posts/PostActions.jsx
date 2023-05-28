/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import { useMediaQuery, useTheme } from "@mui/material";

import CommentsSection from "../comments/CommentsSection";
import ShareModal from "@/src/common/components/share/ShareModal";
import useUserContext from "@/src/profile/context/useUserContext";
import PostsService from "../../service/PostsService";
import { Blues, neutral } from "@/src/common/config/colors";
import { useEffect } from "react";

const postsService = new PostsService();
const PostActions = ({ postId, updateLikes, comments, likes, link }) => {
  const router = useRouter();
  const [share, setShare] = useState(false);
  const [commentSize, setCommentSize] = useState(comments.length);
  const { user } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isLiked, SetIsLiked] = useState();
  const [showComments, setShowComments] = useState(false);
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));

  const updateComments = () => {
    setCommentSize((pre) => pre + 1);
  };

  useEffect(() => {
    if (likes.includes(user?._id)) {
      SetIsLiked(true);
    } else {
      SetIsLiked(false);
    }
  }, [likes, user?._id]);

  const handleLike = async () => {
    setIsLoading(true);
    postsService
      .likePost(postId)
      .then((response) => {
        SetIsLiked(true);
        updateLikes(postId, true, user?._id);
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
  };
  const handleUnLike = async () => {
    setIsLoading(true);
    postsService
      .unlikePost(postId)
      .then((response) => {
        SetIsLiked(false);
        updateLikes(postId, false, user?._id);
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
  };

  return (
    <>
      <Box display="flex" px={4} width="100%" justifyContent="space-between">
        <Box display="flex" columnGap={1} alignItems="center">
          {isDownMd ? (
            <IconButton
              aria-label="Like"
              disabled={isLoading}
              size="medium"
              onClick={isLiked ? handleUnLike : handleLike}
            >
              <ThumbUpIcon
                sx={{
                  color: isLiked ? Blues["A100"] : neutral["A200"],
                  fontSize: 22,
                }}
              />
            </IconButton>
          ) : (
            <Button
              onClick={isLiked ? handleUnLike : handleLike}
              disabled={isLoading}
              sx={{
                color: isLiked ? Blues["A100"] : neutral["A200"],
                textTransform: "none",
                fontSize: 16,
                fontWeight: 500,
                borderRadius: 2,
              }}
              startIcon={
                <ThumbUpIcon
                  sx={{
                    color: isLiked ? Blues["A100"] : neutral["A200"],
                    fontSize: 22,
                  }}
                />
              }
            >
              Like
            </Button>
          )}

          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: 12, lg: 14 },
              py: 1,
              px: 2,
              borderRadius: 1.5,
              bgcolor: neutral["500"],
              color: neutral["800"],
              fontWeight: 400,
            }}
          >
            {likes.length}
          </Typography>
        </Box>
        <Box display="flex" columnGap={1} alignItems="center">
          {isDownMd ? (
            <IconButton
              aria-label="comments"
              size="medium"
              onClick={() => setShowComments((prev) => !prev)}
            >
              <CommentIcon
                sx={{
                  color: showComments ? Blues["A100"] : neutral["A200"],
                  fontSize: 22,
                }}
              />
            </IconButton>
          ) : (
            <Button
              onClick={() => setShowComments((prev) => !prev)}
              sx={{
                color: showComments ? Blues["A100"] : neutral["A200"],
                textTransform: "none",
                fontSize: 16,
                fontWeight: 500,
                borderRadius: 2,
              }}
              startIcon={
                <CommentIcon
                  sx={{
                    color: showComments ? Blues["A100"] : neutral["A200"],
                    fontSize: 22,
                  }}
                />
              }
            >
              Comment
            </Button>
          )}

          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: 12, lg: 14 },
              py: 1,
              px: 2,
              borderRadius: 1.5,
              bgcolor: neutral["500"],
              color: neutral["800"],
              fontWeight: 400,
            }}
          >
            {router.asPath === "/home" ? comments.length : commentSize}
          </Typography>
        </Box>
        <Box>
          {isDownMd ? (
            <IconButton
              aria-label="comments"
              size="medium"
              onClick={() => setShare(true)}
            >
              <ShareIcon sx={{ color: neutral["A200"], fontSize: 22 }} />
            </IconButton>
          ) : (
            <Button
              onClick={() => setShare(true)}
              sx={{
                color: neutral["A200"],
                textTransform: "none",
                fontSize: 16,
                fontWeight: 500,
                borderRadius: 2,
              }}
              startIcon={
                <ShareIcon sx={{ color: neutral["A200"], fontSize: 22 }} />
              }
            >
              Share
            </Button>
          )}
          {share && (
            <ShareModal
              copyLink={link}
              closeModal={() => setShare(false)}
              facebook={link}
              linkedin={link}
              twitter={link}
              title="Share this Post"
              instagram={link}
            />
          )}
        </Box>
      </Box>
      {showComments && (
        <Box display="flex" flexDirection="column" rowGap={3}>
          <Divider sx={{ opacity: 0.75, mx: 2 }} />
          <CommentsSection postId={postId} updateComments={updateComments} />
        </Box>
      )}
    </>
  );
};

export default PostActions;
