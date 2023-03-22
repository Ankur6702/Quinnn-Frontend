import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import EditIcon from "@mui/icons-material/Edit";
import CardMedia from "@mui/material/CardMedia";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useMediaQuery, useTheme } from "@mui/material";

import { BANNER_IMAGE, FEMALE_AVATAR, MALE_AVATAR } from "../utils/constants";
import { Blues, neutral } from "@/src/common/config/colors";
import UpdateBannerModal from "@/src/common/components/modals/EditProfile/UpdateBannerModal";

const HeadSection = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdateImage = (image) => {
    setImageUrl(image);
  };

  return (
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
          name="image"
          key={Date.now()}
          component="img"
          image={imageUrl || BANNER_IMAGE}
          alt="baner-image"
          sx={{
            width: { xs: "auto", sm: "100% !important" },
            height: { xs: "100% !important", sm: "auto" },
            objectFit: { xs: "unset", md: "cover" },
          }}
        />
        <IconButton
          component="span"
          onClick={handleClick}
          sx={{
            position: "absolute",
            right: 10,
            top: 10,
            bgcolor: "white",
            p: 1,
          }}
        >
          <EditIcon
            sx={{ fontSize: { xs: 14, md: 20 }, color: Blues["A100"] }}
          />
        </IconButton>
        <UpdateBannerModal
          isOpen={open}
          handleClose={handleClose}
          url={imageUrl}
          handleUpdateImage={handleUpdateImage}
          handleModalSubmit={() => {}}
        />
      </Box>
      <Box display="flex" sx={{ bgcolor: neutral["A500"] }}>
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            cursor: "pointer",
            bottom: { xs: 60, md: 100 },
            left: { xs: 10, md: 20 },
            "&:hover": {
              filter: "brightness(0.7)",
              "& .MuiSvgIcon-root ": {
                visibility: "visible",
              },
            },
          }}
        >
          <Avatar
            alt="profile-photo"
            sx={{
              width: { xs: 100, md: 150 },
              height: { xs: 100, md: 150 },
              cursor: "pointer",
            }}
            src={MALE_AVATAR}
          />
          <IconButton
            component="span"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <AddAPhotoIcon
              sx={{
                visibility: "hidden",
                color: neutral["700"],
              }}
            />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default HeadSection;
