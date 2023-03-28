/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ShareIcon from "@mui/icons-material/Share";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import AddIcon from "@mui/icons-material/Add";
import { useMediaQuery, useTheme } from "@mui/material";

import usePosts from "../../context/usePosts";
import CommentsSection from "../comments/CommentsSection";
import { sliceString } from "@/src/common/utils/utils";
import { POST_IMAGE_1, POST_IMAGE_2 } from "../../utils/constants";
import { Blues, neutral } from "@/src/common/config/colors";
import ShareModal from "@/src/common/components/share/ShareModal";

const PostItem = ({
  boxprops,
  text,
  imageUrl,
  likes,
  comments,
  name,
  time,
  avatar,
  gender,
}) => {
  const [showMore, setShowMore] = useState(false);
  const [share, setShare] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const theme = useTheme();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));
  const postText = `Love this meme! It really hits hard, as doing my job sometimes causes me impostor syndrome. There are days when I get up from my desk, being tired as hell and having nothing to show for it... Or do I?

  I really envy my colleagues. By the end of the day:
  code developers will have a lot of code to present at the end of the day,
  designers will surely make progress in their designs,
  data analysts will progress in their data discoveries,
  QA engineers will find new bugs,
  etc...
  
  Thank you Vishal Chaudhary 👋 for the meme :)`;
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
            <Box display="flex" flexDirection="column" rowGap={0.5}>
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
                  32 minutes ago
                </Typography>
              </Box>
            </Box>
          </Box>
          <Button
            component="span"
            sx={{
              color: Blues["A200"],
              textTransform: "none",
              fontSize: { xs: 14, lg: 16 },
              fontWeight: 500,
            }}
            startIcon={<AddIcon sx={{ color: Blues["Aa00"], fontSize: 22 }} />}
          >
            Follow
          </Button>
        </Box>
        <Box px={4} pb={{ xs: 8, md: 6 }} sx={{ position: "relative" }}>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: 12, lg: 14 },
              color: neutral["800"],
              fontWeight: 400,
              opacity: 0.9,
              whiteSpace: "pre-wrap",
            }}
          >
            {showMore ? (
              <ReactMarkdown>{text}</ReactMarkdown>
            ) : (
              sliceString(<ReactMarkdown>{text}</ReactMarkdown>, 200)
            )}
          </Typography>
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
        </Box>
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
        {/* <Divider sx={{ opacity: 0.75, mx: 2 }} /> */}
        <Box display="flex" px={4} width="100%" justifyContent="space-between">
          <Box display="flex" columnGap={1} alignItems="center">
            {isDownMd ? (
              <IconButton aria-label="comments" size="medium">
                <ThumbUpIcon
                  sx={{
                    color: neutral["A200"],
                    fontSize: 22,
                  }}
                />
              </IconButton>
            ) : (
              <Button
                sx={{
                  color: neutral["A200"],
                  textTransform: "none",
                  fontSize: 16,
                  fontWeight: 500,
                  borderRadius: 2,
                }}
                startIcon={
                  <ThumbUpIcon
                    sx={{
                      color: neutral["A200"],
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
              {likes}
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
              {comments}
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
                copyLink={window.location.href}
                closeModal={() => setShare(false)}
                facebook="https://lgbtq-social-media-frontend-ankur6702.vercel.app"
                linkedin="https://lgbtq-social-media-frontend-ankur6702.vercel.app"
                twitter="https://lgbtq-social-media-frontend-ankur6702.vercel.app"
                title="Share this Post"
                instagram="https://lgbtq-social-media-frontend-ankur6702.vercel.app"
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
