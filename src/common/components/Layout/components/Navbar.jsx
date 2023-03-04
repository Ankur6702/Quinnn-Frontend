import React from "react";
import { useRouter } from "next/router";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import EventIcon from "@mui/icons-material/Event";
import IconButton from "@mui/material/IconButton";
import ChatIcon from "@mui/icons-material/Chat";
import FeedSharpIcon from "@mui/icons-material/FeedSharp";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

import { neutral } from "@/src/common/config/colors";

const Navbar = () => {
  const router = useRouter();
  const activeTab = [
    {
      id: "home",
      name: "Home",
      Icon: <HomeIcon sx={{ color: neutral["900"], fontSize: 22 }} />,
    },
    {
      id: "community",
      name: "Community",
      Icon: <GroupsIcon sx={{ color: neutral["900"], fontSize: 24 }} />,
    },
    {
      id: "events",
      name: "Events",
      Icon: <EventIcon sx={{ color: neutral["900"], fontSize: 22 }} />,
    },
    {
      id: "feed",
      name: "Feed",
      Icon: <ChatIcon sx={{ color: neutral["900"], fontSize: 22 }} />,
    },
    {
      id: "resources",
      name: "Resources",
      Icon: <FeedSharpIcon sx={{ color: neutral["900"], fontSize: 22 }} />,
    },
  ];

  const currTab = activeTab.filter((e) => {
    return router.pathname.startsWith(`/${e.id}`);
  });

  return (
    <Box display="flex" justifyContent="space-between" width="100%">
      <Box display="flex" columnGap={2} alignItems="center">
        {currTab[0]?.Icon}
        <Typography
          variant="h4"
          component="span"
          sx={{
            color: neutral["900"],
            fontWeight: 500,
            fontSize: { xs: 24, lg: 16 },
          }}
        >
          {currTab[0]?.name}
        </Typography>
      </Box>
      <Box display="flex" columnGap={4} alignItems="center">
        <IconButton aria-label="notifications" size="medium">
          <NotificationsRoundedIcon
            sx={{ color: neutral["900"], fontSize: 24 }}
          />
        </IconButton>
        <Box display="flex" columnGap={2} alignItems="center">
          <Typography
            variant="h6"
            sx={{
              color: neutral["900"],
              fontWeight: 500,
              fontSize: { xs: 24, lg: 16 },
            }}
          >
            Rajat
          </Typography>
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
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
