import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EventIcon from "@mui/icons-material/Event";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

import { formatDate, sliceString } from "@/src/common/utils/utils";
import { Blues, neutral } from "@/src/common/config/colors";
import { LOGO } from "@/src/accounts/utils/constants";
import { BANNER_IMAGE } from "@/src/profile/utils/constants";

const EventCard = ({ event }) => {
  return (
    <Box
      maxWidth={350}
      // height={370}
      bgcolor={neutral["A500"]}
      sx={{
        borderRadius: 3,
        border: "1px solid rgba(0, 0, 0, 0.08)",
        borderTop: "none",
        pb: 2,
      }}
      display="flex"
      flexDirection="column"
      rowGap={1}
    >
      <Box>
        <Link href="#">
          <Image
            src={BANNER_IMAGE}
            alt="logo"
            width={350}
            height={180}
            style={{
              borderTopRightRadius: "12px",
              borderTopLeftRadius: "12px",
            }}
          />
        </Link>
      </Box>
      <Box px={4}>
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
            <AccessAlarmIcon sx={{ color: Blues["A100"], fontSize: "18px" }} />
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
      </Box>
      <Box px={4} display="flex" columnGap={1} alignItems="center">
        <Box
          sx={{
            borderRadius: "50%",
            width: "10px !important",
            height: "10px !important",
            bgcolor: event?.venue == "Online" ? "green" : "red",
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
          {event?.venue}
        </Typography>
      </Box>
      <Box px={4} my={3}>
        <Box display="flex" flexDirection="column" rowGap={2}>
          <Link href="#">
            <Typography
              variant="h6"
              sx={{
                color: neutral["A100"],
                fontWeight: 600,
                fontSize: { xs: 14, lg: 16 },
              }}
            >
              {sliceString(event?.name, 60)}
            </Typography>
          </Link>{" "}
          <Box>
            <Box display="flex" flexDirection="column" rowGap={2}>
              <Box display="flex" justifyContent="space-between">
                <Typography
                  variant="h6"
                  sx={{
                    color: neutral["600"],
                    fontWeight: 400,
                    fontSize: { xs: 12, lg: 14 },
                  }}
                >
                  {event?.organiser}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: neutral["600"],
                    fontWeight: 400,
                    fontSize: { xs: 12, lg: 14 },
                  }}
                >
                  {`${event?.attendees} attendees`}
                </Typography>
              </Box>
              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  fontSize: { xs: 16, md: 16 },
                  fontWeight: 500,
                  borderRadius: 3,
                }}
              >
                View
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EventCard;
