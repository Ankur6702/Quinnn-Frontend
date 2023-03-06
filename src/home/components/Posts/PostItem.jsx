/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import AddIcon from "@mui/icons-material/Add";

import usePosts from "../../context/usePosts";
import { sliceString } from "@/src/common/utils/utils";
import { POST_IMAGE_1, POST_IMAGE_2 } from "../../utils/constants";
import { Blues, neutral } from "@/src/common/config/colors";

const PostItem = () => {
  const [showMore, setShowMore] = useState(false);
  const postText =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae et possimus cumque ipsum quas! Suscipit incidunt quo porro nesciunt autem doloribus aspernatur in error possimus qui placeat, beatae sint voluptas ad saepe reprehenderit illum quas, reiciendis odio eveniet quos voluptatem explicabo ab neque? Neque eum enim, ipsam qui ratione tempora, magnam rerum totam corporis deleniti autem nostrum incidunt deserunt praesentium.";
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
      }}
    >
      <Box display="flex" flexDirection="column" rowGap={3}>
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
            <Avatar
              alt="profile-photo"
              sx={{
                width: 40,
                height: 40,
                fontSize: 15,
                cursor: "pointer",
                position: "relative",
              }}
            >
              <PersonRoundedIcon />
            </Avatar>
            <Box display="flex" flexDirection="column" rowGap={0.5}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: 12, lg: 16 },
                  color: neutral["900"],
                  fontWeight: 500,
                  opacity: 0.8,
                }}
              >
                Rajat Singh
              </Typography>
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
                }}
              >
                <AccessTimeIcon sx={{ fontSize: 14 }} /> 32 minutes ago
              </Typography>
            </Box>
          </Box>
          <Button
            component="span"
            sx={{
              color: Blues["A200"],
              textTransform: "none",
              fontSize: 16,
              fontWeight: 500,
            }}
            startIcon={<AddIcon sx={{ color: Blues["Aa00"], fontSize: 22 }} />}
          >
            Follow
          </Button>
        </Box>
        <Box px={4} pb={4} sx={{ position: "relative" }}>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: 12, lg: 14 },
              color: neutral["800"],
              fontWeight: 400,
              opacity: 0.9,
            }}
          >
            {showMore ? postText : sliceString(postText, 200)}
          </Typography>
          <Button
            disableRipple
            sx={{
              color: neutral["A200"],
              textTransform: "none",
              fontSize: 14,
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
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          sx={{ maxWidth: "100%", height: "auto", position: "relative" }}
        >
          <img
            src={POST_IMAGE_1}
            alt="posted-image"
            style={{ width: "auto", height: "auto", maxWidth: "100%" }}
          />
        </Box>
        <Divider sx={{ opacity: 0.75, mx: 2 }} />
        <Box display="flex" px={4} width="100%" justifyContent="space-between">
          <Box display="flex" columnGap={1} alignItems="center">
            <Button
              component="span"
              sx={{
                color: neutral["A200"],
                textTransform: "none",
                fontSize: 16,
                fontWeight: 500,
                borderRadius: 2,
              }}
              startIcon={
                <ThumbUpIcon sx={{ color: Blues["Aa00"], fontSize: 22 }} />
              }
            >
              Upvote
            </Button>
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
              12
            </Typography>
          </Box>
          <Box display="flex" columnGap={1} alignItems="center">
            <Button
              component="span"
              sx={{
                color: neutral["A200"],
                textTransform: "none",
                fontSize: 16,
                fontWeight: 500,
                borderRadius: 2,
              }}
              startIcon={
                <CommentIcon sx={{ color: Blues["Aa00"], fontSize: 22 }} />
              }
            >
              Comment
            </Button>
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
              32
            </Typography>
          </Box>
          <Button
            component="span"
            sx={{
              color: neutral["A200"],
              textTransform: "none",
              fontSize: 16,
              fontWeight: 500,
              borderRadius: 2,
            }}
            startIcon={
              <ShareIcon sx={{ color: Blues["Aa00"], fontSize: 22 }} />
            }
          >
            Share
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PostItem;
