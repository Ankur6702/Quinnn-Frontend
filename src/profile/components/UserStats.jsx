import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import EditIcon from "@mui/icons-material/Edit";
import CardMedia from "@mui/material/CardMedia";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useTheme } from "@mui/material";

import { Blues, neutral } from "@/src/common/config/colors";

const UserStats = ({ user }) => {
  const theme = useTheme();
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
          sx={{
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
          sx={{
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
      </Box>
    </Box>
  );
};

export default UserStats;
