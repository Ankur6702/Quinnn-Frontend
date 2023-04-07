import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useMediaQuery } from "@mui/material";

import EventCard from "../../common/EventCard";
import { events } from "../../utils/utils";
import { neutral } from "@/src/common/config/colors";
import { smoothScroll } from "@/src/common/utils/utils";

const UpcommingEvents = () => {
  const isLargeScreen = useMediaQuery("(min-width:1380px)");
  const itemWidth = isLargeScreen ? 4 : 5;
  const [viewmore, setViewMore] = useState(false);
  const sectionRef = useRef(null);

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
      <Box>
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
      <Grid container mt={4} rowGap={6} wrap="wrap">
        {events.slice(0, viewmore ? undefined : 3).map((event, index) => (
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
      {events?.length > 3 && (
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
    </Box>
  );
};

export default UpcommingEvents;
