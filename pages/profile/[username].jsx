import React, { useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Head from "next/head";
import Box from "@mui/system/Box";

import PublicProfile from "@/src/profile/components/public/PublicProfile";
import GenericResponseHandler from "@/src/common/components/skeletons/GenericResponseHandler";
import useAsync from "@/src/common/components/custom-hooks/useAsync";
import CircularLoaderSkeleton from "@/src/common/components/skeletons/CircularLoaderSkeleton";
import ProfileService from "@/src/profile/service/ProfileService";

const profileService = new ProfileService();
// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function () {
  const router = useRouter();
  const { username } = router.query;
  const { data: profile, run, status, error } = useAsync();

  useEffect(() => {
    const fetchProfile = async () => {
      run(profileService.fetchProfile(username))
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.error(error));
    };
    fetchProfile();
  }, [run, username]);

  return (
    <GenericResponseHandler
      status={status}
      error={error}
      skeleton={<CircularLoaderSkeleton />}
    >
      <PublicProfile profile={profile?.data[0]} />
    </GenericResponseHandler>
  );
}
