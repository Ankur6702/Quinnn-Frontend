import React, { useState } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

import ListUsersModal from "@/src/common/components/modals/ListUsers/ListUsersModal";
import useUserContext from "@/src/profile/context/useUserContext";
import { Blues, neutral } from "@/src/common/config/colors";
import { FEMALE_AVATAR, MALE_AVATAR } from "@/src/profile/utils/constants";

const Followers = ({ following }) => {
  const { user } = useUserContext();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      rowGap={4}
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
        {following?.length > 0 && (
          <Button
            component="span"
            onClick={handleClick}
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
        {open && (
          <ListUsersModal
            isOpen={open}
            handleClose={handleClose}
            modalType="following"
          />
        )}
      </Box>

      <Box display="flex" flexDirection="column" rowGap={3}>
        {following?.length > 0 ? (
          following?.slice(0, 5)?.map((following, index) => (
            <Box
              key={index}
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
              <Link href={`/profile/${following?.username}`}>
                <Box display="flex" columnGap={4} alignItems="center">
                  <Avatar
                    alt="profile-photo"
                    sx={{
                      width: 35,
                      height: 35,
                      fontSize: 15,
                    }}
                    src={
                      following?.profileImageURL === null ||
                      following?.profileImageURL === ""
                        ? following?.gender === "Female" ||
                          following?.gender === "Lesbian"
                          ? FEMALE_AVATAR
                          : MALE_AVATAR
                        : following?.profileImageURL
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
                      {following?.name}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: neutral["700"],
                        fontWeight: 400,
                        fontSize: { xs: 12, lg: 12 },
                      }}
                    >
                      {`${following?.followers?.length} ${
                        following?.followers?.length > 1
                          ? "Followers"
                          : "Follower"
                      }`}
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
