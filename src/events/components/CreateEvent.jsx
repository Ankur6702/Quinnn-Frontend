import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import IconButton from "@mui/material/IconButton";
import EventRoundedIcon from "@mui/icons-material/EventRounded";

import CreateEventModal from "@/src/common/components/modals/CreateEvent/CreateEventModal";
import useUserContext from "@/src/profile/context/useUserContext";
import { neutral } from "@/src/common/config/colors";
import { FEMALE_AVATAR, MALE_AVATAR } from "@/src/profile/utils/constants";

const CreateEvent = () => {
  const [open, setOpen] = useState(false);
  const { user } = useUserContext();

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {!open && (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          rowGap={4}
          boxSizing="border-box"
          marginX="auto"
          p={4}
          sx={{
            maxWidth: 700,
            width: "100%",
            bgcolor: neutral["A500"],
            borderRadius: 2,
            boxShadow:
              " rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
          }}
        >
          <Box display="flex" columnGap={4} alignItems="center">
            <Avatar
              alt="profile-photo"
              sx={{
                width: 30,
                height: 30,
                fontSize: 15,
                cursor: "pointer",
                position: "relative",
              }}
              src={
                user?.profileImageURL === null || user?.profileImageURL === ""
                  ? user?.gender === "Female" || user?.gender === "Lesbian"
                    ? FEMALE_AVATAR
                    : MALE_AVATAR
                  : user?.profileImageURL
              }
            />
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
              onClick={handleClick}
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
                {`Create an Event!`}
              </Typography>
            </Box>
          </Box>
          <Box display="flex" justifyContent="right">
            <Button
              variant="outlined"
              disabled
              sx={{ textTransform: "none", px: 3, py: 0.5, cursor: "pointer" }}
              margin="auto"
            >
              Add
            </Button>
          </Box>
        </Box>
      )}
      <CreateEventModal
        isOpen={open}
        handleClose={handleClose}
        handleModalSubmit={() => {}}
      />
    </>
  );
};

export default CreateEvent;
