import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useMediaQuery, useTheme } from "@mui/material";

import { neutral } from "@/src/common/config/colors";
import CreatePost from "./CreatePost";
import ShowPosts from "../Posts/ShowPosts";
import Followers from "./Followers";

const PostSection = () => {
  const theme = useTheme();
  const isDownXl = useMediaQuery(theme.breakpoints.down("xl"));

  return (
    <>
      <Box
        sx={{
          maxWidth: 630,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          rowGap: 2,
        }}
      >
        <CreatePost />
        <Box>
          <Divider>
            <IconButton>
              <RefreshIcon sx={{ fontSize: 24, color: neutral["A200"] }} />
            </IconButton>
          </Divider>
        </Box>
        <ShowPosts />
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
