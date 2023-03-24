import React from "react";
import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme } from "@mui/material";

import { SITE_NAME } from "@/src/common/config/seo";
import { EMAIL_VERIFIED } from "../utils/constants";
import { Blues, neutral } from "@/src/common/config/colors";
import { FRONTEND_HOME_PAGE_URL } from "@/src/common/utils/constants";

const AlreadyVerified = () => {
  const theme = useTheme();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        rowGap={8}
        sx={{
          p: { xs: 8, md: 8 },
          bgcolor: neutral["A500"],
          borderRadius: { xs: 2, md: 4 },
        }}
      >
        <Box>
          <Image
            src={EMAIL_VERIFIED}
            alt="email-sent"
            priority
            width={isDownMd ? 150 : 300}
            height={isDownMd ? 100 : 200}
          />
        </Box>
        <Box display="flex" flexDirection="column" rowGap={4}>
          <Typography
            variant="h2"
            sx={{
              color: neutral["700"],
              fontWeight: 600,
              fontSize: { xs: 24, lg: 32 },
              textAlign: "center",
            }}
          >
            Verified!
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: neutral["600"],
              fontWeight: 400,
              fontSize: { xs: 16, lg: 18 },
              textAlign: "center",
              width: { xs: 250, sm: "auto" },
            }}
          >
            Voila! You have successfully verified you account
          </Typography>
        </Box>
        <Link href={FRONTEND_HOME_PAGE_URL}>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              fontSize: 14,
              fontWeight: 600,
              boxShadow: "none",
            }}
          >
            Go to Home
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default AlreadyVerified;
