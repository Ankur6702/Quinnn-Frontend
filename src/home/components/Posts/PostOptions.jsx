import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ReportIcon from "@mui/icons-material/Report";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import PostAddIcon from "@mui/icons-material/PostAdd";
import CommentIcon from "@mui/icons-material/Comment";
import EventIcon from "@mui/icons-material/Event";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import useAuth from "@/src/common/context/useAuth";
import useUserContext from "@/src/profile/context/useUserContext";
import { Blues, neutral } from "@/src/common/config/colors";

const PostOptions = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const router = useRouter();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //   const handleLogout = () => {
  //     authService.removeToken();
  //     setIsAuthenticated(false);
  //     setAnchorEl(null);
  //     router.push(FRONTEND_LOGIN_PAGE_URL);
  //     enqueueSnackbar(`Successfully signed out`, {
  //       variant: "info",
  //       autoHideDuration: 1000,
  //       anchorOrigin: { horizontal: "right", vertical: "top" },
  //     });
  //   };

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
          <MoreVertIcon />
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
            width: 150,
            py: 2,
            borderRadius: 1.5,
            boxShadow:
              " rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 36,
              height: 36,
              ml: -0.5,
              mr: 2,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
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
        <MenuItem
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
        <MenuItem
          sx={{
            color: neutral["900"],
            "&:hover": {
              color: Blues["A100"],
            },
          }}
        >
          <ListItemIcon>
            <AddIcon fontSize="small" />
          </ListItemIcon>
          <Typography
            variant="h6"
            sx={{
              color: "inherit",
              fontWeight: 400,
              fontSize: { xs: 14, lg: 16 },
            }}
          >
            Follow
          </Typography>
        </MenuItem>
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

export default PostOptions;
