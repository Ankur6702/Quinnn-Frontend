import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import useAuth from "../common/context/useAuth";

const MyProfilePageBase = dynamic(() => import("./common/ProfilePageLayout"));

const ProfilePage = ({ Component, pageProps }) => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    if (!isAuthenticated) {
      router.push(`${FRONTEND_LOGIN_PAGE_URL}?next=${router.asPath}`);
    }
  }, [isAuthenticated, router]);

  return !isAuthenticated ? (
    <></>
  ) : (
    <MyProfilePageBase Component={Component} pageProps={pageProps} />
  );
};

export default ProfilePage;
