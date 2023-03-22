import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import EditIcon from "@mui/icons-material/Edit";
import CardMedia from "@mui/material/CardMedia";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

import { Blues, neutral } from "@/src/common/config/colors";

const EditProfileData = () => {
  return (
    <Box py={3}>
      <IconButton
        component="span"
        sx={{
          bgcolor: neutral["A500"],
          p: 1,
        }}
      >
        <EditIcon sx={{ fontSize: { xs: 14, md: 20 }, color: Blues["A100"] }} />
      </IconButton>
    </Box>
  );
};

export default EditProfileData;
