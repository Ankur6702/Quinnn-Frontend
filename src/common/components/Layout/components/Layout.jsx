import React, { useEffect } from "react";
import { useRouter } from "next/router";

import Box from "@mui/material/Box";
import Navigation from "./Navigation";

import { neutral } from "@/src/common/config/colors";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <Box>
      <Navigation />
      <Box
        display="flex"
        flexDirection="column"
        flexGrow={1}
        minHeight={{ xs: `calc(100vh - 56px)`, md: `calc(100vh - 64px)` }}
        boxSizing="border-box"
        alignItems="flex-start"
        width={{ xs: "100%", lg: `calc(100% - ${250}px)` }}
        ml={{ xs: 0, lg: `${250}px` }}
        mt={{ xs: 8, lg: 16 }}
        bgcolor={neutral["A700"]}
        pl={{ xs: 6, lg: 16 }}
        pr={{ xs: 6, lg: 16 }}
        py={{ xs: 12, lg: 6 }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
