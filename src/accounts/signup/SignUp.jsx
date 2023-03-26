import React from "react";
import Image from "next/image";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";

import SignUpForm from "./SignUpForm";
import { neutral, Blues } from "@/src/common/config/colors";
import { SIGN_UP_IMAGE, LOGO } from "../utils/constants";
import { SITE_NAME } from "@/src/common/config/seo";

const SignUp = () => {
  const theme = useTheme();
  const isDownLg = useMediaQuery(theme.breakpoints.down("lg"));
  const isDownSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      display="flex"
      justifyContent={{ xs: "center", lg: "space-between" }}
      alignItems="center"
      height="100%"
    >
      {!isDownLg && (
        <Box>
          <Image
            src={SIGN_UP_IMAGE}
            alt="404"
            width={550}
            height={400}
            priority
          />
        </Box>
      )}
      <Box
        display="flex"
        justifyContent={{ xs: "center", lg: "flex-end" }}
        width="100%"
      >
        <Box
          display="flex"
          flexDirection="column"
          rowGap={10}
          sx={{
            bgcolor: neutral["A500"],
            borderRadius: 3,
            width: { xs: 335, sm: 480, lg: 480 },
            py: 8,
            px: { xs: 6, sm: 8 },
          }}
        >
          <Box display="flex" flexDirection="column" rowGap={0.5}>
            {isDownSm && (
              <Box mb={2}>
                <Image src={LOGO} alt="logo" width={55} height={55} />
              </Box>
            )}
            <Typography
              variant="h2"
              component="span"
              sx={{
                color: neutral["900"],
                lineHeight: "24px",
                fontWeight: 500,
                fontSize: { xs: 24, lg: 32 },
              }}
            >
              Welcome to{" "}
              <Typography
                variant="h2"
                component="span"
                sx={{
                  color: Blues["A100"],
                  fontWeight: 600,
                  fontSize: { xs: 24, lg: 32 },
                }}
              >
                {SITE_NAME}
              </Typography>
              !
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "grey",
                px: 1,
                fontWeight: 500,
                fontSize: { xs: 12, lg: 16 },
              }}
            >
              Register your account
            </Typography>
          </Box>
          <SignUpForm />
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
