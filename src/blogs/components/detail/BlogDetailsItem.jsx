/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Avatar from "@mui/material/Avatar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import { useMediaQuery, useTheme } from "@mui/material";

import GenericResponseHandler from "@/src/common/components/skeletons/GenericResponseHandler";
import useAsync from "@/src/common/components/custom-hooks/useAsync";
import BlogDetailSkeleton from "@/src/common/components/skeletons/BlogDetailSkeleton";
import ProfileService from "@/src/profile/service/ProfileService";
import BlogOptions from "./BlogOptions";
import { formatTimeAgo } from "@/src/common/utils/utils";
import { neutral } from "@/src/common/config/colors";
import { FEMALE_AVATAR, MALE_AVATAR } from "@/src/profile/utils/constants";
import {
  calculateReadTime,
  wrapPreWithScrollableBox,
} from "../../utils/helper";

const profileService = new ProfileService();
const BlogDetailsItem = ({
  userId,
  blogId,
  text,
  imageUrl,
  time,
  updateDownvotes,
  updateUpvotes,
  upvotes,
  downvotes,
  title,
  link,
}) => {
  const { data: userData, run, status, error, setData } = useAsync();
  const theme = useTheme();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const fetchUser = async () => {
      run(profileService.fetchUserData(userId)).catch((error) =>
        console.error(error)
      );
    };
    fetchUser();
  }, [run, userId]);

  return (
    <GenericResponseHandler
      status={status}
      error={error}
      skeleton={
        <BlogDetailSkeleton
          items={1}
          gridProps={{ sx: { rowGap: 4 } }}
          gridItemProps={{
            sx: {
              borderRadius: 2,
            },
          }}
        />
      }
    >
      <Box display="flex" flexDirection="column" rowGap={4}>
        <Box display="flex" flexDirection="column" rowGap={4}>
          <Typography
            variant="h1"
            sx={{
              color: neutral["800"],
              opacity: 0.9,
              fontSize: { xs: 24, md: 36 },
            }}
          >
            {title}
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              display="flex"
              // justifyContent="center"
              alignItems="center"
              columnGap={2}
            >
              <Link href={`/profile/${userData?.data?.username}`}>
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
                    userData?.data?.profileImageURL === null ||
                    userData?.data?.profileImageURL === ""
                      ? userData?.data?.gender === "Female" ||
                        userData?.data?.gender === "Lesbian"
                        ? FEMALE_AVATAR
                        : MALE_AVATAR
                      : userData?.data?.profileImageURL
                  }
                />
              </Link>
              <Box display="flex" flexDirection="column" rowGap={0.5}>
                <Link href={`/profile/${userData?.data?.username}`}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: 14, lg: 16 },
                      color: neutral["900"],
                      fontWeight: 500,
                      opacity: 0.9,
                    }}
                  >
                    {userData?.data?.name}
                  </Typography>
                </Link>
                <Box display="flex" columnGap={2}>
                  <Box display="flex" alignItems="center" columnGap={0.5}>
                    <AccessTimeIcon
                      sx={{ fontSize: 14, color: neutral["700"] }}
                    />
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
                      {formatTimeAgo(time)}
                    </Typography>
                  </Box>
                  .
                  <Box display="flex" alignItems="center" columnGap={0.5}>
                    <HourglassBottomIcon
                      sx={{ fontSize: 14, color: neutral["700"] }}
                    />
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
                      {calculateReadTime(text)}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <BlogOptions
              updateDownvotes={updateDownvotes}
              updateUpvotes={updateUpvotes}
              blogId={blogId}
              upvotes={upvotes}
              downvotes={downvotes}
              link={link}
            />
          </Box>
        </Box>
        <Divider sx={{ opacity: 0.75 }} />
        <Box display="flex" justifyContent="start">
          <img
            src={imageUrl}
            alt="blogImage"
            width={!isDownMd ? "75%" : "100%"}
          />
        </Box>
        <Box display="flex" width="100%" sx={{ textAlign: "inherit" }}>
          <Typography
            variant="body1"
            component="div"
            dangerouslySetInnerHTML={{
              __html: wrapPreWithScrollableBox(text),
            }}
          />
        </Box>
      </Box>
    </GenericResponseHandler>
  );
};

export default BlogDetailsItem;
