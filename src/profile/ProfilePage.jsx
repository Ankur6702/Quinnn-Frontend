import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import useAuth from "../common/context/useAuth";
import useUserContext from "./context/useUserContext";

const MyProfilePageBase = dynamic(() => import("./common/ProfilePageLayout"));

const ProfilePage = ({ Component, pageProps }) => {
  const router = useRouter();
  const { user } = useUserContext();
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    if (!isAuthenticated) {
      router.push(`${FRONTEND_LOGIN_PAGE_URL}?next=${router.asPath}`);
    }
  }, [isAuthenticated, router, user]);

  return !isAuthenticated ? (
    <></>
  ) : (
    <MyProfilePageBase Component={Component} pageProps={pageProps} />
  );
};

export default ProfilePage;
