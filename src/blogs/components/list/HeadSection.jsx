import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CreateIcon from "@mui/icons-material/Create";
import { useMediaQuery, useTheme } from "@mui/material";

import { neutral } from "@/src/common/config/colors";

const HeadSection = () => {
  const theme = useTheme();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        width="100%"
        alignItems="center"
        maxWidth={1130}
      >
        <Typography
          variant="h1"
          sx={{
            color: neutral["800"],
            fontWeight: 600,
            fontSize: { xs: 24, lg: 28 },
          }}
        >
          Blogs
        </Typography>
        <Link href="/blogs/create">
          <Button
            variant={isDownMd ? "text" : "contained"}
            sx={{
              textTransform: "none",
              fontSize: { xs: 16, md: 16 },
              fontWeight: 500,
              borderRadius: 2,
            }}
            startIcon={<CreateIcon />}
          >
            Write
          </Button>
        </Link>
      </Box>
      <Divider
        sx={{ bgcolor: neutral["900"], width: "100%", opacity: 0.2, my: 4 }}
      />
    </>
  );
};

export default HeadSection;
