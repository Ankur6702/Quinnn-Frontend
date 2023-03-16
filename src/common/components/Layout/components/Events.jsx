import React from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";

import { neutral, Blues } from "@/src/common/config/colors";

const Events = () => {
  const events = [
    { date: 20, month: "Dec", name: "Product Catchup", time: "16:00 Hrs" },
    { date: 12, month: "Sep", name: "Vision Based...", time: "05:00 Hrs" },
    { date: 28, month: "Mar", name: "Dummy Event...", time: "18:00 Hrs" },
    { date: 6, month: "Feb", name: "Launching Event", time: "22:00 Hrs" },
  ];
  return (
    <Box my={6}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography
          variant="h4"
          component="span"
          sx={{
            color: neutral["700"],
            fontWeight: 500,
            fontSize: { xs: 14, lg: 16 },
          }}
        >
          Upcoming Events
        </Typography>
        <IconButton aria-label="notifications" size="medium">
          <LaunchRoundedIcon sx={{ color: Blues["A100"], fontSize: 16 }} />
        </IconButton>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        rowGap={3}
        pl={1}
        pr={4}
        my={3}
      >
        {events.map((event, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ cursor: "pointer" }}
          >
            <Box display="flex" columnGap={4} alignItems="center">
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{ bgcolor: neutral["A700"], py: 2, px: 3, borderRadius: 2 }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: neutral["900"],
                    fontWeight: 500,
                    fontSize: { xs: 16, lg: 18 },
                  }}
                >
                  {event?.date}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: neutral["700"],
                    fontWeight: 400,
                    fontSize: 12,
                  }}
                >
                  {event?.month}
                </Typography>
              </Box>
              <Box display="flex" flexDirection="column" rowGap={0.5}>
                <Typography
                  variant="h4"
                  sx={{
                    color: neutral["900"],
                    fontWeight: 500,
                    fontSize: 14,
                  }}
                >
                  {event?.name}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: neutral["700"],
                    fontWeight: 400,
                    fontSize: 12,
                  }}
                >
                  {event?.time}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Events;
