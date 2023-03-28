import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import EditIcon from "@mui/icons-material/Edit";
import CardMedia from "@mui/material/CardMedia";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

import { BANNER_IMAGE, FEMALE_AVATAR, MALE_AVATAR } from "../utils/constants";
import { Blues, neutral } from "@/src/common/config/colors";
import UpdateBannerModal from "@/src/common/components/modals/EditProfile/UpdateBannerModal";
import UpdateAvatarModal from "@/src/common/components/modals/EditProfile/UpdateAvatarModal";
import EditProfileData from "./EditProfileData";
import ShowUserData from "./ShowUserData";
import useUserContext from "../context/useUserContext";
import UserActivity from "./UserActivity";

const HeadSection = () => {
  const { user } = useUserContext();
  const [bannerImageUrl, setBannerImageUrl] = useState(user?.coverImageURL);
  const [avatarImageUrl, setAvatarImageUrl] = useState(user?.profileImageURL);
  const [bannerOpen, setBannerOpen] = useState(false);
  const [avatarOpen, setAvatarOpen] = useState(false);

  useEffect(() => {
    setBannerImageUrl(user?.coverImageURL);
    setAvatarImageUrl(user?.profileImageURL);
  }, [user?.coverImageURL, user?.profileImageURL]);

  const handleBannerClick = () => {
    setBannerOpen(true);
  };
  const handleBannerClose = () => {
    setBannerOpen(false);
  };
  const handleAvatarClick = () => {
    setAvatarOpen(true);
  };
  const handleAvatarClose = () => {
    setAvatarOpen(false);
  };

  const handleUpdateBannerImage = (image) => {
    setBannerImageUrl(image);
  };

  const handleUpdateAvatarImage = (image) => {
    setAvatarImageUrl(image);
  };

  return (
    <Box
      sx={{
        maxWidth: 800,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        rowGap: 4,
      }}
    >
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
            name="banner-image"
            key={Date.now()}
            component="img"
            image={bannerImageUrl || BANNER_IMAGE}
            alt="baner-image"
            sx={{
              width: "100% !important",
              objectFit: { xs: "cover", md: "cover" },
              objectPosition: "center center",
            }}
          />
          <IconButton
            component="span"
            onClick={handleBannerClick}
            sx={{
              position: "absolute",
              right: 10,
              top: 10,
              bgcolor: neutral["A500"],
              p: 1,
            }}
          >
            <EditIcon
              sx={{ fontSize: { xs: 14, md: 20 }, color: Blues["A100"] }}
            />
          </IconButton>
          <UpdateBannerModal
            isOpen={bannerOpen}
            handleClose={handleBannerClose}
            url={bannerImageUrl}
            handleUpdateImage={handleUpdateBannerImage}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          px={{ xs: 2.5, md: 3 }}
          sx={{ bgcolor: neutral["A500"] }}
          height={50}
        >
          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              height: { xs: 100, md: 150 },
              cursor: "pointer",
              bottom: { xs: 60, md: 100 },
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
              src={
                avatarImageUrl === null || avatarImageUrl === ""
                  ? user?.gender === "Female" || user?.gender === "Lesbian"
                    ? FEMALE_AVATAR
                    : MALE_AVATAR
                  : avatarImageUrl
              }
            />
            <IconButton
              component="span"
              onClick={handleAvatarClick}
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
            <UpdateAvatarModal
              isOpen={avatarOpen}
              handleClose={handleAvatarClose}
              url={avatarImageUrl}
              handleUpdateImage={handleUpdateAvatarImage}
            />
          </Box>
          <Box display="flex">
            <EditProfileData />
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          px={{ xs: 2.5, md: 3 }}
          sx={{ bgcolor: neutral["A500"] }}
        >
          <ShowUserData user={user} />
        </Box>
      </Box>
      <Box>
        <UserActivity />
      </Box>
    </Box>
  );
};

export default HeadSection;
