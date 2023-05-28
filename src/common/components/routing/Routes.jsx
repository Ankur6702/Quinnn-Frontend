import React from "react";
import { useRouter } from "next/router";

import Route from "./Route";
import AccountsLayout from "@/src/accounts/AccountsLayout";
import useUserContext from "@/src/profile/context/useUserContext";
import Layout from "../Layout/components/Layout";
import HomePage from "@/src/home/HomePage";
import TermsPage from "@/src/terms-&-conditions/common/TermsPage";
import ProfilePage from "@/src/profile/ProfilePage";
import UserProvider from "@/src/profile/context/UserProvider";
import CircularLoaderSkeleton from "../skeletons/CircularLoaderSkeleton";
import useAuth from "../../context/useAuth";
import PostsProvider from "@/src/home/context/PostsProvider";

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
          <Route path="/terms-&-conditions">
            <TermsPage>
              <Component {...pageProps} />
            </TermsPage>
          </Route>
          <UserProvider>
            <PostsProvider>
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
              {!["accounts", "home", "profile", "terms-&-conditions"].includes(
                router.asPath.split("/")[1]
              ) && (
                <Route path="/" isBaseRoute>
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                </Route>
              )}{" "}
            </PostsProvider>
          </UserProvider>
        </>
      )}
    </>
  );
};

export default Routes;
