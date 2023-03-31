import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PublicOffIcon from "@mui/icons-material/PublicOff";
import PublicIcon from "@mui/icons-material/Public";

import { Blues, neutral, Green } from "../../../config/colors";

const Viewership = ({ handleStatusChange, anchorEl, handleMenuClose }) => {
  const open = Boolean(anchorEl);

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleMenuClose}
      onClick={handleMenuClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          width: 200,
          py: 2,
          borderRadius: 3,
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
          mt: 1.5,
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            left: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "left", vertical: "top" }}
      anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
    >
      <Typography
        variant="h6"
        sx={{
          color: neutral["600"],
          fontWeight: 600,
          mb: 1,
          px: 4,
          fontSize: { xs: 12, lg: 16 },
        }}
      >
        Choose audience
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <MenuItem
        onClick={() => handleStatusChange("Anyone")}
        sx={{
          display: "flex",
          columnGap: 1,
          alignItems: "center",
        }}
      >
        <PublicIcon sx={{ fontSize: 20, color: neutral["A200"] }} />

        <Typography
          variant="h6"
          sx={{
            color: Blues["A100"],
            fontWeight: 400,
            fontSize: { xs: 12, lg: 14 },
          }}
        >
          Anyone
        </Typography>
      </MenuItem>
      <MenuItem
        onClick={() => handleStatusChange("Connection's only")}
        sx={{
          display: "flex",
          columnGap: 1,
          alignItems: "center",
        }}
      >
        <PublicOffIcon sx={{ fontSize: 20, color: neutral["A200"] }} />

        <Typography
          variant="h6"
          sx={{
            color: Green["A100"],
            fontWeight: 400,
            fontSize: { xs: 12, lg: 14 },
          }}
        >
          {`Connection's only`}
        </Typography>
      </MenuItem>
    </Menu>
  );
};

export default Viewership;
