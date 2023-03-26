import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import EditIcon from "@mui/icons-material/Edit";
import CardMedia from "@mui/material/CardMedia";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

import EditProfileModal from "@/src/common/components/modals/EditProfile/EditProfileModal";
import { Blues, neutral } from "@/src/common/config/colors";

const EditProfileData = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box py={3}>
      <IconButton
        component="span"
        onClick={handleClick}
        sx={{
          bgcolor: neutral["A500"],
          p: 1,
        }}
      >
        <EditIcon sx={{ fontSize: { xs: 14, md: 20 }, color: Blues["A100"] }} />
      </IconButton>
      <EditProfileModal isOpen={open} handleClose={handleClose} />
    </Box>
  );
};

export default EditProfileData;
