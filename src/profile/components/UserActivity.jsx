import React, { useMemo, useState } from "react";
import Box from "@mui/material/Box";

import Navbar from "./Navbar";
import ShowActivity from "./ShowActivity";

const UserActivity = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const tabs = useMemo(() => {
    const tabsList = [
      {
        route: `/profile`,
        label: "Posts",
        onClick: () => setTabIndex(0),
      },
      {
        route: `/profile`,
        label: "Events",
        onClick: () => setTabIndex(1),
      },
      {
        route: `/profile`,
        label: "Blogs",
        onClick: () => setTabIndex(2),
      },
    ];
    return tabsList;
  }, []);

  return (
    <Box width="100%" boxSizing="border-box">
      <Navbar tabs={tabs} tabIndex={tabIndex} />
      <ShowActivity tabIndex={tabIndex} />
    </Box>
  );
};

export default UserActivity;
