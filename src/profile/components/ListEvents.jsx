import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { useMediaQuery, useTheme } from "@mui/material";

import GenericResponseHandler from "@/src/common/components/skeletons/GenericResponseHandler";
import useAsync from "@/src/common/components/custom-hooks/useAsync";
import useUserContext from "../context/useUserContext";
import PostItem from "@/src/home/components/Posts/PostItem";
import ProfileService from "../service/ProfileService";
import PostSkeleton from "@/src/common/components/skeletons/PostSkeleton";
import EventCard from "@/src/events/common/EventCard";
import EventCardSmall from "@/src/events/common/EventCardSmall";

const profileService = new ProfileService();
const ListEvents = () => {
  const { data: myEvents, run, status, error, setData } = useAsync();
  const { user } = useUserContext();
  const theme = useTheme();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const fetchEvents = async () => {
      run(profileService.fetchUserEvents())
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.error(error));
    };
    fetchEvents();
  }, [run]);

  return (
    <GenericResponseHandler
      status={status}
      error={error}
      skeleton={
        <PostSkeleton
          items={2}
          gridProps={{ sx: { my: 4, rowGap: 4 } }}
          gridItemProps={{
            sx: {
              borderRadius: 2,
            },
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
