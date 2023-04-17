import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { useMediaQuery, useTheme } from "@mui/material";

import GenericResponseHandler from "@/src/common/components/skeletons/GenericResponseHandler";
import GenericListSkeleton from "@/src/common/components/skeletons/GenericListSkeleton";
import useAsync from "@/src/common/components/custom-hooks/useAsync";
import Followers from "@/src/home/components/create/Followers";
import useUserContext from "@/src/profile/context/useUserContext";
import ProfileService from "@/src/profile/service/ProfileService";
import HeadSection from "./HeadSection";
import { neutral } from "@/src/common/config/colors";

const profileService = new ProfileService();
const ProfileSection = () => {
  const isLargeScreen = useMediaQuery("(min-width:1350px)");
  const { data: following, run, status, error, setData } = useAsync();
  const { user } = useUserContext();

  useEffect(() => {
    const fetchUser = async () => {
      run(profileService.fetchUserFollowing(user?._id))
        .then((response) => {})
        .catch((error) => console.error(error));
    };
    fetchUser();
  }, [run, user?._id]);

  return (
    <Box
      display="flex"
      justifyContent={{ xs: "center", lg: "space-between" }}
      columnGap={8}
      sx={{
        maxWidth: 1130,
        width: "100%",
        position: "relative",
      }}
    >
      <HeadSection />
      {isLargeScreen && (
        <Box sx={{ maxWidth: 320, width: "100%", position: "relative" }}>
          <GenericResponseHandler
            status={status}
            error={error}
            skeleton={
              <GenericListSkeleton
                items={1}
                gridProps={{
                  sx: { maxWidth: 320, width: "100%", position: "fixed" },
                }}
                gridItemProps={{
                  rowGap: 1,
                  sx: {
                    borderRadius: 3,
                  },
                }}
                boxProps={{
                  height: 400,
                  p: 0,
                  sx: {
                    "& .MuiSkeleton-root": {
                      borderRadius: 1.5,
                    },
                  },
                }}
              />
            }
          >
            <Box
              display="flex"
              flexDirection="column"
              sx={{
                maxWidth: 320,
                width: "100%",
                bgcolor: neutral["A500"],
              }}
            >
              <Followers following={following?.data} />
            </Box>
          </GenericResponseHandler>
        </Box>
      )}
    </Box>
  );
};

export default ProfileSection;
