import React, { useEffect, useState } from "react";
import Link from "next/link";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";

import GenericResponseHandler from "../../skeletons/GenericResponseHandler";
import GenericUserSkeleton from "../../skeletons/GenericUserSkeleton";
import useAsync from "@/src/common/components/custom-hooks/useAsync";
import ProfileService from "@/src/profile/service/ProfileService";
import useUserContext from "@/src/profile/context/useUserContext";
import { neutral } from "../../../config/colors";
import { FEMALE_AVATAR, MALE_AVATAR } from "@/src/profile/utils/constants";
import { SITE_NAME } from "@/src/common/config/seo";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const profileService = new ProfileService();
const ListUsersModal = ({ isOpen, handleClose, modalType }) => {
  const { data: usersList, run, status, error, setData } = useAsync();
  const { user } = useUserContext();

  useEffect(() => {
    const fetchFollowers = async () => {
      run(profileService.fetchUserFollowers(user?._id))
        .then((response) => {})
        .catch((error) => console.error(error));
    };
    const fetchFollowing = async () => {
      run(profileService.fetchUserFollowing(user?._id))
        .then((response) => {})
        .catch((error) => console.error(error));
    };

    modalType === "followers" ? fetchFollowers() : fetchFollowing();
  }, [modalType, run, user?._id]);

  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      sx={{
        "& .MuiDialog-container": {
          alignItems: { xs: "center", md: "center" },
        },
        "& .MuiPaper-root": {
          borderRadius: 3,
          px: 1,
          pb: 1,
          minWidth: { xs: "90%", md: 500 },
          maxHeight: { xs: "80%", md: 520 },
          height: { xs: "100%", md: "100%" },
        },
      }}
    >
      <DialogTitle sx={{ py: 3 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: 18, lg: 20 },
              color: neutral["800"],
              fontWeight: 500,
              opacity: 0.9,
            }}
          >
            {modalType === "followers" ? "Your Audience" : "Your Friends"}
          </Typography>
          <IconButton
            aria-label="close"
            size="medium"
            sx={{ p: { xs: "0px !important", md: "8px !important" } }}
            onClick={handleClose}
          >
            <CloseIcon
              fontSize="medium"
              sx={{ color: neutral["800"], opacity: 0.8 }}
            />
          </IconButton>
        </Box>
      </DialogTitle>
      <Divider sx={{ opacity: 0.75, mx: 2 }} />
      <DialogContent
        sx={{
          py: 3,
          display: "flex",
          flexDirection: "column",
          px: { xs: 2, md: 6 },
          my: 2,
        }}
      >
        <Box
          height="100%"
          sx={{
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Box display="flex" flexDirection="column" rowGap={3}>
            <GenericResponseHandler
              status={status}
              error={error}
              skeleton={<GenericUserSkeleton />}
            >
              {usersList?.data?.length > 0 ? (
                usersList?.data.map((usersData, index) => (
                  <Link href={`/profile/${usersData?.username}`} key={index}>
                    <Box display="flex" columnGap={2} width="100%">
                      <Avatar
                        alt="profile-photo"
                        sx={{
                          width: 40,
                          height: 40,
                          fontSize: 15,
                        }}
                        src={
                          usersData?.profileImageURL === null ||
                          usersData?.profileImageURL === ""
                            ? usersData?.gender === "Female" ||
                              usersData?.gender === "Lesbian"
                              ? FEMALE_AVATAR
                              : MALE_AVATAR
                            : usersData?.profileImageURL
                        }
                      />

                      <Box
                        display="flex"
                        flexDirection="column"
                        rowGap={2}
                        flexGrow={1}
                      >
                        <Box display="flex" justifyContent="space-between">
                          <Box
                            display="flex"
                            flexDirection="column"
                            rowGap={0.5}
                          >
                            <Typography
                              variant="h4"
                              sx={{
                                color: neutral["900"],
                                fontWeight: 500,
                                fontSize: { xs: 14, lg: 14 },
                              }}
                            >
                              {usersData?.name}
                            </Typography>
                            <Box
                              display="flex"
                              alignItems="center"
                              columnGap={3}
                            >
                              <Typography
                                variant="h6"
                                sx={{
                                  color: neutral["700"],
                                  fontWeight: 400,
                                  fontSize: { xs: 12, lg: 12 },
                                }}
                              >
                                {`@${usersData?.username}`}
                              </Typography>
                              {usersData?.following?.includes(user?._id) && (
                                <Box
                                  sx={{
                                    px: 1,
                                    borderRadius: 1,
                                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                                  }}
                                >
                                  <Typography
                                    variant="h6"
                                    sx={{
                                      color: neutral["700"],
                                      fontWeight: 400,
                                      fontSize: { xs: 12, lg: 12 },
                                    }}
                                  >
                                    Follows you
                                  </Typography>
                                </Box>
                              )}
                            </Box>
                          </Box>

                          <Box>
                            <Typography
                              variant="h6"
                              sx={{
                                color: neutral["700"],
                                fontWeight: 400,
                                fontSize: { xs: 12, lg: 12 },
                              }}
                            >
                              {`${usersData?.followers?.length} ${
                                usersData?.followers?.length > 1
                                  ? "Followers"
                                  : "Follower"
                              }`}
                            </Typography>
                          </Box>
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              color: neutral["800"],
                              fontWeight: 400,
                              fontSize: { xs: 12, lg: 14 },
                            }}
                          >
                            {usersData?.bio
                              ? usersData?.bio
                              : `Hey there! I'm ${usersData?.name}. I'm excited to connect with new people on ${SITE_NAME} and share my experiences with you all. Do follow for more updates from me soon!`}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Link>
                ))
              ) : (
                <Typography
                  variant="h6"
                  sx={{
                    color: neutral["700"],
                    fontWeight: 400,
                    textAlign: "center",
                    fontSize: { xs: 12, lg: 14 },
                  }}
                >
                  You are not following anyone
                </Typography>
              )}
            </GenericResponseHandler>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ListUsersModal;
