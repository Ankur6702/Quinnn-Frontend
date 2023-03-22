import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";

import useAsync from "@/src/common/components/custom-hooks/useAsync";
import GenericResponseHandler from "@/src/common/components/skeletons/GenericResponseHandler";
import CircularLoaderSkeleton from "@/src/common/components/skeletons/CircularLoaderSkeleton";

const ProfilePageLayout = ({ Component, pageProps }) => {
  const { data: profile, run, status, error, setData } = useAsync();

  const updateProfileData = (data) => {
    setData(data);
  };
  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     const profileService = new (
  //       await import("../service/ProfileService")
  //     ).default();
  //     run(profileService.getProfile())
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((error) => console.error(error));
  //   };
  //   fetchPosts();
  // }, [run]);

  return (
    <GenericResponseHandler
      status={"resolved"}
      error={error}
      skeleton={<CircularLoaderSkeleton />}
    >
      <Component
        profile={profile}
        error={error}
        status={status}
        updateProfileData={updateProfileData}
        {...pageProps}
      />
    </GenericResponseHandler>
  );
};

export default ProfilePageLayout;
