import React from "react";
import Box from "@mui/material/Box";

import HeadSection from "./HeadSection";

const ProfileSection = () => {
  return (
    <Box
      display="flex"
      justifyContent={{ xs: "center", lg: "space-between" }}
      columnGap={12}
      sx={{
        maxWidth: 1200,
        width: "100%",
        position: "relative",
      }}
    >
      <HeadSection />
    </Box>
  );
};

export default ProfileSection;
