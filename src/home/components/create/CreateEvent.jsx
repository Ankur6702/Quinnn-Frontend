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
import CreateEventModal from "@/src/common/components/modals/CreateEvent/CreateEventModal";
import { neutral } from "@/src/common/config/colors";

const CreateEvent = () => {
  const [open, setOpen] = useState(false);

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
          rowGap={4}
          boxSizing="border-box"
          marginX="auto"
          p={4}
          sx={{
            maxWidth: 800,
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
              sx={{ cursor: "pointer" }}
              onClick={handleClick}
            >
                <Typography
                    variant="h4"
                    sx={{ fontSize: 14, color: neutral["A100"], fontWeight: 500 }}
                >
                    Add an Event!
                </Typography>
              <IconButton size="small" onClick={handleClick} alignItems="right">
                  <EventRoundedIcon
                    sx={{ color: neutral["700"], fontSize: 22 }}
                  />
                </IconButton>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="right"
          >
            
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
