/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import EventIcon from "@mui/icons-material/Event";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { useMediaQuery, useTheme } from "@mui/material";

import { BANNER_IMAGE } from "@/src/profile/utils/constants";
import { EVENTS_IMAGE } from "../../utils/constants";
import { Blues, neutral } from "@/src/common/config/colors";

const EventDetails = () => {
  return (
    <Box display="flex" flexDirection="column" rowGap={6}>
      <Box
        sx={{
          maxWidth: 800,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          rowGap: 2,
          bgcolor: neutral["A500"],
          borderRadius: 3,
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;",
          pb: 6,
        }}
      >
        <Box height={400} width={800}>
          <img
            src={EVENTS_IMAGE}
            alt="My Image"
            width="100%"
            height={400}
            style={{
              borderTopRightRadius: "12px",
              borderTopLeftRadius: "12px",
            }}
          />
        </Box>
        <Box
          sx={{ my: 4, px: 6 }}
          display="flex"
          flexDirection="column"
          rowGap={2}
        >
          <Typography
            variant="h3"
            sx={{
              color: neutral["800"],
              fontWeight: 600,
              fontSize: { xs: 14, lg: 22 },
            }}
          >
            The Positive & Negative Impacts of Stress on Team Performance
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: neutral["A100"],
              fontWeight: 500,
              fontSize: { xs: 14, lg: 16 },
            }}
          >
            Event by Jay Unwin
          </Typography>
          <Box display="flex" columnGap={6} alignItems="center">
            <Box display="flex" columnGap={1} alignItems="center">
              <EventIcon sx={{ color: neutral["600"], fontSize: "18px" }} />
              <Typography
                variant="h6"
                sx={{
                  color: neutral["600"],
                  fontWeight: 400,
                  fontSize: { xs: 12, lg: 14 },
                }}
              >
                Fri, Apr 7, 2023, 9:30 PM - 10:30 PM
              </Typography>
            </Box>
          </Box>
          {false ? (
            <Box display="flex" justifyContent="space-between">
              <Typography
                variant="h6"
                sx={{
                  color: neutral["600"],
                  fontWeight: 400,
                  fontSize: { xs: 12, lg: 14 },
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{
                    color: neutral["800"],
                    fontWeight: 500,
                    fontSize: { xs: 12, lg: 14 },
                  }}
                >
                  Address:{" "}
                </Typography>
                123 Main St Newark, NJ 07102 United States
              </Typography>
              <Box display="flex" columnGap={1} alignItems="center">
                <Box>
                  <Box
                    sx={{
                      borderRadius: "50%",
                      width: "10px !important",
                      height: "10px !important",
                      bgcolor: "red",
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
                  Offline
                </Typography>
              </Box>
            </Box>
          ) : (
            <Box display="flex" columnGap={1} alignItems="center">
              <Box>
                <Box
                  sx={{
                    borderRadius: "50%",
                    width: "10px !important",
                    height: "10px !important",
                    bgcolor: "green",
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
                Offline
              </Typography>
            </Box>
          )}
          <Typography
            variant="h6"
            sx={{
              color: neutral["600"],
              fontWeight: 500,
              fontSize: { xs: 12, lg: 14 },
            }}
          >
            {`23 attendees`}
          </Typography>
        </Box>
        <Box display="flex" columnGap={4} px={6}>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              fontSize: { xs: 16, md: 16 },
              fontWeight: 500,
              borderRadius: 2,
              boxShadow: "none",
            }}
          >
            Attend
          </Button>
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              fontSize: { xs: 16, md: 16 },
              fontWeight: 500,
              borderRadius: 2,
            }}
          >
            Share
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: 800,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          rowGap: 2,
          bgcolor: neutral["A500"],
          borderRadius: 3,
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;",
          pb: 6,
        }}
      >
        <Box
          sx={{ my: 4, px: 6 }}
          display="flex"
          flexDirection="column"
          rowGap={2}
        >
          <Typography
            variant="h3"
            sx={{
              color: neutral["800"],
              fontWeight: 600,
              fontSize: { xs: 14, lg: 22 },
            }}
          >
            About
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: neutral["600"],
              fontWeight: 400,
              fontSize: { xs: 14, lg: 16 },
            }}
          >
            The world of TEDx and Paid Speaking can be quite a mystery for many
            people. One thing that is not a mystery is that ALL sought-after
            experts, industry leaders and those that impact SPEAK. Join me and
            the fabulous moderators @Dawn J. Fraser, @Pablo Murillo, @Dara
            Connolly, @Bilyana Georgieva, @🧞‍♀️Genie Snyder Chamberlin, Ed.D.,
            @Michelle Williams and @Emem Washington, JD, LL.M where this week we
            will discuss why positioning is paramount. Understanding your target
            audience, niching, messaging, speaker topics and so much more. Come
            with your questions so that we can move you forward in sharing your
            ideas, stories and messages with the world. #tedxspeaker #tedxtalk
            #keynotespeaker #paidspeaking #thoughtleadership #tedx
            #publicspeaking See less
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default EventDetails;
