/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import EventIcon from "@mui/icons-material/Event";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { useMediaQuery, useTheme } from "@mui/material";

import ShareModal from "@/src/common/components/share/ShareModal";
import { USER_NOT_FOUND } from "@/src/profile/utils/constants";
import { Blues, neutral } from "@/src/common/config/colors";

const EventDetails = ({ event, eventCreator }) => {
  const theme = useTheme();
  const router = useRouter();
  const [share, setShare] = useState(false);
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {event ? (
        <Box display="flex" flexDirection="column" rowGap={6}>
          <Box
            sx={{
              maxWidth: 800,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              rowGap: 2,
              bgcolor: neutral["A500"],
              borderRadius: 3,
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;",
              pb: 6,
            }}
          >
            <Box height={{ xs: 230, md: 400 }} width={{ xs: "100%", md: 800 }}>
              <img
                src={event?.imageURL}
                alt="My Image"
                width="100%"
                height={isDownMd ? 230 : 400}
                style={{
                  borderTopRightRadius: "12px",
                  borderTopLeftRadius: "12px",
                }}
              />
            </Box>
            <Box
              sx={{ my: 4, px: 6 }}
              display="flex"
              flexDirection="column"
              rowGap={2}
            >
              <Typography
                variant="h3"
                sx={{
                  color: neutral["800"],
                  fontWeight: 600,
                  fontSize: { xs: 14, lg: 22 },
                }}
              >
                {event?.title}
              </Typography>
              <Link href={`/profile/${eventCreator?.username}`}>
                <Typography
                  variant="h3"
                  sx={{
                    color: neutral["A100"],
                    fontWeight: 500,
                    fontSize: { xs: 14, lg: 16 },
                  }}
                >
                  {`Event by ${eventCreator?.name}`}
                </Typography>
              </Link>
              <Box display="flex" columnGap={6} alignItems="center">
                <Box display="flex" columnGap={1} alignItems="center">
                  <EventIcon sx={{ color: neutral["600"], fontSize: "18px" }} />
                  <Typography
                    variant="h6"
                    sx={{
                      color: neutral["600"],
                      fontWeight: 400,
                      fontSize: { xs: 12, lg: 14 },
                    }}
                  >
                    Fri, Apr 7, 2023, 9:30 PM - 10:30 PM
                  </Typography>
                </Box>
              </Box>
              {event?.isOnline ? (
                <Box display="flex" columnGap={1} alignItems="center">
                  <Box>
                    <Box
                      sx={{
                        borderRadius: "50%",
                        width: "10px !important",
                        height: "10px !important",
                        bgcolor: "green",
                      }}
                    ></Box>
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      width: "90%",
                      color: neutral["700"],
                      fontWeight: 400,
                      fontSize: { xs: 14, lg: 16 },
                    }}
                  >
                    Online
                  </Typography>
                </Box>
              ) : (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="flex-start"
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: neutral["600"],
                      fontWeight: 400,
                      fontSize: { xs: 12, lg: 14 },
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="span"
                      sx={{
                        color: neutral["800"],
                        fontWeight: 500,
                        fontSize: { xs: 12, lg: 14 },
                      }}
                    >
                      Address:{" "}
                    </Typography>
                    {event?.location}
                  </Typography>
                  <Box display="flex" columnGap={1} alignItems="center">
                    <Box>
                      <Box
                        sx={{
                          borderRadius: "50%",
                          width: "10px !important",
                          height: "10px !important",
                          bgcolor: "red",
                        }}
                      ></Box>
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        width: "90%",
                        color: neutral["700"],
                        fontWeight: 400,
                        fontSize: { xs: 14, lg: 16 },
                      }}
                    >
                      Offline
                    </Typography>
                  </Box>
                </Box>
              )}
              <Typography
                variant="h6"
                sx={{
                  color: neutral["600"],
                  fontWeight: 500,
                  fontSize: { xs: 12, lg: 14 },
                }}
              >
                {`${event?.attendees?.length} attendees`}
              </Typography>
            </Box>
            <Box display="flex" columnGap={4} px={6}>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  fontSize: { xs: 12, md: 16 },
                  fontWeight: 500,
                  borderRadius: 2,
                  boxShadow: "none",
                }}
              >
                Attend
              </Button>
              <Button
                variant="outlined"
                onClick={() => setShare(true)}
                startIcon={!isDownMd && <ShareIcon />}
                sx={{
                  textTransform: "none",
                  fontSize: { xs: 12, md: 16 },
                  fontWeight: 500,
                  borderRadius: 2,
                }}
              >
                Share
              </Button>
              {share && (
                <ShareModal
                  copyLink={`${process.env.BASE_FRONTEND_URL}/${router.asPath}`}
                  closeModal={() => setShare(false)}
                  facebook={`${process.env.BASE_FRONTEND_URL}/${router.asPath}`}
                  linkedin={`${process.env.BASE_FRONTEND_URL}/${router.asPath}`}
                  twitter={`${process.env.BASE_FRONTEND_URL}/${router.asPath}`}
                  title="Share this Post"
                  instagram={`${process.env.BASE_FRONTEND_URL}/${router.asPath}`}
                />
              )}
            </Box>
          </Box>
          <Box
            sx={{
              maxWidth: 800,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              rowGap: 2,
              bgcolor: neutral["A500"],
              borderRadius: 3,
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;",
              pb: 6,
            }}
          >
            <Box
              sx={{ my: 4, px: 6 }}
              display="flex"
              flexDirection="column"
              rowGap={2}
            >
              <Typography
                variant="h3"
                sx={{
                  color: neutral["800"],
                  fontWeight: 600,
                  fontSize: { xs: 14, lg: 22 },
                }}
              >
                About
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: neutral["600"],
                  fontWeight: 400,
                  fontSize: { xs: 14, lg: 16 },
                }}
                dangerouslySetInnerHTML={{
                  __html: event?.description,
                }}
              />
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          rowGap={1}
          justifyContent="center"
          alignItems="center"
          width="100%"
          flexGrow={1}
        >
          <Image
            src={USER_NOT_FOUND}
            alt="user not found"
            width={isDownMd ? 250 : 300}
            height={isDownMd ? 250 : 320}
          />
          <Typography
            variant="h4"
            component="span"
            sx={{
              color: neutral["900"],
              fontWeight: 500,
              fontSize: { xs: 16, lg: 22 },
            }}
          >
            Whoops! User not found
          </Typography>
        </Box>
      )}
    </>
  );
};

export default EventDetails;
