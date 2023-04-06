/* eslint-disable @next/next/no-img-element */
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import GenericListSkeleton from "./GenericListSkeleton";
import { neutral } from "../../config/colors";

const PostSkeleton = ({ items = 2, gridProps, gridItemProps }) => {
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
            boxSizing="border-box"
            py={4}
            sx={{
              maxWidth: "auto",
              width: "100%",
              height: "100%",
              bgcolor: neutral["A500"],
              borderRadius: 2,
              boxShadow:
                " rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
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
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <IconButton
                    disabled={true}
                    sx={{ p: 1 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <MoreVertIcon fontSize="small" />
                  </IconButton>
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
                  height: { xs: 200, lg: 250 },
                }}
              />
              <Box
                display="flex"
                px={4}
                width="100%"
                justifyContent="space-between"
              >
                <Box display="flex" columnGap={1} alignItems="center">
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
                      width: { xs: 70, lg: 70 },
                      height: { xs: 30, lg: 30 },
                    }}
                  />
                </Box>
                <Box display="flex" columnGap={1} alignItems="center">
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
                      width: { xs: 70, lg: 70 },
                      height: { xs: 30, lg: 30 },
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
                      width: { xs: 40, lg: 40 },
                      height: { xs: 30, lg: 30 },
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default PostSkeleton;
