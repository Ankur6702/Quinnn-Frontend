import React, { useState } from "react";
import { useSnackbar } from "notistack";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { useMediaQuery, useTheme } from "@mui/material";

import ShowUserData from "../ShowUserData";
import ProfileService from "../../service/ProfileService";
import useUserContext from "../../context/useUserContext";
import PublicProfileActivity from "./PublicProfileActivity";
import {
  BANNER_IMAGE,
  FEMALE_AVATAR,
  MALE_AVATAR,
  USER_NOT_FOUND,
} from "../../utils/constants";
import { neutral } from "@/src/common/config/colors";

const profileService = new ProfileService();
const PublicProfile = ({
  profile,
  isFollowing,
  followUser,
  unFollowUser,
  updateProfile,
}) => {
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();
  const { user, setUser } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));

  const handleFollow = async () => {
    try {
      const reqUrl = `${process.env.API_BASE_SERVICE}/api/user/follow/${profile._id}`;
      setIsLoading(true);
      const Response = await profileService.put(reqUrl);
      followUser();
      const copyProfile = profile;
      copyProfile.followers.push(user?._id);
      updateProfile(copyProfile);
      const copyUserProfile = user;
      copyUserProfile.following.push(profile?._id);
      setUser(copyUserProfile);
      enqueueSnackbar("User followed", {
        variant: "info",
        autoHideDuration: 2000,
        anchorOrigin: { horizontal: "right", vertical: "top" },
      });
    } catch (error) {
      console.log(error);
      enqueueSnackbar("Something went wrong, Please try again", {
        variant: "error",
        autoHideDuration: 2000,
        anchorOrigin: { horizontal: "right", vertical: "top" },
      });
    } finally {
      setIsLoading(false);
    }
  };
  const handleUnFollow = async () => {
    try {
      const reqUrl = `${process.env.API_BASE_SERVICE}/api/user/unfollow/${profile._id}`;
      setIsLoading(true);
      const Response = await profileService.put(reqUrl);
      unFollowUser();
      const updatedFollowers = profile?.followers.filter(
        (follower) => follower !== user?._id
      );
      const updatedFollowing = user?.following.filter(
        (following) => following !== profile?._id
      );
      const copyProfile = profile;
      copyProfile.followers = updatedFollowers;
      updateProfile(copyProfile);
      const copyUserProfile = user;
      copyUserProfile.following = updatedFollowing;
      setUser(copyUserProfile);
      enqueueSnackbar("User unfollowed", {
        variant: "info",
        autoHideDuration: 2000,
        anchorOrigin: { horizontal: "right", vertical: "top" },
      });
    } catch (error) {
      console.log(error);
      enqueueSnackbar("Something went wrong, Please try again", {
        variant: "error",
        autoHideDuration: 2000,
        anchorOrigin: { horizontal: "right", vertical: "top" },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {profile ? (
        <Box
          sx={{
            maxWidth: 800,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            rowGap: 4,
          }}
        >
          <Box
            sx={{
              maxWidth: 800,
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              display="flex"
              justifyContent="center"
              sx={{
                maxWidth: "100%",
                height: { xs: 120, md: 200 },
                position: "relative",
                borderTopRightRadius: 15,
                borderTopLeftRadius: 15,
                overflow: "hidden",
              }}
            >
              <CardMedia
                name="banner-image"
                key={Date.now()}
                component="img"
                image={profile?.coverImageURL || BANNER_IMAGE}
                alt="baner-image"
                sx={{
                  width: "100% !important",
                  objectFit: { xs: "cover", md: "cover" },
                  objectPosition: "center center",
                }}
              />
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              px={{ xs: 2.5, md: 3 }}
              sx={{ bgcolor: neutral["A500"] }}
              height={50}
            >
              <Box
                sx={{
                  position: "relative",
                  zIndex: 2,
                  height: { xs: 100, md: 150 },
                  cursor: "pointer",
                  bottom: { xs: 60, md: 100 },
                }}
              >
                <Avatar
                  alt="profile-photo"
                  sx={{
                    width: { xs: 100, md: 150 },
                    height: { xs: 100, md: 150 },
                    cursor: "pointer",
                  }}
                  src={
                    profile?.profileImageURL === null ||
                    profile?.profileImageURL === ""
                      ? profile?.gender === "Female" ||
                        profile?.gender === "Lesbian"
                        ? FEMALE_AVATAR
                        : MALE_AVATAR
                      : profile?.profileImageURL
                  }
                />
              </Box>
              {user?._id !== profile?._id && (
                <Box display="flex">
                  <Box py={3}>
                    <Button
                      component="span"
                      onClick={isFollowing ? handleUnFollow : handleFollow}
                      disabled={isLoading}
                      sx={{
                        bgcolor: neutral["A500"],
                        fontSize: 16,
                        textTransform: "none",
                        p: 1,
                        "&:hover": {},
                      }}
                    >
                      {isFollowing ? "Following" : "Follow"}
                    </Button>
                  </Box>
                </Box>
              )}
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              px={{ xs: 2.5, md: 3 }}
              sx={{ bgcolor: neutral["A500"] }}
            >
              <ShowUserData user={profile} />
            </Box>
          </Box>
          {(user?._id === profile?._id ||
            !profile.isPrivate ||
            isFollowing) && <PublicProfileActivity profile={profile} />}
        </Box>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          rowGap={1}
          justifyContent="center"
          alignItems="center"
          width="100%"
          flexGrow={1}
        >
          <Image
            src={USER_NOT_FOUND}
            alt="user not found"
            width={isDownMd ? 250 : 300}
            height={isDownMd ? 250 : 320}
          />
          <Typography
            variant="h4"
            component="span"
            sx={{
              color: neutral["900"],
              fontWeight: 500,
              fontSize: { xs: 16, lg: 22 },
            }}
          >
            Whoops! User not found
          </Typography>
        </Box>
      )}
    </>
  );
};
export default PublicProfile;
