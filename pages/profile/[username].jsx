import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";

import PublicProfile from "@/src/profile/components/public/PublicProfile";
import CircularLoaderSkeleton from "@/src/common/components/skeletons/CircularLoaderSkeleton";
import ProfileService from "@/src/profile/service/ProfileService";

const profileService = new ProfileService();
// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function () {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const { username } = router.query;

  const fetchUserData = useCallback(async () => {
    try {
      const reqUrl = `${process.env.API_BASE_SERVICE}/api/user/search/${username}`;
      setIsLoading(true);
      const Response = await profileService.get(reqUrl);
      console.log(Response);
      setProfile(Response?.data?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [username]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  return (
    <>
      {isLoading ? (
        <CircularLoaderSkeleton />
      ) : (
        <PublicProfile profile={profile} />
      )}
    </>
  );
}
