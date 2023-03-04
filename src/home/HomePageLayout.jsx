import React from "react";
import Box from "@mui/material/Box";

const HomePageLayout = ({ children }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      columnGap={12}
      sx={{ maxWidth: 1024, width: "100%" }}
    >
      {children}
    </Box>
  );
};

export default HomePageLayout;
