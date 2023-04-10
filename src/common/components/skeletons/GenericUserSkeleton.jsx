/* eslint-disable @next/next/no-img-element */
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import GenericListSkeleton from "./GenericListSkeleton";
import { neutral } from "../../config/colors";

const GenericUserSkeleton = ({ items = 3, gridProps, gridItemProps }) => {
  return (
    <Grid
      container
      display="flex"
      flexDirection="column"
      rowGap={3}
      {...(gridProps || {})}
    >
      {[...Array(items)].map((_, idx) => (
        <Grid item xs={12} key={idx} {...(gridItemProps || {})}>
          <Box display="flex" columnGap={2} width="100%">
            <GenericListSkeleton
              items={1}
              variant="circular"
              gridProps={{
                width: "auto",
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

            <Box display="flex" flexDirection="column" rowGap={2} flexGrow={1}>
              <Box display="flex" justifyContent="space-between">
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
                      width: { xs: 120, lg: 120 },
                      height: 20,
                    }}
                  />
                  <Box display="flex" alignItems="center" columnGap={3}>
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
                        width: { xs: 50, lg: 50 },
                        height: 20,
                      }}
                    />
                  </Box>
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
                      width: { xs: 70, lg: 90 },
                      height: 20,
                    }}
                  />
                </Box>
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
                    width: { xs: "100%", lg: "100%" },
                    height: 60,
                  }}
                />
              </Box>
            </Box>
          </Box>
          {/* <Box
            display="flex"
            boxSizing="border-box"
            py={4}
            sx={{
              maxWidth: "auto",
              width: "100%",
              height: "100%",
              bgcolor: neutral["A500"],
              borderRadius: 2,
            }}
          >
            <Box display="flex" flexDirection="column" rowGap={3} width="100%">
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                px={4}
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
                        height: { xs: 17, lg: 17 },
                      }}
                    />
                    <Box display="flex" alignItems="center" columnGap={0.5}>
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
                          width: { xs: 100, lg: 100 },
                          height: 20,
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center" columnGap={0.5}>
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
                      width: { xs: 100, lg: 100 },
                      height: 20,
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
                  p: 0,
                  px: 4,
                  width: "100%",
                  height: { xs: 20, lg: 20 },
                }}
              />
            </Box>
          </Box> */}
        </Grid>
      ))}
    </Grid>
  );
};

export default GenericUserSkeleton;
