import React from "react";
import Box from "@mui/material/Box";
import { useMediaQuery, useTheme } from "@mui/material";

import HeadSection from "./HeadSection";
import Friends from "./Friends";

const ProfileSection = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery("(min-width:1350px)");

  return (
    <Box
      display="flex"
      justifyContent={{ xs: "center", lg: "space-between" }}
      columnGap={8}
      sx={{
        maxWidth: 1130,
        width: "100%",
        position: "relative",
      }}
    >
      <HeadSection />
      {isLargeScreen && (
        <Box display="flex" width="100%" maxWidth={320}>
          <Box width="100%">
            <Friends />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ProfileSection;
