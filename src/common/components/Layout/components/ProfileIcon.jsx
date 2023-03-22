import React from "react";
import Link from "next/link";
import { useSnackbar } from "notistack";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import PostAddIcon from "@mui/icons-material/PostAdd";
import CommentIcon from "@mui/icons-material/Comment";
import EventIcon from "@mui/icons-material/Event";

import { neutral } from "@/src/common/config/colors";

const ProfileIcon = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // authService.removeToken();
    // setAnchorEl(null);
    // navigate("/signin");
    // enqueueSnackbar(`Successfully signed out`, {
    //   variant: "info",
    //   autoHideDuration: 1000,
    //   anchorOrigin: { horizontal: "right", vertical: "top" },
    // });
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            sx={{ p: 1 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              alt="profile"
              sx={{
                width: 35,
                height: 35,
                fontSize: 20,
                cursor: "pointer",
                position: "relative",
              }}
            >
              R
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            width: 230,
            py: 2,
            borderRadius: 1.5,
            filter: "drop-shadow(0px 2px 10px rgba(0,0,0,0.32))",
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
        <Link href={"/profile"}>
          <MenuItem
            sx={{ display: "flex", columnGap: 2, alignItems: "center" }}
          >
            <ListItemIcon>
              <Avatar fontSize="small" />
            </ListItemIcon>
            <Box display="flex" flexDirection="column" rowGap={0.5}>
              <Typography
                variant="h5"
                sx={{
                  color: neutral["900"],
                  fontWeight: 500,
                  fontSize: { xs: 14, lg: 16 },
                }}
              >
                Rajat Singh
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: neutral["700"],
                  fontWeight: 400,
                  fontSize: { xs: 10, lg: 12 },
                }}
              >
                View my Profile
              </Typography>
            </Box>
          </MenuItem>
        </Link>
        <Divider sx={{ opacity: 0.75, mx: 2 }} />
        <Box py={1}>
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            <Typography
              variant="h6"
              sx={{
                color: neutral["900"],
                fontWeight: 400,
                fontSize: { xs: 14, lg: 16 },
              }}
            >
              Account Settings
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <PostAddIcon fontSize="small" />
            </ListItemIcon>
            <Typography
              variant="h6"
              sx={{
                color: neutral["900"],
                fontWeight: 400,
                fontSize: { xs: 14, lg: 16 },
              }}
            >
              Activity Logs
            </Typography>
          </MenuItem>
        </Box>
        <Divider sx={{ opacity: 0.75, mx: 2 }} />
        <Box py={1}>
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <CommentIcon fontSize="small" />
            </ListItemIcon>
            <Typography
              variant="h6"
              sx={{
                color: neutral["900"],
                fontWeight: 400,
                fontSize: { xs: 14, lg: 16 },
              }}
            >
              Messages
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <EventIcon fontSize="small" />
            </ListItemIcon>
            <Typography
              variant="h6"
              sx={{
                color: neutral["900"],
                fontWeight: 400,
                fontSize: { xs: 14, lg: 16 },
              }}
            >
              Events
            </Typography>
          </MenuItem>
        </Box>
        <Divider sx={{ opacity: 0.75, mx: 2 }} />
        <Box py={1}>
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            <Typography
              variant="h6"
              sx={{
                color: neutral["900"],
                fontWeight: 400,
                fontSize: { xs: 14, lg: 16 },
              }}
            >
              Logout
            </Typography>
          </MenuItem>
        </Box>
      </Menu>
    </>
  );
};

export default ProfileIcon;
