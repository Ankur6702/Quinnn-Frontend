import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EventIcon from "@mui/icons-material/Event";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import CardMedia from "@mui/material/CardMedia";

import useUserContext from "@/src/profile/context/useUserContext";
import { formatDate, sliceString } from "@/src/common/utils/utils";
import { Blues, neutral } from "@/src/common/config/colors";
import { LOGO } from "@/src/accounts/utils/constants";
import { BANNER_IMAGE } from "@/src/profile/utils/constants";

const EventCardSmall = ({ event }) => {
  const { user } = useUserContext();
  return (
    <Box
      maxWidth="100%"
      bgcolor={neutral["A500"]}
      sx={{
        borderRadius: 2,
        border: "1px solid rgba(0, 0, 0, 0.08)",
        borderTop: "none",
        width: "100%",
        height: 150,
      }}
      display="flex"
      columnGap={2}
    >
      <Box>
        <Link href={`/events/${event?._id}`}>
          <CardMedia
            component="img"
            image={event?.imageURL}
            alt="Preview"
            sx={{
              width: 250,
              height: "100%",
              borderBottomLeftRadius: "8px",
              borderTopLeftRadius: "8px",
            }}
          />
        </Link>
      </Box>
      <Box
        px={4}
        py={2}
        width="100%"
        display="flex"
        flexDirection="column"
        rowGap={2}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Link href={`/events/${event?._id}`} style={{ width: "100%" }}>
            <Typography
              variant="h6"
              sx={{
                color: neutral["A100"],
                fontWeight: 600,
                fontSize: { xs: 14, lg: 16 },
              }}
            >
              {sliceString(event?.title, 60)}
            </Typography>
          </Link>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" columnGap={6} alignItems="center">
            <Box display="flex" columnGap={1} alignItems="center">
              <EventIcon sx={{ color: Blues["A100"], fontSize: "18px" }} />
              <Typography
                variant="h6"
                sx={{
                  color: neutral["600"],
                  fontWeight: 600,
                  fontSize: { xs: 12, lg: 14 },
                }}
              >
                {formatDate(event?.startDate)}
              </Typography>
            </Box>
            <Box display="flex" columnGap={1} alignItems="center">
              <AccessAlarmIcon
                sx={{ color: Blues["A100"], fontSize: "18px" }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: neutral["600"],
                  fontWeight: 600,
                  fontSize: { xs: 12, lg: 14 },
                }}
              >
                6:30 PM(IST)
              </Typography>
            </Box>
          </Box>
          <Box display="flex" columnGap={1} alignItems="center">
            <Box
              sx={{
                borderRadius: "50%",
                width: "10px !important",
                height: "10px !important",
                bgcolor: event?.isOnline === "Online" ? "green" : "red",
              }}
            ></Box>
            <Typography
              variant="h5"
              sx={{
                width: "90%",
                color: neutral["700"],
                fontWeight: 400,
                fontSize: { xs: 14, lg: 16 },
              }}
            >
              {event?.isOnline ? "Online" : "Offline"}
            </Typography>
          </Box>
        </Box>
        <Box display="flex" columnGap={2} alignItems="center">
          {" "}
          <Link href={`/profile/${user?.username}`}>
            <Typography
              variant="h6"
              sx={{
                color: neutral["600"],
                fontWeight: 400,
                fontSize: { xs: 12, lg: 14 },
              }}
            >
              {user?.name}
            </Typography>
          </Link>
          .
          <Typography
            variant="h6"
            sx={{
              color: neutral["600"],
              fontWeight: 400,
              fontSize: { xs: 12, lg: 14 },
            }}
          >
            {`${event?.attendees.length} attendees`}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Link href={`/events/${event?._id}`}>
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                fontSize: { xs: 16, md: 16 },
                fontWeight: 500,
                borderRadius: 2,
                width: 100,
              }}
            >
              View
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default EventCardSmall;
