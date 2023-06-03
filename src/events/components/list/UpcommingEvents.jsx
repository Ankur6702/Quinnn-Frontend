import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useMediaQuery } from "@mui/material";

import GenericResponseHandler from "@/src/common/components/skeletons/GenericResponseHandler";
import GenericListSkeleton from "@/src/common/components/skeletons/GenericListSkeleton";
import useAsync from "@/src/common/components/custom-hooks/useAsync";
import EventCard from "../../common/EventCard";
import EventsService from "../../services/EventsService";
import { neutral } from "@/src/common/config/colors";
import { smoothScroll } from "@/src/common/utils/utils";

const eventsService = new EventsService();
const UpcommingEvents = () => {
  const { data: upcomingEvents, run, status, error, setData } = useAsync();
  const isLargeScreen = useMediaQuery("(min-width:1380px)");
  const itemWidth = isLargeScreen ? 4 : 5;
  const [viewmore, setViewMore] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const fetchEvents = async () => {
      run(eventsService.fetchUpcomingEvents()).catch((error) =>
        console.error(error)
      );
    };
    fetchEvents();
  }, [run]);

  const handledLoadAll = () => {
    setViewMore(!viewmore);
    if (viewmore) {
      smoothScroll(sectionRef.current);
    }
  };

  return (
    <Box
      my={12}
      maxWidth={1130}
      display="flex"
      flexDirection="column"
      rowGap={3}
      width="100%"
      ref={sectionRef}
    >
      <Box id="upcomingEvents">
        <Typography
          variant="h3"
          sx={{
            color: neutral["700"],
            fontWeight: 600,
            fontSize: { xs: 18, lg: 22 },
          }}
        >
          Upcomming Events
        </Typography>
      </Box>
      <GenericResponseHandler
        status={status}
        error={error}
        skeleton={
          <GenericListSkeleton
            items={3}
            gridProps={{
              flexDirection: "row",
              mt: 4,
              rowGap: 6,
              alignItems: "center",
            }}
            gridItemProps={{
              xl: itemWidth,
              sm: 6,
              xs: 12,
              display: "flex",
              justifyContent: { xs: "center", md: "start" },
            }}
            boxProps={{
              p: 0,
              width: 350,
              height: { xs: 360, md: 370 },
            }}
          />
        }
      >
        {upcomingEvents?.events?.length == 0 ? (
          <Typography
            variant="h3"
            sx={{
              color: neutral["700"],
              textAlign: "center",
              mt: 8,
              fontWeight: 400,
              fontSize: { xs: 14, lg: 18 },
            }}
          >
            Currently No Upcomming Events
          </Typography>
        ) : (
          <>
            <Grid container mt={4} rowGap={6} wrap="wrap">
              {upcomingEvents?.events
                .slice(0, viewmore ? undefined : 3)
                .map((event, index) => (
                  <Grid
                    key={index}
                    item
                    xl={itemWidth}
                    sm={6}
                    xs={12}
                    sx={{
                      display: "flex",
                      pr: { xl: 4 },
                      justifyContent: { xs: "center", md: "start" },
                      a: {
                        textDecoration: "none",
                      },
                    }}
                  >
                    <EventCard event={event} />
                  </Grid>
                ))}
            </Grid>
            {upcomingEvents?.events?.length > 3 && (
              <Box display="flex" justifyContent="center" pt={{ xs: 4, md: 8 }}>
                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    fontSize: { xs: 16, md: 16 },
                    fontWeight: 500,
                    borderRadius: 2,
                  }}
                  endIcon={viewmore ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  onClick={handledLoadAll}
                >
                  {viewmore ? "View Less" : `View all`}
                </Button>
              </Box>
            )}
          </>
        )}
      </GenericResponseHandler>
    </Box>
  );
};

export default UpcommingEvents;
