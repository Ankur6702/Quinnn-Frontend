import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

import GenericListSkeleton from "@/src/common/components/skeletons/GenericListSkeleton";
import GenericResponseHandler from "@/src/common/components/skeletons/GenericResponseHandler";
import ProfileService from "@/src/profile/service/ProfileService";
import CommentActions from "./CommentActions";
import CommentOptions from "./CommentOptions";
import useAsync from "@/src/common/components/custom-hooks/useAsync";
import { neutral } from "@/src/common/config/colors";
import { formatTimeAgo } from "@/src/common/utils/utils";
import { MALE_AVATAR, FEMALE_AVATAR } from "@/src/profile/utils/constants";
import CommentSkeleton from "@/src/common/components/skeletons/CommentSkeleton";

const profileService = new ProfileService();
const ShowComments = ({ comment }) => {
  const { data: userData, run, status, error, setData } = useAsync();

  useEffect(() => {
    const fetchUser = async () => {
      run(profileService.fetchUserData(comment?.userID)).catch((error) =>
        console.error(error)
      );
    };
    fetchUser();
  }, [comment?.userID, run]);

  return (
    <GenericResponseHandler
      status={status}
      error={error}
      skeleton={<CommentSkeleton items={1} />}
    >
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" columnGap={2} pr={1} pl={8} py={1}>
          <Avatar
            alt="profile-photo"
            src={
              userData?.data?.profileImageURL === null ||
              userData?.data?.profileImageURL === ""
                ? userData?.data?.gender === "Female" ||
                  userData?.data?.gender === "Lesbian"
                  ? FEMALE_AVATAR
                  : MALE_AVATAR
                : userData?.data?.profileImageURL
            }
            sx={{
              width: 24,
              height: 24,
              fontSize: 15,
              cursor: "pointer",
              position: "relative",
            }}
          />
          <Box display="flex" flexDirection="column" rowGap={1}>
            <Box display="flex" columnGap={1}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: 12, lg: 14 },
                  color: neutral["900"],
                  fontWeight: 500,
                  opacity: 0.9,
                }}
              >
                {userData?.data?.username}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: 12, lg: 12 },
                  color: neutral["700"],
                  fontWeight: 500,
                  opacity: 0.9,
                }}
              >
                {`(${formatTimeAgo(comment?.creationDate)})`}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: 12, lg: 12 },
                  color: neutral["600"],
                  fontWeight: 500,
                  opacity: 0.9,
                }}
              >
                {comment?.text}
              </Typography>
            </Box>
            <Box my={0.5}>
              <CommentActions
                likes={comment?.likes}
                dislikes={comment?.dislikes}
              />
            </Box>
          </Box>
        </Box>
        <Box my={0.5}>
          <CommentOptions userId={comment?.userID} />
        </Box>
      </Box>
    </GenericResponseHandler>
  );
};

export default ShowComments;
