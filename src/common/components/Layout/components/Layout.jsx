import React, { useEffect } from "react";
import { useRouter } from "next/router";

import Box from "@mui/material/Box";
import Navigation from "./Navigation";

import authService from "@/src/common/service/config/AuthService";
import useAuth from "@/src/common/context/useAuth";
import { neutral } from "@/src/common/config/colors";
import { FRONTEND_LOGIN_PAGE_URL } from "@/src/common/utils/constants";

const Layout = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    if (!isAuthenticated) {
      router.push(`${FRONTEND_LOGIN_PAGE_URL}?next=${router.asPath}`);
    }
  }, [isAuthenticated, router]);

  return !isAuthenticated ? (
    <></>
  ) : (
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
        mt={{ xs: 14, lg: 16 }}
        bgcolor={neutral["A700"]}
        pl={{ xs: 3, lg: 16 }}
        pr={{ xs: 3, lg: 16 }}
        py={{ xs: 6, lg: 8 }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
