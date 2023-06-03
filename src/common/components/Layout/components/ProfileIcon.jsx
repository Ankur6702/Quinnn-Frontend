import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import PostAddIcon from "@mui/icons-material/PostAdd";
import CommentIcon from "@mui/icons-material/Comment";
import EventIcon from "@mui/icons-material/Event";
import useAuth from "@/src/common/context/useAuth";

import { neutral } from "@/src/common/config/colors";
import authService from "@/src/common/service/config/AuthService";
import useUserContext from "@/src/profile/context/useUserContext";
import { FRONTEND_LOGIN_PAGE_URL } from "@/src/common/utils/constants";
import { FEMALE_AVATAR, MALE_AVATAR } from "@/src/profile/utils/constants";

const ProfileIcon = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const { user } = useUserContext();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    authService.removeToken();
    setIsAuthenticated(false);
    setAnchorEl(null);
    router.push(FRONTEND_LOGIN_PAGE_URL);
    enqueueSnackbar(`Successfully signed out`, {
      variant: "info",
      autoHideDuration: 1000,
      anchorOrigin: { horizontal: "right", vertical: "top" },
    });
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
                // border: 0.5,
              }}
              src={
                user?.profileImageURL === null || user?.profileImageURL === ""
                  ? user?.gender === "Female" || user?.gender === "Lesbian"
                    ? FEMALE_AVATAR
                    : MALE_AVATAR
                  : user?.profileImageURL
              }
            />
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
              <Avatar
                fontSize="small"
                src={
                  user?.profileImageURL === null || user?.profileImageURL === ""
                    ? user?.gender === "Female" || user?.gender === "Lesbian"
                      ? FEMALE_AVATAR
                      : MALE_AVATAR
                    : user?.profileImageURL
                }
              />
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
                {user?.name}
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
        <Link href={"/settings"}>
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
            {/* <MenuItem>
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
          </MenuItem> */}
          </Box>
        </Link>
        <Divider sx={{ opacity: 0.75, mx: 2 }} />
        <Box py={1}>
          <Link href="/blogs">
            <MenuItem>
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
                Blogs
              </Typography>
            </MenuItem>
          </Link>
          <Link href="events">
            <MenuItem>
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
          </Link>
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
