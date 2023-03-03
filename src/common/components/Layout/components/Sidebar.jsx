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
import ChatIcon from "@mui/icons-material/Chat";
import FeedSharpIcon from "@mui/icons-material/FeedSharp";

import { neutral } from "@/src/common/config/colors";

const drawerWidth = 250;
const Sidebar = ({ tabs }) => {
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
    <>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          bgcolor: neutral["A500"],
          boxShadow: "none",
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        }}
      >
        <Toolbar sx={{ mx: 6 }}>
          <Box display="flex" justifyContent="space-between">
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
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          whiteSpace: "nowrap",
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        open={true}
      >
        <Box sx={{ bgcolor: neutral["A500"] }}>{tabs}</Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
