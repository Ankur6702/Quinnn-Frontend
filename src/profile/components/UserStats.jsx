import React, { useState } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material";

import ListUsersModal from "@/src/common/components/modals/ListUsers/ListUsersModal";
import { Blues, neutral } from "@/src/common/config/colors";

const UserStats = ({ user }) => {
  const theme = useTheme();
  const router = useRouter();
  const [openFollowers, setOpenFollowers] = useState(false);
  const [openFollowing, setOpenFollowing] = useState(false);

  const handleOpenFollowers = () => {
    setOpenFollowers(true);
  };
  const handleCloseFollowers = () => {
    setOpenFollowers(false);
  };
  const handleOpenFollowing = () => {
    setOpenFollowing(true);
  };
  const handleCloseFollowing = () => {
    setOpenFollowing(false);
  };

  return (
    <Box
      display="flex"
      columnGap={{ sm: 8 }}
      sx={{
        [theme.breakpoints.down("sm")]: { justifyContent: "space-between" },
      }}
      alignItems="center"
      height={50}
      mt={2}
      width="100%"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        rowGap={1.5}
      >
        <Typography
          variant="h4"
          sx={{
            color: neutral["700"],
            opacity: 0.8,
            fontWeight: 500,
            fontSize: { xs: 16, lg: 18 },
          }}
        >
          Posts
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor={neutral["A700"]}
          px={3}
          color={Blues["A100"]}
          sx={{ fontWeight: 600 }}
          fontSize={{ xs: 14, lg: 16 }}
          borderRadius={1}
        >
          {user?.posts?.length}
        </Box>
      </Box>
      <Divider
        orientation="vertical"
        variant="middle"
        sx={{ bgcolor: neutral["600"], opacity: 0.5 }}
        flexItem
      />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        rowGap={1.5}
      >
        <Typography
          variant="h4"
          onClick={router.pathname === "/profile" ? handleOpenFollowers : null}
          sx={{
            cursor: router.pathname === "/profile" ? "pointer" : "text",
            color: neutral["700"],
            fontWeight: 500,
            opacity: 0.8,
            fontSize: { xs: 16, lg: 18 },
          }}
        >
          Followers
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor={neutral["A700"]}
          px={3}
          color={Blues["A100"]}
          sx={{ fontWeight: 600 }}
          fontSize={{ xs: 14, lg: 16 }}
          borderRadius={1}
        >
          {user?.followers?.length}
        </Box>
        {openFollowers && (
          <ListUsersModal
            isOpen={openFollowers}
            handleClose={handleCloseFollowers}
            modalType="followers"
          />
        )}
      </Box>
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ bgcolor: neutral["600"], opacity: 0.5 }}
      />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        rowGap={1.5}
      >
        <Typography
          variant="h4"
          onClick={router.pathname === "/profile" ? handleOpenFollowing : null}
          sx={{
            cursor: router.pathname === "/profile" ? "pointer" : "text",
            color: neutral["700"],
            opacity: 0.8,
            fontWeight: 500,
            fontSize: { xs: 16, lg: 18 },
          }}
        >
          Following
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor={neutral["A700"]}
          px={3}
          color={Blues["A100"]}
          sx={{ fontWeight: 600 }}
          fontSize={{ xs: 14, lg: 16 }}
          borderRadius={1}
        >
          {user?.following?.length}
        </Box>
        {openFollowing && (
          <ListUsersModal
            isOpen={openFollowing}
            handleClose={handleCloseFollowing}
            modalType="following"
          />
        )}
      </Box>
    </Box>
  );
};

export default UserStats;
