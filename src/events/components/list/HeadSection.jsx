import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { useMediaQuery, useTheme } from "@mui/material";

import CreateEventModal from "@/src/common/components/modals/CreateEvent/CreateEventModal";
import { neutral } from "@/src/common/config/colors";

const HeadSection = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        width="100%"
        alignItems="center"
        maxWidth={1130}
      >
        <Typography
          variant="h1"
          sx={{
            color: neutral["800"],
            fontWeight: 600,
            fontSize: { xs: 24, lg: 28 },
          }}
        >
          Events
        </Typography>
        <Button
          variant={isDownMd ? "text" : "contained"}
          onClick={handleClick}
          sx={{
            textTransform: "none",
            fontSize: { xs: 16, md: 16 },
            fontWeight: 500,
            borderRadius: 2,
            visibility: open ? "hidden" : "visible",
          }}
          startIcon={<AddIcon />}
        >
          Create
        </Button>
      </Box>
      <CreateEventModal
        isOpen={open}
        handleClose={handleClose}
        handleModalSubmit={() => {}}
      />
    </>
  );
};

export default HeadSection;
