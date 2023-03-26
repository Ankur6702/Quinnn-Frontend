import React from "react";
import { useRouter } from "next/router";

import Route from "./Route";
import AccountsLayout from "@/src/accounts/AccountsLayout";
import Layout from "../Layout/components/Layout";
import HomePage from "@/src/home/HomePage";
import ProfilePage from "@/src/profile/ProfilePage";
import UserProvider from "@/src/profile/context/UserProvider";
import CircularLoaderSkeleton from "../skeletons/CircularLoaderSkeleton";
import useAuth from "../../context/useAuth";

const Routes = ({ Component, pageProps }) => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  return (
    <>
      {isAuthenticated === null ? (
        <CircularLoaderSkeleton sx={{ height: "100vh" }} />
      ) : (
        <>
          <Route path="/accounts">
            <AccountsLayout>
              <Component {...pageProps} />
            </AccountsLayout>
          </Route>
          <UserProvider>
            <Route path="/home">
              <Layout>
                <HomePage>
                  <Component {...pageProps} />
                </HomePage>
              </Layout>
            </Route>
            <Route path="/profile">
              <Layout>
                <ProfilePage Component={Component} pageProps={pageProps} />
              </Layout>
            </Route>
            {!["accounts", "home", "profile"].includes(
              router.asPath.split("/")[1]
            ) && (
              <Route path="/" isBaseRoute>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </Route>
            )}
          </UserProvider>
        </>
      )}
    </>
  );
};

export default Routes;
