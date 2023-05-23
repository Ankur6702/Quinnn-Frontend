/* eslint-disable @next/next/no-img-element */
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useMediaQuery, useTheme } from "@mui/material";

import GenericListSkeleton from "./GenericListSkeleton";
import { neutral } from "../../config/colors";

const BlogsItemsSkeleton = ({ items = 2, gridProps, gridItemProps }) => {
  const theme = useTheme();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      container
      display="flex"
      flexDirection="column"
      {...(gridProps || {})}
    >
      {[...Array(items)].map((_, idx) => (
        <Grid item xs={12} key={idx} {...(gridItemProps || {})}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width={isDownMd ? "100%" : "90%"}
          >
            <Box display="flex" flexDirection="column" rowGap={3} width="70%">
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                px={0}
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  columnGap={2}
                >
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
                      width: 25,
                      height: 25,
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
                      width: { xs: 120, lg: 140 },
                      height: { xs: 20, lg: 25 },
                    }}
                  />
                </Box>
              </Box>
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
                  width: "100%",
                  height: { xs: 37, md: 25 },
                }}
              />
              {!isDownMd && (
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
                    width: "100%",
                    height: { xs: 200, lg: 96 },
                  }}
                />
              )}
              <Box display="flex" width="100%" columnGap={3}>
                <GenericListSkeleton
                  items={1}
                  gridProps={{
                    display: "flex",
                    flexDirection: "row",
                    width: 70,
                  }}
                  gridItemProps={{
                    xs: 12,
                  }}
                  boxProps={{
                    p: 0,
                    width: { xs: 70, lg: 70 },
                    height: { xs: 20, lg: 32 },
                  }}
                />

                <GenericListSkeleton
                  items={1}
                  gridProps={{
                    display: "flex",
                    flexDirection: "row",
                    width: 70,
                  }}
                  gridItemProps={{
                    xs: 12,
                  }}
                  boxProps={{
                    p: 0,
                    width: { xs: 70, lg: 70 },
                    height: { xs: 20, lg: 32 },
                  }}
                />
              </Box>
            </Box>
            <GenericListSkeleton
              items={1}
              gridProps={{
                display: "flex",
                flexDirection: "row",
                width: isDownMd ? 100 : 230,
                height: isDownMd ? 70 : 150,
              }}
              gridItemProps={{
                xs: 12,
              }}
              boxProps={{
                width: isDownMd ? 100 : 230,
                height: isDownMd ? 70 : 150,
              }}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogsItemsSkeleton;
