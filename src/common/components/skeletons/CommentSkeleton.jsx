import React from "react";
import Box from "@mui/material/Box";

import GenericListSkeleton from "./GenericListSkeleton";
const CommentSkeleton = ({ items = 2 }) => {
  return (
    <>
      {[...Array(items)].map((_, idx) => (
        <Box display="flex" columnGap={2} pr={1} pl={8} py={1} key={idx}>
          <GenericListSkeleton
            items={1}
            variant="circular"
            gridProps={{ sx: { width: "auto" } }}
            boxProps={{
              p: 0,
              width: 24,
              height: 24,
            }}
          />
          <Box
            display="flex"
            flexDirection="column"
            rowGap={1}
            width={{ xs: "85%", md: "90%" }}
          >
            <Box display="flex" columnGap={1}>
              <GenericListSkeleton
                items={1}
                gridProps={{
                  display: "flex",
                  flexDirection: "row",
                }}
                gridItemProps={{
                  xs: 12,
                }}
                boxProps={{
                  p: 0,
                  width: { xs: 100, lg: 120 },
                  height: { xs: 14, lg: 15 },
                }}
              />
            </Box>
            <Box>
              <GenericListSkeleton
                items={1}
                gridProps={{
                  display: "flex",
                  flexDirection: "row",
                }}
                gridItemProps={{
                  xs: 12,
                }}
                boxProps={{
                  p: 0,
                  width: "100%",
                  height: { xs: 70, lg: 80 },
                }}
              />
            </Box>
            <Box my={0.5}>
              <GenericListSkeleton
                items={1}
                gridProps={{
                  display: "flex",
                  flexDirection: "row",
                }}
                gridItemProps={{
                  xs: 12,
                }}
                boxProps={{
                  p: 0,
                  width: { xs: 50, lg: 60 },
                  height: { xs: 19, lg: 20 },
                }}
              />
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};
export default CommentSkeleton;
