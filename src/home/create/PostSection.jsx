import React from "react";
import Box from "@mui/material/Box";
import { useMediaQuery, useTheme } from "@mui/material";

import { neutral } from "@/src/common/config/colors";
import CreatePost from "./CreatePost";
import Followers from "./Followers";

const PostSection = () => {
  const theme = useTheme();
  const isDownXl = useMediaQuery(theme.breakpoints.down("xl"));

  return (
    <>
      <Box sx={{ maxWidth: 600, width: "100%" }}>
        <CreatePost />
      </Box>

      {!isDownXl && (
        <Box sx={{ maxWidth: 320, width: "100%" }}>
          <Box
            display="flex"
            flexDirection="column"
            sx={{ maxWidth: 320, width: "100%", bgcolor: neutral["A500"] }}
          >
            <Followers />
          </Box>
        </Box>
      )}
    </>
  );
};

export default PostSection;
