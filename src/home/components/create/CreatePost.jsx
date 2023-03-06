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

import CreatePostModal from "@/src/common/components/modals/CreatePost/CreatePostModal";
import { neutral } from "@/src/common/config/colors";

const CreatePost = () => {
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
      boxSizing="border-box"
      p={4}
      sx={{
        maxWidth: 630,
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
            {`What's on your mind?`}
          </Typography>
        </Box>
        <CreatePostModal
          isOpen={open}
          handleClose={handleClose}
          handleModalSubmit={() => {}}
        />
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" columnGap={2} alignItems="center">
          <Tooltip title="Add a Image">
            <IconButton size="small" onClick={handleClick}>
              <AddPhotoAlternateIcon
                sx={{ color: neutral["700"], fontSize: 22 }}
              />
            </IconButton>
          </Tooltip>
          {/* <Tooltip title="Add a Video">
            <IconButton size="small">
              <VideocamRoundedIcon
                sx={{ color: neutral["700"], fontSize: 20 }}
              />
            </IconButton>
          </Tooltip> */}

          <Tooltip title="Add a event">
            <IconButton size="small">
              <EventRoundedIcon sx={{ color: neutral["700"], fontSize: 20 }} />
            </IconButton>
          </Tooltip>
        </Box>
        <Button
          variant="outlined"
          disabled
          sx={{ textTransform: "none", px: 3, py: 0.5, cursor: "pointer" }}
        >
          Post
        </Button>
      </Box>
    </Box>
  );
};

export default CreatePost;
