import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const MyProfilePageBase = dynamic(() => import("./common/ProfilePageLayout"));

const ProfilePage = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <>
      <MyProfilePageBase Component={Component} pageProps={pageProps} />
    </>
  );
};

export default ProfilePage;
