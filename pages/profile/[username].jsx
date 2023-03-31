import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";

import PublicProfile from "@/src/profile/components/public/PublicProfile";
import CircularLoaderSkeleton from "@/src/common/components/skeletons/CircularLoaderSkeleton";
import ProfileService from "@/src/profile/service/ProfileService";
import useUserContext from "@/src/profile/context/useUserContext";

const profileService = new ProfileService();
// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function () {
  const router = useRouter();
  const { user } = useUserContext();
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const [isFollowing, setIsFollowing] = useState();
  const { username } = router.query;

  const fetchUserData = useCallback(async () => {
    try {
      const reqUrl = `${process.env.API_BASE_SERVICE}/api/user/search/${username}`;
      setIsLoading(true);
      const Response = await profileService.get(reqUrl);
      setIsFollowing(Response?.data?.isFollowing);
      setProfile(Response?.data?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [username]);

  const updateProfile = (updatedProfile) => {
    setProfile(updatedProfile);
  };

  const followUser = () => {
    setIsFollowing(true);
  };
  const unFollowUser = () => {
    setIsFollowing(false);
  };

  useEffect(() => {
    if (username === user?.username) {
      router.push("/profile");
    } else {
      fetchUserData();
    }
  }, [fetchUserData, router, user?.username, username]);

  return (
    <>
      {isLoading && username ? (
        <CircularLoaderSkeleton />
      ) : (
        <PublicProfile
          profile={profile}
          isFollowing={isFollowing}
          followUser={followUser}
          unFollowUser={unFollowUser}
          updateProfile={updateProfile}
        />
      )}
    </>
  );
}
