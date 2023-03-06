import React from "react";
import { useRouter } from "next/router";

import Route from "./Route";
import AccountsLayout from "@/src/accounts/AccountsLayout";
import Layout from "../Layout/components/Layout";
import HomePage from "@/src/home/HomePage";

const Routes = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <>
      <Route path="/accounts">
        {router.asPath == "/accounts/signup" ||
        router.asPath == "/accounts/signin" ? (
          <AccountsLayout>
            <Component {...pageProps} />
          </AccountsLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </Route>
      <Route path="/home">
        <Layout>
          <HomePage>
            <Component {...pageProps} />
          </HomePage>
        </Layout>
      </Route>
      {!["accounts", "home"].includes(router.asPath.split("/")[1]) && (
        <Route path="/" isBaseRoute>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Route>
      )}
    </>
  );
};

export default Routes;
