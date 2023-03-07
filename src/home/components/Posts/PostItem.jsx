/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ShareIcon from "@mui/icons-material/Share";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import AddIcon from "@mui/icons-material/Add";

import usePosts from "../../context/usePosts";
import CommentsSection from "../comments/CommentsSection";
import { sliceString } from "@/src/common/utils/utils";
import { POST_IMAGE_1, POST_IMAGE_2 } from "../../utils/constants";
import { Blues, neutral } from "@/src/common/config/colors";

const PostItem = () => {
  const [showMore, setShowMore] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const postText = `
  Love this meme! It really hits hard, as doing my job sometimes causes me impostor syndrome. There are days when I get up from my desk, being tired as hell and having nothing to show for it... Or do I?

  I really envy my colleagues. By the end of the day:
  code developers will have a lot of code to present at the end of the day,
  designers will surely make progress in their designs,
  data analysts will progress in their data discoveries,
  QA engineers will find new bugs,
  etc...
  
  Me?
  
  I can often only recall 6 hours of meetings (half of them could have been an email, and most of the rest I was there just in case they needed to ask me a question...) with 2 hours spent on lunch and chit-chat by the office kitchen (at least when I'm in the office. At home it's probably putting the laundry in or out while listening to a boring meeting).
  It still needs to be done - you never know when a PM will be a key voice in a meeting!
  
  If there are no meetings, I can find myself looking through users' feedback for hours without finding anything that is both unknown and actionable.
  It still needs to be done - inspiration can come from anywhere!
  
  Sometimes it's spending hours on research that yields no results. Often, it feels like blindly looking for gold in mountains with a pickaxe rather than being a scientist: There is blood, and sweat, but no gold.
  It still needs to be done - strategic thinking requires understanding the market and it's possible future!
  
  I might get stuck for hours in the backlog, looking at the bugs my team will never fix because they are inconsequential. However, someone has to look at them before they are closed, right?
  It still needs to be done - a clean backlog shows the PM's grip on the product and provides transparency about things to come!
  
  I also spend a lot of time writing documentation and communication I know well that probably no one will read.
  It still needs to be done - someone may need to read it! That someone might be you in a few weeks!
  
  Not to mention the depressing amount of time spent trying to find an answer to a data question in an analytical suite just to find a metric needed is not tracked or has some bug that obscures the results, making it inconsequential. Well, I guess it is better than drawing false data conclusions and acting on them!
  It still needs to be done - only the data suite, regardless of how messy, holds the answers to your data questions!
  
  Did you also have a lot of brainstorming or backlog refinement sessions that provided no substance in the end?
  It still needs to be done - without a creative environment to grow, revolutionary ideas my not blossom!
  
  Thus, I end the day being super tired of all the work done and having no idea what to enter into the timesheet system so it doesn't look like the day failed to produce any results :)
  
  Anyway, good luck doing something meaningful today!
  
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
                  opacity: 0.9,
                }}
              >
                Rajat Singh
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
              whiteSpace: "pre-wrap",
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
        {/* <Divider sx={{ opacity: 0.75, mx: 2 }} /> */}
        <Box display="flex" px={4} width="100%" justifyContent="space-between">
          <Box display="flex" columnGap={1} alignItems="center">
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
