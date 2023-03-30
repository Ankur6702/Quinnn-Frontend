import React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const GenericListSkeleton = ({
  items,
  gridProps,
  gridItemProps,
  boxProps,
  variant,
}) => {
  return (
    <Grid
      container
      display="flex"
      flexDirection="column"
      {...(gridProps || {})}
    >
      {[...Array(items)].map((_, idx) => (
        <Grid item xs={12} key={idx} {...(gridItemProps || {})}>
          <Box padding={1} width="100%" height="50px" {...(boxProps || {})}>
            <Skeleton
              width="100%"
              height="100%"
              component="div"
              variant={variant ? variant : "rectangular"}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default GenericListSkeleton;
