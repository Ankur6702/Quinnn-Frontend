/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import { useSnackbar } from "notistack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import useUserContext from "@/src/profile/context/useUserContext";
import PostOptions from "./PostOptions";
import PostActions from "./PostActions";
import PostsService from "../../service/PostsService";
import { sliceString, formatTimeAgo } from "@/src/common/utils/utils";
import { neutral } from "@/src/common/config/colors";
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
  const { setUser } = useUserContext();
  const { enqueueSnackbar } = useSnackbar();

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
        <PostActions
          updateLikes={updateLikes}
          postId={postId}
          comments={comments}
          likes={likes}
          link={link}
        />
      </Box>
    </Box>
  );
};

export default PostItem;
