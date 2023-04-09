import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

import useUserContext from "@/src/profile/context/useUserContext";
import { Blues, neutral } from "@/src/common/config/colors";
import { FEMALE_AVATAR, MALE_AVATAR } from "@/src/profile/utils/constants";

const Followers = ({ followers }) => {
  const { user } = useUserContext();

  return (
    <Box
      display="flex"
      flexDirection="column"
      rowGap={6}
      boxSizing="content-box"
      p={4}
      sx={{
        bgcolor: neutral["A500"],
        borderRadius: 3,
        boxShadow:
          " rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography
          variant="h4"
          component="span"
          sx={{
            color: neutral["800"],
            fontWeight: 500,
            fontSize: { xs: 14, lg: 16 },
          }}
        >
          My Friends
        </Typography>
        {followers?.data > 5 && (
          <Button
            component="span"
            sx={{
              color: Blues["A100"],
              textTransform: "none",
              fontSize: 12,
              fontWeight: 400,
            }}
          >
            View All
          </Button>
        )}
      </Box>

      <Box display="flex" flexDirection="column" rowGap={3}>
        {followers?.length > 0 ? (
          followers?.slice(0, 5)?.map((follower, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Link href={`/profile/${follower?.username}`}>
                <Box display="flex" columnGap={4} alignItems="center">
                  <Avatar
                    alt="profile-photo"
                    sx={{
                      width: 35,
                      height: 35,
                      fontSize: 15,
                    }}
                    src={
                      follower?.profileImageURL === null ||
                      follower?.profileImageURL === ""
                        ? follower?.gender === "Female" ||
                          follower?.gender === "Lesbian"
                          ? FEMALE_AVATAR
                          : MALE_AVATAR
                        : follower?.profileImageURL
                    }
                  />

                  <Box display="flex" flexDirection="column" rowGap={0.5}>
                    <Typography
                      variant="h4"
                      sx={{
                        color: neutral["900"],
                        fontWeight: 500,
                        fontSize: { xs: 14, lg: 14 },
                      }}
                    >
                      {follower?.name}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: neutral["700"],
                        fontWeight: 400,
                        fontSize: { xs: 12, lg: 12 },
                      }}
                    >
                      {`${follower?.followers?.length} Followers`}
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Box>
          ))
        ) : (
          <Typography
            variant="h6"
            sx={{
              color: neutral["700"],
              fontWeight: 400,
              textAlign: "center",
              fontSize: { xs: 12, lg: 14 },
            }}
          >
            You are not following anyone
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Followers;
