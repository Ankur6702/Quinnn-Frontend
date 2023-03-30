/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSnackbar } from "notistack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ShareIcon from "@mui/icons-material/Share";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import { useMediaQuery, useTheme } from "@mui/material";

import CommentsSection from "../comments/CommentsSection";
import ShareModal from "@/src/common/components/share/ShareModal";
import useUserContext from "@/src/profile/context/useUserContext";
import PostOptions from "./PostOptions";
import PostsService from "../../service/PostsService";
import { sliceString, formatTimeAgo } from "@/src/common/utils/utils";
import { Blues, neutral } from "@/src/common/config/colors";
import { FEMALE_AVATAR, MALE_AVATAR } from "@/src/profile/utils/constants";

const postsService = new PostsService();
const PostItem = ({
  boxprops,
  text,
  imageUrl,
  likes,
  username,
  userId,
  postId,
  comments,
  name,
  time,
  avatar,
  gender,
  link,
  removePost,
  updateLikes,
}) => {
  const [showMore, setShowMore] = useState(false);
  const [share, setShare] = useState(false);
  const { user, setUser } = useUserContext();
  const [showComments, setShowComments] = useState(false);
  const [isLiked, SetIsLiked] = useState();
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (likes.includes(user?._id)) {
      SetIsLiked(true);
    } else {
      SetIsLiked(false);
    }
  }, [likes, user?._id]);

  const handleDeletePost = () => {
    postsService
      .deletePost(postId)
      .then((response) => {
        removePost(postId);
        setUser(response?.data?.updatedUser);
        enqueueSnackbar("Post deleted successfully", {
          variant: "info",
          autoHideDuration: 2000,
          anchorOrigin: { horizontal: "right", vertical: "top" },
        });
      })
      .catch((error) => {
        console.log(error);
        enqueueSnackbar("Something went wrong,Please try again", {
          variant: "error",
          autoHideDuration: 2000,
          anchorOrigin: { horizontal: "right", vertical: "top" },
        });
      });
  };

  const handleLike = async () => {
    postsService
      .likePost(postId)
      .then((response) => {
        console.log(response);
        SetIsLiked(true);
        updateLikes(postId, true, user?._id);
        // setUser(response?.data?.updatedUser);
      })
      .catch((error) => {
        console.log(error);
        enqueueSnackbar("Something went wrong,Please try again", {
          variant: "error",
          autoHideDuration: 2000,
          anchorOrigin: { horizontal: "right", vertical: "top" },
        });
      });
  };
  const handleUnLike = async () => {
    postsService
      .unlikePost(postId)
      .then((response) => {
        console.log(response);
        SetIsLiked(false);
        updateLikes(postId, false, user?._id);
        // setUser(response?.data?.updatedUser);
      })
      .catch((error) => {
        console.log(error);
        enqueueSnackbar("Something went wrong,Please try again", {
          variant: "error",
          autoHideDuration: 2000,
          anchorOrigin: { horizontal: "right", vertical: "top" },
        });
      });
  };

  // useEffect(() => {
  //   if (profile?.followers.some((e) => e.userID === user?._id)) {
  //     setIsFollowing(true);
  //   } else {
  //     setIsFollowing(false);
  //   }
  // }, [profile?.followers, user?._id]);

  return (
    <Box
      display="flex"
      boxSizing="border-box"
      py={4}
      sx={{
        maxWidth: 630,
        width: "100%",
        height: "100%",
        bgcolor: neutral["A500"],
        borderRadius: 2,
        boxShadow:
          " rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
        ...(boxprops?.sx || {}),
      }}
    >
      <Box display="flex" flexDirection="column" rowGap={3} width="100%">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          px={4}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            columnGap={2}
          >
            <Link href={`/profile/${username}`}>
              <Avatar
                alt="profile-photo"
                sx={{
                  width: 40,
                  height: 40,
                  fontSize: 15,
                  cursor: "pointer",
                  position: "relative",
                }}
                src={
                  avatar === null || avatar === ""
                    ? gender === "Female" || gender === "Lesbian"
                      ? FEMALE_AVATAR
                      : MALE_AVATAR
                    : avatar
                }
              />
            </Link>
            <Box display="flex" flexDirection="column" rowGap={0.5}>
              <Link href={`/profile/${username}`}>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: 14, lg: 16 },
                    color: neutral["900"],
                    fontWeight: 500,
                    opacity: 0.9,
                  }}
                >
                  {name}
                </Typography>
              </Link>
              <Box display="flex" alignItems="center" columnGap={0.5}>
                <AccessTimeIcon sx={{ fontSize: 14, color: neutral["700"] }} />
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: 12, lg: 12 },
                    color: neutral["700"],
                    fontWeight: 400,
                    opacity: 0.8,
                    display: "flex",
                    alignItems: "center",
                    columnGap: 1,
                    pt: 0.25,
                  }}
                >
                  {formatTimeAgo(time)}
                </Typography>
              </Box>
            </Box>
          </Box>
          <PostOptions userId={userId} handleDeletePost={handleDeletePost} />
        </Box>
        {text && (
          <Box
            px={4}
            pb={{
              xs: text.length > 200 ? 8 : 0,
              md: text.length > 200 ? 6 : 0,
            }}
            sx={{ position: "relative" }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: 12, lg: 14 },
                color: neutral["800"],
                fontWeight: 400,
                opacity: 0.9,
                whiteSpace: "pre-wrap",
              }}
              dangerouslySetInnerHTML={{
                __html: showMore ? text : sliceString(text, 200),
              }}
            />

            {text.length > 200 && (
              <Button
                disableRipple
                sx={{
                  color: neutral["A200"],
                  textTransform: "none",
                  fontSize: { xs: 12, md: 14 },
                  fontWeight: 400,
                  position: "absolute",
                  right: 0,
                  bottom: 0,

                  "&:hover": {
                    backgroundColor: "transparent !important",
                  },
                }}
                startIcon={showMore ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Show Less" : "Show More"}
              </Button>
            )}
          </Box>
        )}
        {imageUrl && (
          <Box
            display="flex"
            justifyContent="center"
            sx={{ maxWidth: "100%", height: "auto", position: "relative" }}
          >
            <img
              src={imageUrl}
              alt="posted-image"
              style={{ width: "auto", height: "auto", maxWidth: "100%" }}
            />
          </Box>
        )}
        {/* <Divider sx={{ opacity: 0.75, mx: 2 }} /> */}
        <Box display="flex" px={4} width="100%" justifyContent="space-between">
          <Box display="flex" columnGap={1} alignItems="center">
            {isDownMd ? (
              <IconButton aria-label="Like" size="medium">
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
              {comments.length}
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
            <CommentsSection />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default PostItem;
