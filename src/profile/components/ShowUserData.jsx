import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DateRangeIcon from "@mui/icons-material/DateRange";
import UserStats from "./UserStats";
import { neutral } from "@/src/common/config/colors";
import { formatDate } from "@/src/common/utils/utils";
import { SITE_NAME } from "@/src/common/config/seo";

const ShowUserData = ({ user }) => {
  return (
    <Box display="flex" flexDirection="column" rowGap={1} my={4} width="100%">
      <Box display="flex" justifyContent="space-between" width="100%">
        <Box display="flex" flexDirection="column" rowGap={1}>
          <Typography
            variant="h4"
            sx={{
              color: neutral["A100"],
              opacity: 0.8,
              fontWeight: 600,
              fontSize: { xs: 16, lg: 20 },
            }}
          >
            {user?.name}
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
            {`@${user?.username}`}
          </Typography>
        </Box>
        <Box display="flex" columnGap={1} alignItems="center" my={1}>
          <Box>
            <Box
              sx={{
                borderRadius: "50%",
                width: "10px !important",
                height: "10px !important",
                bgcolor: user?.isPrivate ? "red" : "green",
              }}
            ></Box>
          </Box>
          <Typography
            variant="h5"
            sx={{
              width: "90%",
              color: neutral["700"],
              fontWeight: 400,
              fontSize: { xs: 14, lg: 16 },
            }}
          >
            {user?.isPrivate ? "Private" : "Public"}
          </Typography>
        </Box>
      </Box>

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
          {user?.bio
            ? user?.bio
            : `Hey there! I'm ${user?.name}. I'm excited to connect with new people on ${SITE_NAME} and share my experiences with you all. Do follow for more updates from me soon!`}
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
            {user?.gender}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" columnGap={4} alignItems="center">
        {user?.country && (
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
              {user?.country}
            </Typography>
          </Box>
        )}
        {user?.country && user?.dob && (
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
        )}
        {user?.dob && (
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
              {formatDate(user?.dob)}
            </Typography>
          </Box>
        )}
      </Box>
      <Box display="flex" columnGap={4} alignItems="center" my={1} width="100%">
        <UserStats user={user} />
      </Box>
    </Box>
  );
};

export default ShowUserData;
