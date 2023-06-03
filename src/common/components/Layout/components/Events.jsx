import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";

import GenericResponseHandler from "@/src/common/components/skeletons/GenericResponseHandler";
import GenericListSkeleton from "@/src/common/components/skeletons/GenericListSkeleton";
import useAsync from "@/src/common/components/custom-hooks/useAsync";
import EventsService from "@/src/events/services/EventsService";
import {
  formatTime,
  sliceString,
  getDateAndMonth,
} from "@/src/common/utils/utils";
import { neutral, Blues } from "@/src/common/config/colors";

const eventsService = new EventsService();
const Events = () => {
  const router = useRouter();
  const { data: upcomingEvents, run, status, error, setData } = useAsync();
  const events = [
    { date: 20, month: "Dec", name: "Product Catchup", time: "16:00 Hrs" },
    { date: 12, month: "Sep", name: "Vision Based...", time: "05:00 Hrs" },
    { date: 28, month: "Mar", name: "Dummy Event...", time: "18:00 Hrs" },
    { date: 6, month: "Feb", name: "Launching Event", time: "22:00 Hrs" },
  ];
  useEffect(() => {
    const fetchEvents = async () => {
      run(eventsService.fetchUpcomingEvents()).catch((error) =>
        console.error(error)
      );
    };
    fetchEvents();
  }, [run]);
  console.log(upcomingEvents);
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
        <IconButton
          aria-label="notifications"
          size="medium"
          onClick={() => {
            router.push("/events#upcomingEvents");
          }}
        >
          <LaunchRoundedIcon sx={{ color: Blues["A100"], fontSize: 16 }} />
        </IconButton>
      </Box>
      <GenericResponseHandler
        status={status}
        error={error}
        skeleton={
          <GenericListSkeleton
            items={3}
            gridProps={{
              display: "flex",
              flexDirection: "column",
              rowGap: 3,
              pl: 1,
              pr: 4,
              my: 3,
            }}
            gridItemProps={{
              xl: 12,
            }}
            boxProps={{
              p: 0,
              // width: 350,
              height: 53,
            }}
          />
        }
      >
        <Box
          display="flex"
          flexDirection="column"
          rowGap={3}
          pl={1}
          pr={4}
          my={3}
        >
          {upcomingEvents?.events?.map((event, index) => (
            <Link key={index} href={`/events/${event?._id}`}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box display="flex" columnGap={4} alignItems="center">
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    sx={{
                      bgcolor: neutral["A700"],
                      py: 2,
                      px: 3,
                      borderRadius: 2,
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        color: neutral["900"],
                        fontWeight: 500,
                        fontSize: { xs: 16, lg: 18 },
                      }}
                    >
                      {getDateAndMonth(event?.startDate).dayOfMonth}
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        color: neutral["700"],
                        fontWeight: 400,
                        fontSize: 12,
                      }}
                    >
                      {getDateAndMonth(event?.startDate).month}
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
                      {sliceString(event?.title, 15)}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: neutral["700"],
                        fontWeight: 400,
                        fontSize: 12,
                      }}
                    >
                      {formatTime(event?.startTime)}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Link>
          ))}
        </Box>
      </GenericResponseHandler>
    </Box>
  );
};

export default Events;
