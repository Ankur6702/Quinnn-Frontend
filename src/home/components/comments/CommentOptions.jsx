import React from "react";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ReportIcon from "@mui/icons-material/Report";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import useUserContext from "@/src/profile/context/useUserContext";
import { Blues, neutral } from "@/src/common/config/colors";

const CommentOptions = ({ userId, handleDeleteComment }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { user } = useUserContext();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <IconButton
          onClick={handleClick}
          sx={{ p: 1 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <MoreVertIcon fontSize="small" />
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="post-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            width: 120,
            borderRadius: 1.5,
            filter: "drop-shadow(0px 2px 10px rgba(0,0,0,0.1))",
            mt: 1.5,
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 16,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {user?._id === userId && (
          <MenuItem
            // onClick={handleDeleteComment}
            sx={{
              color: neutral["900"],
              "&:hover": {
                color: Blues["A100"],
              },
            }}
          >
            <ListItemIcon>
              <DeleteIcon fontSize="small" />
            </ListItemIcon>
            <Typography
              variant="h6"
              sx={{
                color: "inherit",
                fontWeight: 400,
                fontSize: { xs: 14, lg: 16 },
              }}
            >
              Delete
            </Typography>
          </MenuItem>
        )}
        <MenuItem
          sx={{
            color: neutral["900"],
            "&:hover": {
              color: Blues["A100"],
            },
          }}
        >
          <ListItemIcon>
            <ReportIcon fontSize="small" />
          </ListItemIcon>
          <Typography
            variant="h6"
            sx={{
              color: "inherit",
              fontWeight: 400,
              fontSize: { xs: 14, lg: 16 },
            }}
          >
            Report
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default CommentOptions;
