/* eslint-disable @next/next/no-img-element */
import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

import GenericListSkeleton from "./GenericListSkeleton";

const BlogDetailSkeleton = ({ items = 2, gridProps, gridItemProps }) => {
  return (
    <Grid
      container
      display="flex"
      flexDirection="column"
      {...(gridProps || {})}
    >
      {[...Array(items)].map((_, idx) => (
        <Grid item xs={12} key={idx} {...(gridItemProps || {})}>
          <Box display="flex" flexDirection="column" rowGap={4}>
            <Box display="flex" flexDirection="column" rowGap={4}>
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
                  width: "80%",
                  height: { xs: 28, lg: 42 },
                }}
              />
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box display="flex" alignItems="center" columnGap={2}>
                  <GenericListSkeleton
                    items={1}
                    variant="circular"
                    gridProps={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                    gridItemProps={{
                      xs: 12,
                    }}
                    boxProps={{
                      p: 0,
                      width: 40,
                      height: 40,
                    }}
                  />
                  <Box display="flex" flexDirection="column" rowGap={0.5}>
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
                        width: { xs: 120, lg: 140 },
                        height: { xs: 17, lg: 19 },
                      }}
                    />
                    <Box display="flex" columnGap={2}>
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
                          width: { xs: 120, lg: 140 },
                          height: { xs: 21, lg: 23 },
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
                <Box display="flex" columnGap={4}>
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
                      width: { xs: 22, lg: 22 },
                      height: { xs: 44, lg: 47 },
                    }}
                  />
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
                      width: { xs: 22, lg: 22 },
                      height: { xs: 44, lg: 47 },
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <Divider sx={{ opacity: 0.75 }} />
            <Box display="flex" justifyContent="start">
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
                  width: { xs: "100%", lg: "75%" },
                  height: { xs: 100, lg: 300 },
                }}
              />
            </Box>
            <Box display="flex" width="100%" sx={{ textAlign: "inherit" }}>
              <GenericListSkeleton
                items={4}
                gridProps={{
                  flexWrap: "unset",
                  rowGap: 3,
                }}
                boxProps={{
                  p: 0,
                  width: { xs: "100%", lg: "80%" },
                  height: { xs: 20, lg: 25 },
                }}
              />
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogDetailSkeleton;
