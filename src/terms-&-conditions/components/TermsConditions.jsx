import React from "react";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { LOGO } from "@/src/accounts/utils/constants";
import { Blues, neutral } from "@/src/common/config/colors";
import { terms } from "../utils/helper";
import { FRONTEND_HOME_PAGE_URL } from "@/src/common/utils/constants";

const TermsConditions = () => {
  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography
          variant="h1"
          sx={{
            color: neutral["800"],
            fontWeight: 600,
            fontSize: { xs: 28, lg: 32 },
          }}
        >
          <Typography
            variant="h1"
            component="span"
            sx={{
              color: Blues["A100"],
              fontWeight: 600,
              fontSize: { xs: 28, lg: 32 },
            }}
          >
            Terms{" "}
          </Typography>
          & Conditions
        </Typography>
        <Box display="flex">
          <Link href={FRONTEND_HOME_PAGE_URL}>
            <Image src={LOGO} alt="logo" width={55} height={55} priority />
          </Link>
        </Box>
      </Box>
      <Typography
        variant="h1"
        my={6}
        sx={{
          color: neutral["600"],
          fontWeight: 400,
          fontSize: { xs: 14, lg: 16 },
          fontStyle: "italic",
        }}
      >
        Welcome to our LGBTQ+ social media site, a safe space for connecting,
        sharing, and supporting each other. Create a profile, connect with
        others, share posts and media, and create events. Our diverse and
        inclusive community values respect, kindness, and authenticity, and we
        expect all members to treat each other with dignity and compassion.Which
        is why we expect everyone to follow the following terms and conditions
      </Typography>
      <Box display="flex" flexDirection="column" rowGap={6} my={3}>
        {terms.map(({ title, data }, index) => (
          <Box
            display="flex"
            flexDirection="column"
            px={3}
            rowGap={1}
            key={index}
          >
            <Typography
              variant="h2"
              sx={{
                color: neutral["800"],
                fontWeight: 500,
                fontSize: { xs: 18, lg: 20 },
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: neutral["600"],
                fontWeight: 400,
                fontSize: { xs: 14, lg: 16 },
                px: 2,
              }}
            >
              {data}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default TermsConditions;
