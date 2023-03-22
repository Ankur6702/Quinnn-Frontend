import React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Navbar from "./Navbar";
import { neutral } from "@/src/common/config/colors";

const drawerWidth = 250;
const Sidebar = ({ tabs }) => {
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
        <Toolbar sx={{ mx: 6, maxWidth: "xl" }}>
          <Navbar />
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
            "&::-webkit-scrollbar": {
              display: "none", // Hide the scrollbar in Chrome, Safari, and Opera
            },
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
