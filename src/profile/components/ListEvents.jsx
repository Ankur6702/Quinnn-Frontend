import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { useMediaQuery, useTheme } from "@mui/material";

import GenericResponseHandler from "@/src/common/components/skeletons/GenericResponseHandler";
import useAsync from "@/src/common/components/custom-hooks/useAsync";
import ProfileService from "../service/ProfileService";
import EventCard from "@/src/events/common/EventCard";
import EventCardSmall from "@/src/events/common/EventCardSmall";
import GenericListSkeleton from "@/src/common/components/skeletons/GenericListSkeleton";

const profileService = new ProfileService();
const ListEvents = () => {
  const { data: myEvents, run, status, error, setData } = useAsync();
  const theme = useTheme();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const fetchEvents = async () => {
      run(profileService.fetchUserEvents())
        .then((response) => {})
        .catch((error) => console.error(error));
    };
    fetchEvents();
  }, [run]);

  return (
    <GenericResponseHandler
      status={status}
      error={error}
      skeleton={
        <GenericListSkeleton
          items={2}
          gridProps={{
            display: "flex",
            flexDirection: "row",
            rowGap: 3,
            my: 4,
          }}
          gridItemProps={{
            xs: 12,
          }}
          boxProps={{
            p: 0,
            width: "100%",
            height: { xs: 100, lg: 149 },
          }}
        />
      }
    >
      <Box
        display="flex"
        flexDirection="column"
        rowGap={4}
        my={4}
        alignItems={{ xs: "center", md: "flex-start" }}
      >
        {myEvents?.events.map((event, index) =>
          isDownMd ? (
            <EventCard key={index} event={event} />
          ) : (
            <EventCardSmall key={index} event={event} />
          )
        )}
      </Box>
    </GenericResponseHandler>
  );
};

export default ListEvents;
