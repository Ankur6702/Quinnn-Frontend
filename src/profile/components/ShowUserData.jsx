import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { neutral } from "@/src/common/config/colors";
import UserStats from "./UserStats";

const ShowUserData = () => {
  return (
    <Box display="flex" flexDirection="column" rowGap={1} my={4}>
      <Typography
        variant="h4"
        sx={{
          color: neutral["A100"],
          opacity: 0.8,
          fontWeight: 600,
          fontSize: { xs: 16, lg: 20 },
        }}
      >
        Harry Potter
      </Typography>
      <Typography
        variant="h4"
        sx={{
          color: neutral["700"],
          opacity: 0.8,
          fontWeight: 500,
          fontSize: { xs: 14, lg: 16 },
        }}
      >
        @LoneWolf
      </Typography>
      <Box display="flex" flexDirection="column" my={2}>
        <Typography
          variant="h5"
          sx={{
            width: { xs: "100%", md: "90%" },
            color: neutral["700"],
            fontWeight: 400,
            fontSize: { xs: 14, lg: 16 },
          }}
        >
          World traveler and amateur photographer. Lover of all things coffee
          and adventure. Currently trying to learn a new language and perfect my
          baking skills.
        </Typography>
      </Box>
      <Box display="flex" my={1}>
        <Box px={2} py={1} bgcolor={neutral["A400"]} sx={{ borderRadius: 1.5 }}>
          <Typography
            variant="h5"
            sx={{
              width: "90%",
              color: neutral["700"],
              fontWeight: 400,
              fontSize: { xs: 14, lg: 16 },
            }}
          >
            Male
          </Typography>
        </Box>
      </Box>
      <Box display="flex" columnGap={4} alignItems="center">
        <Box display="flex" columnGap={1} alignItems="center">
          <LocationOnIcon sx={{ fontSize: 20, color: neutral["A200"] }} />
          <Typography
            variant="h6"
            sx={{
              color: neutral["800"],
              opacity: 0.5,
              fontWeight: 500,
              fontSize: { xs: 14, lg: 16 },
            }}
          >
            India
          </Typography>
        </Box>
        <Typography
          variant="h6"
          sx={{
            color: neutral["800"],
            fontWeight: 400,
            fontSize: { xs: 14, lg: 16 },
          }}
        >
          .
        </Typography>
        <Box display="flex" columnGap={1} alignItems="center">
          <DateRangeIcon sx={{ fontSize: 20, color: neutral["A200"] }} />
          <Typography
            variant="h6"
            sx={{
              color: neutral["800"],
              opacity: 0.5,
              fontWeight: 500,
              fontSize: { xs: 14, lg: 16 },
            }}
          >
            12 April 2021
          </Typography>
        </Box>
      </Box>
      <Box display="flex" columnGap={4} alignItems="center" my={1} width="100%">
        <UserStats />
      </Box>
    </Box>
  );
};

export default ShowUserData;
