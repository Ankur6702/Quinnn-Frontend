/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import EventIcon from "@mui/icons-material/Event";

import { useMediaQuery, useTheme } from "@mui/material";
import ShareModal from "@/src/common/components/share/ShareModal";
import useUserContext from "@/src/profile/context/useUserContext";
import EventsService from "../../services/EventsService";
import SubmitButton from "@/src/common/components/forms/SubmitButton";

import EventOptions from "./EventOptions";
import { formatEventDate } from "@/src/common/utils/utils";
import { USER_NOT_FOUND } from "@/src/profile/utils/constants";
import { neutral } from "@/src/common/config/colors";

const eventsService = new EventsService();
const EventDetails = ({ event, eventCreator }) => {
  const theme = useTheme();
  const router = useRouter();
  const { user } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [noOfAttendess, setNoOfAttendess] = useState(event?.attendees?.length);
  const [share, setShare] = useState(false);
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (event?.attendees.includes(user?._id)) {
      setIsRegistered(true);
    } else {
      setIsRegistered(false);
    }
  }, [event?.attendees, user?._id]);

  const handleRegister = async () => {
    const reqUrl = `${process.env.API_BASE_SERVICE}/api/event/register/${event?._id}`;
    setIsLoading(true);
    const Response = await eventsService.put(reqUrl);
    setIsRegistered(true);
    setNoOfAttendess((prev) => prev + 1);
    setIsLoading(false);
  };

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
            <Box height={{ xs: 230, md: 400 }} width="100%">
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
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: neutral["800"],
                    fontWeight: 600,
                    fontSize: { xs: 14, lg: 22 },
                    maxWidth: 550,
                  }}
                >
                  {event?.title}
                </Typography>
                <EventOptions event={event} />
              </Box>
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
                    {formatEventDate(
                      event?.startDate,
                      event?.startTime,
                      event?.endTime
                    )}
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
                          bgcolor: "#002222",
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
                {`${noOfAttendess} attendees`}
              </Typography>
            </Box>
            <Box display="flex" columnGap={4} px={6}>
              {isRegistered ? (
                <Button
                  type="submit"
                  variant="contained"
                  disabled={true}
                  sx={{ py: 1 }}
                >
                  Registered
                </Button>
              ) : (
                <SubmitButton
                  onClick={handleRegister}
                  disabled={isLoading}
                  variant="contained"
                  buttonProps={{
                    sx: {
                      textTransform: "none",
                      fontSize: { xs: 12, md: 16 },
                      fontWeight: 500,
                      borderRadius: 2,
                      boxShadow: "none",
                    },
                  }}
                >
                  Attend
                </SubmitButton>
              )}

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
            Whoops! Event not found
          </Typography>
        </Box>
      )}
    </>
  );
};

export default EventDetails;
