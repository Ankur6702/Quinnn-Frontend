import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const MyProfilePageBase = dynamic(() => import("./common/ProfilePageLayout"));

const ProfilePage = ({ Component, pageProps }) => {
  const router = useRouter();

  // useEffect(() => {
  //   if (!authService.isAuthenticated) {
  //     router.push(`${USER_LOGIN_URL}?next=${router.asPath}`);
  //     return;
  //   }
  // }, []);

  return (
    <>
      <MyProfilePageBase Component={Component} pageProps={pageProps} />
    </>
  );
};

export default ProfilePage;
