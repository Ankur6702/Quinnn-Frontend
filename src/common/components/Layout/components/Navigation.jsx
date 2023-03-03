import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";

import TabList from "./TabList";
import Sidebar from "./Sidebar";
// import DownLgNavbar from "./DownLgNavbar";

const Navigation = () => {
  const theme = useTheme();
  const isUpLg = useMediaQuery(theme.breakpoints.up("lg"));

  // return <>{isUpLg ? <Sidebar tabs={<TabList />} /> : <DownLgNavbar />}</>;
  return <Sidebar tabs={<TabList />} />;
};

export default Navigation;
