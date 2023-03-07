import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import IconButton from "@mui/material/IconButton";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import EventRoundedIcon from "@mui/icons-material/EventRounded";

import { neutral } from "@/src/common/config/colors";

const CommentsSection = () => {
  return (
    <Box display="flex" columnGap={4} px={4} py={1} alignItems="center">
      <Avatar
        alt="profile-photo"
        sx={{
          width: 30,
          height: 30,
          fontSize: 15,
          cursor: "pointer",
          position: "relative",
        }}
      >
        <PersonRoundedIcon />
      </Avatar>
      <Box
        display="flex"
        component="button"
        p={3}
        width="100%"
        border="none"
        alignItems="center"
        bgcolor={neutral["A700"]}
        borderRadius={10}
        sx={{ cursor: "text" }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: 12, lg: 14 },
            color: neutral["A200"],
            fontWeight: 500,
            opacity: 0.8,
          }}
        >
          {`What's on your mind?`}
        </Typography>
      </Box>
    </Box>
  );
};

export default CommentsSection;
