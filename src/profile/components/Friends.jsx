import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

import useUserContext from "../context/useUserContext";
import { Blues, neutral } from "@/src/common/config/colors";
import { FEMALE_AVATAR, MALE_AVATAR } from "../utils/constants";

const Friends = () => {
  const { user } = useUserContext();
  return (
    <Box
      display="flex"
      flexDirection="column"
      rowGap={6}
      width="100%"
      boxSizing="content-box"
      py={4}
      sx={{
        bgcolor: neutral["A500"],
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        boxShadow:
          " rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={4}
      >
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
        {/* <Button
          component="span"
          sx={{
            color: Blues["A100"],
            textTransform: "none",
            fontSize: 12,
            fontWeight: 400,
          }}
        >
          View All
        </Button> */}
      </Box>
      <Divider sx={{ opacity: 0.75 }} />
      <Box display="flex" flexDirection="column" rowGap={2} px={2}>
        {user?.following?.map((friend, index) => (
          <Link key={index} href={`/profile/${friend.username}`}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                p: 2,
                borderRadius: 1,
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                  transition: "background-color 0.3s ease-out",
                },
              }}
            >
              <Box display="flex" columnGap={4} alignItems="center">
                <Avatar
                  alt="profile-photo"
                  sx={{
                    width: 35,
                    height: 35,
                    fontSize: 15,
                  }}
                  src={
                    friend?.profileImageURL === null ||
                    friend?.profileImageURL === ""
                      ? friend?.gender === "Female" ||
                        friend?.gender === "Lesbian"
                        ? FEMALE_AVATAR
                        : MALE_AVATAR
                      : friend?.profileImageURL
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
                    {friend?.name}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: neutral["700"],
                      fontWeight: 400,
                      fontSize: { xs: 12, lg: 12 },
                    }}
                  >
                    {`${friend?.numberOfFollowers} Followers`}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Friends;
